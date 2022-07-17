/**
 * Model HSExchange
 */
export type HSExchange = {
  id: string;
  admin: string;
  largeUnit: string;
  smallUnit: string;
  conversion: number;
  created: Date;
  lastModified: Date;
  hidden: boolean;
};

/**
 * Model HSListing
 */
export type HSListing = {
  id: string;
  altPrice: string;
  altToken: string;
  item: string;
  price: string;
  qty: string;
  seller: string;
  bondingCurve: boolean;
  created: Date;
  lastModified: Date;
  ended: boolean;
  connector: HSConnector;
};

/**
 * Model HSDao
 */
export type HSDao = {
  id: string;
  name: string;
  description: string;
  admin: string;
  founder: string;
  created: string; // Date ISO string
//   lastModified?: string; // Date ISO string
  private: boolean;
  connector: HSConnector;
};

/**
 * Model HSProposal
 */
export type HSProposal = {
  id: string;
  proposer: string;
  index: number;
  type: HSProposalType;
  created: string; // Date ISO string
  concluded: string; // Date ISO string
  connector: HSConnector;
  hSDaoId: string | null;
};

/**
 * Model HSToken
 */
export type HSToken = {
  id: string;
  name: string;
  decimals: number;
  symbol: string;
  url: string;
  connector: HSConnector;
};

export enum HSConnector {
  ALGO = "ALGO",
  ETH = "ETH"
}

export enum HSProposalType {
  AllocateFunds = "AllocateFunds",
  ChangeAdmin = "ChangeAdmin",
  ChangeQuorum = "ChangeQuorum",
  EjectMember = "EjectMember",
  None = "None",
  OpenCloseTreasury = "OpenCloseTreasury",
  RegisterSelf = "RegisterSelf",
  Stop = "Stop"
}
