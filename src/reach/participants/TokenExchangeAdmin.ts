import { exchangeBackend } from "reach/backends";
import { ReachAccount } from "@jackcom/reachduck/lib/types";
import {
  addNotification,
  resetNotifications,
  updateAsError,
  updateNotification
} from "state";
import { createReachAPI, parseAddress } from "@jackcom/reachduck";
import { EXCHANGE_ANNOUNCER } from "constants/announcers";
import { MarketDeployerOpts } from "types/shared";
import handleTxnFail from "./handleTxnFail";

/** Create fixed-rate token conversion pool */
export async function createTExContract(
  data: MarketDeployerOpts,
  acc: ReachAccount
) {
  const id = resetNotifications("Funding surrogate account ...", true);
  const { setSigningMonitor } = createReachAPI();
  setSigningMonitor(() => addNotification("Please sign transaction"));
  updateNotification(id, "🪙⟷🪙 Creating Pool Contract ... ", true);

  const ctcInfo = await deploy(acc, data);
  if (ctcInfo === null) {
    updateAsError(id, "😭 Pool creation failed");
  } else updateNotification(id, `📣 Contract created at "${ctcInfo}"!`);

  return ctcInfo;
}

/** Internal `deploy` action */
export async function deploy(acc: ReachAccount, data: MarketDeployerOpts) {
  const ctc = acc.contract(exchangeBackend);
  const ctcInfo = await new Promise((resolve) =>
    ctc.participants
      .Admin({
        ...data,
        announcer: EXCHANGE_ANNOUNCER,
        notifyComplete: async () => resolve(ctc.getInfo())
      })
      .catch((e: any) => {
        handleTxnFail(e);
        resolve(null);
      })
  );

  return ctcInfo === null ? ctcInfo : parseAddress(ctcInfo);
}
