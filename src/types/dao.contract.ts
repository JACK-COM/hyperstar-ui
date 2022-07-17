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
  | OpenCloseTreasuryProp
  | RegisterSelfProp;
export type VoteActionType = "For" | "Against";
