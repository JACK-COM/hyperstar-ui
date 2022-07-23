import {
  ProposalCHANGEADMIN,
  ProposalCHANGEFEE,
  ProposalCHANGEQUORUM,
  ProposalREGISTER,
  ProposalTREASURY
} from "constants/dao";
import { UIDao } from "reach/views/DaoView";
import { ProposalType, UIProposalType } from "./dao";

export type SchemaDescription = {
  title: string;
  type: "string" | "boolean";
};

export type UIJsonSchema = {
  title: string;
  type: string;
  description?: string;
  required?: string[];
  properties: Record<string, SchemaDescription>;
};

export type UISchemaData = ReturnType<typeof schemaData>;

export const AllocateFundsSchema: UIJsonSchema = {
  type: "object",
  title: "Request for DAO Treasury allocation",
  required: ["toAddress", "howMuch"],
  properties: {
    address: {
      title: "Recipient Address",
      type: "string"
    },
    howMuch: {
      title: "How much are you requesting?",
      type: "string"
    }
  }
};

export const ChangeAdminSchema: UIJsonSchema = {
  type: "object",
  title: "Change the current DAO Admin",
  properties: {
    admin: {
      title: "New Admin's Address",
      type: "string"
    }
  }
};

export const ChangeFeeSchema: UIJsonSchema = {
  type: "object",
  title: "Change the DAO's registration fee'",
  description: "Registration fees go into the DAO treasury",
  properties: {
    fee: {
      title: "Enter a new registration fee",
      type: "string"
    }
  }
};

export const ChangeQuorumSchema: UIJsonSchema = {
  type: "object",
  title: "Change number of votes to ratify a Proposal",
  properties: {
    quorum: {
      title: "New Quorum",
      type: "string"
    }
  }
};

export const EjectMemberSchema: UIJsonSchema = {
  type: "object",
  title: "Remove a non-admin member from the DAO",
  properties: {
    address: {
      title: "Address to be ejected",
      type: "string"
    }
  }
};

export const OpenCloseTreasurySchema: UIJsonSchema = {
  type: "object",
  title: "Allow or disallow fund allocation to non-member addresses ",
  properties: {
    openTreasury: {
      title: "Allow non-member allocation?",
      type: "boolean"
    }
  }
};

export const RegisterSelfSchema: UIJsonSchema = {
  type: "object",
  title: "Allow or disallow anyone to join the DAO",
  description: "When disabled, only existing members can add new members.",
  properties: {
    registerSelf: {
      title: "Allow new members to register themselves",
      type: "boolean"
    }
  }
};

export function proposalActionSchema(uiType: UIProposalType) {
  switch (uiType.type) {
    case ProposalType.CHANGEADMIN:
      return changeAdminActionSchema(uiType);
    case ProposalType.EJECTMEMBER:
      return EjectMemberSchema;
    case ProposalType.ALLOCATEFUNDS:
      return AllocateFundsSchema;
    default:
      return null;
  }
}

export function validateSchemaData(d: UISchemaData, s: UIJsonSchema | null) {
  if (!d) return !s && !d;
  if (!s) return !s && !d;

  const { properties } = s;
  const fields = Object.keys(d);
  const validFields = Object.keys(properties).every((f) => fields.includes(f));
  const validData = Object.values(d).every(
    (v) => typeof v === "boolean" || (typeof v === "string" && v.length > 0)
  );
  return validData && validFields;
}

export function schemaData(d: UIProposalType, dao: UIDao) {
  switch (d.type) {
    case ProposalType.EJECTMEMBER:
      return { address: "" };
    case ProposalType.ALLOCATEFUNDS:
      return { address: "", howMuch: "" };
    case ProposalType.CHANGEADMIN:
      return changeAdminSchemaData(dao);
    default:
      return null;
  }
}

function changeAdminSchemaData(dao: UIDao) {
  return {
    admin: dao.admin,
    fee: dao.fee,
    openTreasury: dao.openTreasury,
    quorum: dao.quorum.toString(),
    registerSelf: dao.registerSelf
  };
}

function changeAdminActionSchema(uiType: UIProposalType) {
  switch (uiType.text) {
    case ProposalREGISTER:
      return RegisterSelfSchema;
    case ProposalCHANGEADMIN:
      return ChangeAdminSchema;
    case ProposalCHANGEFEE:
      return ChangeFeeSchema;
    case ProposalTREASURY:
      return OpenCloseTreasurySchema;
    case ProposalCHANGEQUORUM:
      return ChangeQuorumSchema;
    default:
      return null;
  }
}
