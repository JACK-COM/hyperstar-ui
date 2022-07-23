import {
  createReachAPI,
  formatAddress,
  formatCurrency,
  fromMaybe,
  ReachAccount
} from "@jackcom/reachduck";
import { getDaoDescription } from "graphql/queries";
import { daoBackend } from "reach/backends";
import { ChangeAdminProposition, ProposalType, Proposition } from "types/dao";
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
  currentVotes?: number;
  registerSelf: boolean;
  proposal?: Proposition;
};

/** Fetch DAO view details */
export async function getDaoView(acc: ReachAccount, ctcInfo: string | number) {
  const stdlib = createReachAPI();
  const addr = formatAddress(acc);
  const { views } = acc.contract(daoBackend, ctcInfo);
  const proposal: [string, any] = fromMaybe(await views.Proposal());
  const isMember = fromMaybe(await views.isMember(addr));
  const info = fromMaybe(await views.info());
  if (!info) return null;
  const description = await getDaoDescription(ctcInfo.toString());
  const currentVotes = fromMaybe(
    await views.currentVotes(),
    stdlib.bigNumberToNumber,
    0
  );

  const view: UIDao = {
    id: ctcInfo.toString(),
    name: trimByteString(info.name),
    admin: formatAddress(info.admin),
    fee: formatCurrency(info.fee),
    currentVotes,
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

/** Create a UI-friendly `Proposal` from contract data */
export function formatActiveProposal(p: Proposition, d: UIDao) {
  const stdlib = createReachAPI();

  if (p[1] === null) {
    return p[0] === "Stop"
      ? { text: "Shut down the DAO", value: undefined }
      : { text: "No Active Proposal", value: undefined };
  }

  if (p[0] === "AllocateFunds" || p[0] === "EjectMember")
    return {
      text: p[0].split(/A-Z/).join(" "),
      value: stdlib.formatAddress(p[1] as string),
      valueLabel:
        p[0] === "AllocateFunds" ? "Recipient Address" : "Member Address"
    };

  // Format ChangeAdmin
  const cap = p[1] as ChangeAdminProposition;
  const value = {
    ...cap,
    admin: stdlib.formatAddress(cap.admin),
    fee: formatCurrency(cap.fee),
    quorum: Number(cap.quorum)
  };
  const oldNew = (k: keyof UIDao): { old: any; new: any } => ({
    old: d[k],
    new: value[k as keyof typeof value]
  });

  switch (true) {
    case value.admin !== d.admin:
      return {
        text: "Change Admin",
        value: oldNew("admin")
      };

    case value.fee !== d.fee:
      return { text: "Change Registration Fee", value: oldNew("fee") };

    case value.quorum !== d.quorum:
      return { text: "Change Voting Quorum", value: oldNew("quorum") };

    case value.registerSelf !== d.registerSelf:
      return {
        text: value.registerSelf
          ? "Allow self-registration"
          : "Disable self-registration",
        value: oldNew("registerSelf")
      };

    default:
      return {
        text: value.openTreasury
          ? "Allow non-members to receive DAO funds"
          : "Allocate Funds to ONLY DAO Members",
        value: oldNew("openTreasury")
      };
  }
}

/** Create a UI-friendly `Proposal` title from contract data */
export function proposalTitleByType(type: string) {
  switch (type) {
    case ProposalType.CHANGEADMIN.valueOf():
      return "Change Admininstrative Settings";
    case ProposalType.ALLOCATEFUNDS.valueOf():
      return "Fund Allocation Request";
    case ProposalType.EJECTMEMBER.valueOf():
      return "Eject a (non-admin) member from DAO";
    case ProposalType.STOP.valueOf():
      return "Halt/close down the DAO";
    default:
      return "No active proposal";
  }
}
