export enum ProposalType {
  ALLOCATEFUNDS = "AllocateFunds",
  CHANGEADMIN = "ChangeAdmin",
  EJECTMEMBER = "EjectMember",
  NONE = "None",
  STOP = "Stop"
}
export type VoteActionType = "For" | "Against";

export type UIProposalType = { text: string; type: ProposalType };

export type ChangeAdminProposition = {
  admin: string;
  fee: any;
  quorum: any;
  registerSelf: boolean;
  openTreasury: boolean;
};

export type Vote = [VoteActionType, null];
export type Proposition =
  | [string, string]
  | [string, ChangeAdminProposition]
  | [string, null];
