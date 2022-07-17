import { escrowBackend } from "reach/backends";
import { ReachAccount } from "@jackcom/reachduck";
import { createReachAPI, parseAddress } from "@jackcom/reachduck";
import { TokenID } from "types/shared";
import handleTxnFail from "./handleTxnFail";
import { resetNotifications, updateAsError, updateNotification } from "state";

export type EscrowData = {
  item: TokenID;
  amount: number;
  buyNowPrice: number;
  wantsItem: TokenID;
  wantsAmount: number;
};

/** Notify UI while `Escrow` contract deploys */
export async function createEscrowContract(
  acc: ReachAccount,
  data: EscrowData
) {
  const id = resetNotifications("Creating Escrow contract .. ", true);
  const ctcInfo = await deploy(acc, data);
  if (ctcInfo === null) {
    updateAsError(id, "❌ Escrow contract was not created");
  } else updateNotification(id, `Contract launched at ${ctcInfo}`);

  return ctcInfo;
}

/** Deploy an `Escrow` contract */
async function deploy(acc: ReachAccount, data: EscrowData) {
  const stdlib = createReachAPI();
  const ctc = acc.contract(escrowBackend);
  const ctcInfo = await new Promise((resolve) =>
    ctc.participants
      .Admin({
        item: data.item,
        amount: data.amount,
        wantsAmount: data.wantsAmount,
        buyNowPrice: stdlib.parseCurrency(data.buyNowPrice),
        wantsItem: data.wantsItem,
        notifyDone: async (ctcAddr: any) => resolve(parseAddress(ctcAddr))
      })
      .catch((e: any) => {
        handleTxnFail(e);
        resolve(null);
      })
  );

  return ctcInfo === null ? ctcInfo : parseAddress(ctcInfo);
}
