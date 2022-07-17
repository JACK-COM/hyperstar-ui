import { daoBackend } from "reach/backends";
import { parseCurrency, ReachAccount } from "@jackcom/reachduck";
import { MemberProposal, VoteActionType } from "types/dao.contract";

export function createDAOAPI(acc: ReachAccount, ctcInfo: any) {
  if (!acc) return null;
  const ctc = acc.contract(daoBackend, ctcInfo);
  const DAO = ctc.apis;
  const api = {
    async addMember(addr: string) {
      return await DAO.addMember(addr);
    },

    async donate(v: string) {
      const amt = parseCurrency(v);
      return await DAO.donate(amt);
    },

    async eject(addr: string) {
      return await DAO.eject(addr);
    },

    async join() {
      return await DAO.joinLeave(false);
    },

    async leave() {
      return await DAO.joinLeave(true);
    },

    async registerProposal(prop: MemberProposal) {
      return await DAO.registerProposal(prop);
    },

    async supportProposal() {
      const act = civicDuty(true);
      return await DAO.voteProposal(act);
    },

    async opposeProposal() {
      const act = civicDuty(false);
      return await DAO.voteProposal(act);
    }
  };

  return api;
}

function civicDuty(inFavor = false): [VoteActionType, null] {
  const supports: VoteActionType = inFavor ? "For" : "Against";
  return [supports, null];
}
