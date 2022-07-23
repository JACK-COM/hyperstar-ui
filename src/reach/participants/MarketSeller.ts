import {
  ReachAccount,
  parseCurrency,
  tokenMetadata,
  createReachAPI,
  parseAddress
} from "@jackcom/reachduck";
import { SALE_ANNOUNCER } from "constants/announcers";
import { marketBackend } from "reach/backends";
import {
  updateNotification,
  resetNotifications,
  addNotification,
  updateAsError
} from "state";
import handleTxnFail from "./handleTxnFail";

/** Listing `Seller` options */
export type ListingDeployerOpts = {
  announcer: string | number;
  item: string | number;
  price: number;
  altPrice: number;
  altToken: string | number;
  qty: number;
  useBondingCurve: boolean;
};

/** Create a `Listing` contract */
export async function createSaleContract(
  data: ListingDeployerOpts,
  acc: ReachAccount
): Promise<any> {
  const id = resetNotifications(`💰 Listing item ...`, {
    persistent: true,
    loading: true
  });
  const ctcInfo = await deploy(acc, data);
  const { setSigningMonitor } = createReachAPI();
  setSigningMonitor(() => addNotification("Please sign transaction"));

  if (ctcInfo === null) {
    updateAsError(id, "❌ Contract was not created");
  } else updateNotification(id, `Item listed at "${ctcInfo}"!`, true);
  return ctcInfo;
}

/** Internal `deploy` action */
async function deploy(acc: ReachAccount, data: ListingDeployerOpts) {
  const USDC = 10458941;
  const sellerCtc = acc.contract(marketBackend);
  const [itemMeta, { decimals }] = await Promise.all([
    tokenMetadata(data.item, acc),
    tokenMetadata(data.altToken || USDC, acc)
  ]);

  const ctcInfo = await new Promise((resolve) =>
    sellerCtc.participants
      .Seller({
        ...data,
        announcer: SALE_ANNOUNCER,
        price: parseCurrency(data.price || 0, itemMeta.decimals),
        altToken: data.altToken || USDC,
        altPrice: parseCurrency(data.altPrice || 0, decimals),
        showComplete: async () => resolve(sellerCtc.getInfo())
      })
      .catch((e: any) => {
        handleTxnFail(e);
        resolve(null);
      })
  );

  return ctcInfo === null ? ctcInfo : parseAddress(ctcInfo);
}
