import {
  ReachAccount,
  ReachToken,
  createReachAPI,
  fromMaybe,
  formatCurrency,
  parseAddress,
  formatAddress
} from "@jackcom/reachduck";
import ADI from "ADI";
import { tokenMetadata } from "reach";
import { exchangeBackend } from "reach/backends";
import ContractStore, { getExchangeContract } from "state/contracts";

export type ExchangeView = Record<string, any> & {
  ctcInfo: any;
  admin: string;
  conversion: number;
  largeBal: any;
  largeUnit: ReachToken;
  smallBal: any;
  smallUnit: ReachToken;
};

export async function loadExchangeView(
  ctc: any,
  acc: ReachAccount,
  storeContract = false
): Promise<ExchangeView | null> {
  const reach = createReachAPI();
  const ctcInfo = parseAddress(ctc);
  const contract =
    getExchangeContract(ctcInfo) || acc.contract(exchangeBackend, ctcInfo);

  try {
    const Bals = fromMaybe(await contract.views.balances());
    const Details = fromMaybe(await contract.views.info());
    if (!Details || !Bals) {
      ADI.removeItem(ctcInfo, "exchanges");
      return null;
    }

    const { admin, smallUnit: small, largeUnit: large, conversion } = Details;
    const { smallBal, largeBal } = Bals;

    if (!small || !large) return null;

    //   Tokens
    const [smallUnit, largeUnit] = await Promise.all([
      tokenMetadata(parseAddress(small), acc),
      tokenMetadata(parseAddress(large), acc)
    ]);
    const short = (val: any, dec: number) => formatCurrency(val, dec, true);
    const fmtConv = (val: any) =>
      Number(formatCurrency(val, smallUnit.decimals));

    const uiExchange = {
      ctcInfo,
      smallUnit,
      largeUnit,
      smallBal: short(smallBal, smallUnit.decimals),
      largeBal: short(largeBal, largeUnit.decimals),
      conversion: fmtConv(conversion),
      admin: formatAddress(admin)
    };

    const dbExchange = {
      ...uiExchange,
      smallUnit: uiExchange.smallUnit.id,
      largeUnit: uiExchange.largeUnit.id
    };

    if (storeContract) {
      const { exchanges } = ContractStore.getState();
      ContractStore.exchanges({ ...exchanges, [ctcInfo]: ctc });
    }

    return uiExchange;
  } catch (e) {
    console.log("loadTexView error", e);
    return null;
  }
}
