import { daoBackend } from "reach/backends";
import { parseCurrency, ReachAccount } from "@jackcom/reachduck";
import { Proposition, Vote, VoteActionType } from "types/dao";

export function createDAOAPI(acc: ReachAccount, ctcInfo: any) {
  if (!acc) return null;
  const ctc = acc.contract(daoBackend, ctcInfo);
  const DAO = ctc.apis;
  const api = {
    async addMember(addr: string) {
      return await DAO.addMember(addr).catch(parseStdlibError);
    },

    async donate(v: string) {
      const amt = parseCurrency(v);
      return await DAO.donate(amt).catch(parseStdlibError);
    },

    async eject(addr: string) {
      return await DAO.eject(addr).catch(parseStdlibError);
    },

    async join() {
      return await DAO.joinLeave(false).catch(parseStdlibError);
    },

    async leave() {
      return await DAO.joinLeave(true).catch(parseStdlibError);
    },

    async registerProposal(prop: Proposition) {
      return await DAO.registerProposal(prop).catch(parseStdlibError);
    },

    async supportProposal() {
      const act = civicDuty(true);
      return await DAO.voteProposal(act).catch(parseStdlibError);
    },

    async opposeProposal() {
      const act = civicDuty(false);
      return await DAO.voteProposal(act).catch(parseStdlibError);
    }
  };

  return api;
}

function civicDuty(inFavor = false): Vote {
  const supports: VoteActionType = inFavor ? "For" : "Against";
  return [supports, null];
}

const DaoAPIs = [
  "addMember",
  "donate",
  "eject",
  "joinLeave",
  "registerProposal",
  "voteProposal"
];

function parseStdlibError(error: any): Promise<string> {
  const e = error.message.split("Assertion failed: ")[1];
  const m = e.split("at reach standard library:")[0];
  const trim = DaoAPIs.reduce((agg, curr) => agg.replace(`${curr}: `, ""), m);
  return Promise.reject(trim);
}
