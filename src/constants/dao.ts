import { ProposalType, UIProposalType } from "types/dao";

export const ProposalALLOCATEFUNDS = "Request a Fund allocation";
export const ProposalCHANGEADMIN = "Change the Admin";
export const ProposalCHANGEQUORUM = "Increase voting quorum";
export const ProposalCHANGEFEE = "Change the membership fee";
export const ProposalEJECTMEMBER = "Remove a non-admin member";
export const ProposalTREASURY = "Open or close the Treasury";
export const ProposalREGISTER = "Change self-registration";
export const ProposalSTOP = "(Admin) Close down permanently";

export const proposalTypes: UIProposalType[] = [
  { text: ProposalSTOP, type: ProposalType.STOP },
  { text: ProposalCHANGEADMIN, type: ProposalType.CHANGEADMIN },
  { text: ProposalCHANGEFEE, type: ProposalType.CHANGEADMIN },
  { text: ProposalCHANGEQUORUM, type: ProposalType.CHANGEADMIN },
  { text: ProposalREGISTER, type: ProposalType.CHANGEADMIN },
  { text: ProposalTREASURY, type: ProposalType.CHANGEADMIN },
  { text: ProposalEJECTMEMBER, type: ProposalType.EJECTMEMBER },
  { text: ProposalALLOCATEFUNDS, type: ProposalType.ALLOCATEFUNDS }
];
