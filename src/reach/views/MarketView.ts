import {
  ReachAccount,
  ReachContract,
  ReachToken,
  createReachAPI,
  fromMaybe,
  formatCurrency,
  parseAddress,
  formatNumberShort,
  Maybe,
  formatAddress
} from "@jackcom/reachduck";
import ADI from "ADI";
import { tokenMetadata } from "reach";
import { marketBackend } from "reach/backends";
import { addNotification } from "state";
import ContractStore, { getListingContract } from "state/contracts";

export type Sale = {
  ctc: any;
  item: ReachToken;
  altToken: ReachToken;
  closed?: boolean;
} & { [k: string]: any };

export async function loadSale(
  ctcInfo: any,
  acc: ReachAccount,
  storeContract = false
): Promise<Sale> {
  const reach = createReachAPI();
  const addr = parseAddress(ctcInfo);

  let contract: ReachContract<typeof marketBackend> = getListingContract(addr);
  if (!contract) {
    contract = acc.contract(marketBackend, addr);
    storeContract = true;
  }

  try {
    const Market = fromMaybe(await contract.views.info());
    const pricing = fromMaybe(await contract.views.pricing());

    if (!Market || !pricing) {
      ADI.removeItem(addr, "listings");
      return { ctc: addr, closed: true } as Sale;
    }

    const { price, altPrice, qty } = pricing;
    const { seller, altToken, item, useBondingCurve } = Market;

    //   Tokens
    const meta = await Promise.all(
      [item, altToken].map((i) => i && tokenMetadata(i, acc))
    );

    if (!meta[0]) return { ctc: addr, closed: true } as Sale;

    const listing = {
      ctc: addr,
      price: formatCurrency(price, meta[0].decimals),
      altPrice: formatCurrency(altPrice, meta[1].decimals),
      altToken: meta[1],
      item: meta[0],
      qty: reach.bigNumberToNumber(qty),
      seller: formatAddress(seller),
      useBondingCurve,
      value: calculateInvValue(qty, price, useBondingCurve)
    };

    if (storeContract) storeListingContract(addr, contract);
    ADI.cacheItem(addr, listing, "listings");

    return listing;
  } catch (e) {
    return { ctc: addr, closed: true } as Sale;
  }
}

function storeListingContract(info: any, ctc: ReachContract<any>) {
  const { bigNumberToNumber } = createReachAPI();
  const removeListing = () => {
    ADI.removeItem(info, "listings");
  };

  // Monitor events and update cache
  ctc.events.itemPurchased.monitor(async ({ what }) => {
    const [_tokenId, amt, balance] = what;
    const amtNumber = bigNumberToNumber(amt);
    const items = amtNumber === 1 ? "item" : "items";
    addNotification(`Someone purchased ${amtNumber} ${items}!`);

    ADI.getItem(info, "listings").then((listing) => {
      listing.qty = bigNumberToNumber(balance);
      if (listing.qty > 0) ADI.cacheItem(info, listing);
      else removeListing();
    });
  });

  // Clear cache when listing is closed
  ctc.events.listingClosed.monitor(removeListing);

  // Store to state and return
  const { marketplace } = ContractStore.getState();
  ContractStore.marketplace({ ...marketplace, [info]: ctc });
  return ctc;
}

export function calculateInvValue(
  qty: number,
  price: number,
  useBondingCurve = false
) {
  if (!useBondingCurve || qty === 1) return formatNumberShort(qty * price);

  let purchased = 0;
  let remaining = qty;
  let total = 0;
  do {
    const currentPrice = (qty / remaining) * price;
    total += currentPrice;
    remaining = qty - purchased;
    purchased += 1;
  } while (purchased < qty);

  return formatNumberShort(total);
}
