import {
  createReachAPI,
  formatAddress,
  formatCurrency,
  fromMaybe,
  ReachAccount
} from "@jackcom/reachduck";
import { getDaoDescription } from "graphql/queries";
import { daoBackend } from "reach/backends";
import { trimByteString } from "utils";

export type UIDao = {
  id: string;
  name: string;
  admin: string;
  founder: string;
  description?: string;
  fee: string;
  isAdmin: boolean;
  isMember: boolean;
  openTreasury: boolean;
  quorum: number;
  registerSelf: boolean;
  proposal?: any[];
};

export async function getDaoView(acc: ReachAccount, ctcInfo: string | number) {
  const stdlib = createReachAPI();
  const addr = formatAddress(acc);
  const { views } = acc.contract(daoBackend, ctcInfo);
  const proposal: [string, any] = fromMaybe(await views.Proposal());
  const isMember = fromMaybe(await views.isMember(addr));
  const info = fromMaybe(await views.info());
  if (!info) return null;
  const description = await getDaoDescription(ctcInfo.toString());

  const view: UIDao = {
    id: ctcInfo.toString(),
    name: trimByteString(info.name),
    admin: formatAddress(info.admin),
    fee: formatCurrency(info.fee),
    description,
    founder: formatAddress(info.founder),
    isAdmin: formatAddress(info.admin) === formatAddress(acc),
    isMember: isMember || false,
    openTreasury: info.openTreasury,
    quorum: stdlib.bigNumberToNumber(info.quorum),
    registerSelf: info.registerSelf
  };

  if (proposal) view.proposal = proposal;
  return view;
}
