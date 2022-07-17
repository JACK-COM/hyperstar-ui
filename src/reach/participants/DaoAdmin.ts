import {
  createReachAPI,
  formatAddress,
  parseAddress,
  ReachAccount
} from "@jackcom/reachduck";
import { addDAO } from "graphql";
import { HSConnector, HSDao } from "graphql/types";
import { daoBackend } from "reach/backends";
import {
  addNotification,
  resetNotifications,
  updateAsError,
  updateNotification
} from "state";
import handleTxnFail from "./handleTxnFail";

export type DaoDeployerOpts = {
  name: string;
  description: string;
  openTreasury: boolean;
  registerSelf: boolean;
  quorum: number;
  fee: number;
};

export async function createDaoContract(
  acc: ReachAccount,
  data: DaoDeployerOpts
) {
  const stat = { loading: true, persistent: true };
  const end = { loading: false };
  const id = resetNotifications(`Creating "${data.name}" contract ...`, stat);
  const ctcInfo = await deploy(acc, data);
  const founder = formatAddress(acc);
  const dao: HSDao = {
    ...data,
    id: ctcInfo,
    founder,
    admin: founder,
    connector: HSConnector.ALGO,
    created: new Date().toISOString(),
    private: false
  };

  if (ctcInfo === null) {
    updateAsError(id, `Could not create ${data.name}`);
    return ctcInfo;
  }

  updateNotification(id, `${data.name} was Created`, end);
  localStorage.setItem("new-dao", ctcInfo);
  await publishDAO(ctcInfo.toString(), dao);

  return ctcInfo;
}

export async function publishDAO(ctcInfo: string, data: HSDao) {
  const s = { loading: true, persistent: true };
  const e = { loading: false, persistent: false };
  const id = resetNotifications(`Publishing ${data.name} ...`, s);
  try {
    await addDAO(data);
    updateNotification(id, `${data.name} has been updated`, e);
  } catch (error) {
    handleTxnFail(error);
    const m = `${data.name} was created on-chain, but was not cached on Hyperstar.
    Please store this value ("${ctcInfo}") safely, and reload the page.
    `;
    updateAsError(id, m);
    localStorage.setItem("recover-dao", ctcInfo);
  } finally {
    localStorage.removeItem("new-dao");
  }
}

async function deploy(acc: ReachAccount, data: DaoDeployerOpts) {
  const ctc = acc.contract(daoBackend);
  const stdlib = createReachAPI();
  const ctcInfo = await new Promise((resolve) =>
    ctc.participants
      .Founder({
        name: data.name,
        fee: stdlib.parseCurrency(data.fee),
        quorum: stdlib.bigNumberify(data.quorum),
        registerSelf: data.registerSelf,
        openTreasury: data.openTreasury,
        done: (addr: any) => resolve(parseAddress(addr))
      })
      .catch((e: any) => {
        handleTxnFail(e);
        resolve(null);
      })
  );

  return ctcInfo === null ? ctcInfo : parseAddress(ctcInfo);
}
