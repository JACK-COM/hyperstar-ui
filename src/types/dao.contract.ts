import { UIDao } from "reach/views/DaoView";

export enum ProposalActionType {
  ALLOCATEFUNDS = "AllocateFunds",
  CHANGEADMIN = "ChangeAdmin",
  CHANGEQUORUM = "ChangeQuorum",
  EJECTMEMBER = "EjectMember",
  NONE = "None",
  OPENCLOSETREASURY = "OpenCloseTreasury",
  REGISTERSELF = "RegisterSelf",
  STOP = "Stop"
}
export type AllocateFundsProp = {
  type: ProposalActionType.ALLOCATEFUNDS;
  toAddress: string;
  howMuch: string;
};
export type ChangeAdminProp = {
  type: ProposalActionType.CHANGEADMIN;
  toAddress: string;
};
export type ChangeQuorumProp = {
  type: ProposalActionType.CHANGEQUORUM;
  to: number;
};
export type EjectMemberProp = {
  type: ProposalActionType.EJECTMEMBER;
  memberAddress: string;
};
export type NoneProp = {
  type: ProposalActionType.NONE;
  value: null;
};
export type OpenCloseTreasuryProp = {
  type: ProposalActionType.OPENCLOSETREASURY;
  openTheTreasury: boolean;
};
export type RegisterSelfProp = {
  type: ProposalActionType.REGISTERSELF;
  allowSelfRegistration: boolean;
};
export type MemberProposal =
  | AllocateFundsProp
  | ChangeAdminProp
  | ChangeQuorumProp
  | EjectMemberProp
  | NoneProp
  | OpenCloseTreasuryProp
  | RegisterSelfProp;
export type VoteActionType = "For" | "Against";

export const proposalTypes: ProposalActionType[] = [
  ProposalActionType.ALLOCATEFUNDS,
  ProposalActionType.CHANGEADMIN,
  ProposalActionType.CHANGEQUORUM,
  ProposalActionType.EJECTMEMBER,
  ProposalActionType.OPENCLOSETREASURY,
  ProposalActionType.REGISTERSELF
];

export function proposalAction(type: ProposalActionType): MemberProposal {
  switch (type) {
    case ProposalActionType.ALLOCATEFUNDS:
      return { type, toAddress: "", howMuch: "" };
    case ProposalActionType.CHANGEADMIN:
      return { type, toAddress: "" };
    case ProposalActionType.CHANGEQUORUM:
      return { type, to: 1 };
    case ProposalActionType.EJECTMEMBER:
      return { type, memberAddress: "" };
    case ProposalActionType.OPENCLOSETREASURY:
      return { type, openTheTreasury: true };
    case ProposalActionType.REGISTERSELF:
      return { type, allowSelfRegistration: true };

    default:
      return { type: ProposalActionType.NONE, value: null };
  }
}

export function proposalActionText(type: ProposalActionType, d: UIDao): string {
  switch (type) {
    case ProposalActionType.ALLOCATEFUNDS:
      return "Allocate Funds to an address";
    case ProposalActionType.CHANGEADMIN:
      return "Change the DAO's admin settings";
    case ProposalActionType.CHANGEQUORUM:
      return "Change voting quorum";
    case ProposalActionType.EJECTMEMBER:
      return "Kick out a non-admin member";
    case ProposalActionType.OPENCLOSETREASURY: {
      const openClose = d.openTreasury ? "Close" : "Open";
      return `${openClose} the treasury to non-member recipients`;
    }
    case ProposalActionType.REGISTERSELF: {
      const openClose = d.openTreasury ? "Disallow" : "Allow";
      return `${openClose} self-registration`;
    }

    default:
      return "Select a Proposal";
  }
}
