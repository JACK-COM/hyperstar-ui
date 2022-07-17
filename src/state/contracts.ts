import createState from "@jackcom/raphsducks";
import { parseAddress, ReachContract } from "@jackcom/reachduck";
import { exchangeBackend } from "reach/backends";

/**
 * Stores all `contract` instances to which the active user's
 * `reachAccuont` has been attached
 */
const ContractStore = createState({
  /** Attached Exchange/Swap contracts  */
  exchanges: {} as Record<string | number, any>,
  /** Attached Listings contracts  */
  marketplace: {} as Record<string | number, any>,
});

export default ContractStore;

export function getExchangeContract(
  ctcInfo: any
): ReachContract<typeof exchangeBackend> {
  const ctc = parseAddress(ctcInfo);
  const { exchanges } = ContractStore.getState();
  return exchanges[ctc] || null;
}

export function getListingContract(ctcInfo: any) {
  const ctc = parseAddress(ctcInfo);
  const { marketplace } = ContractStore.getState();
  return marketplace[ctc] || null;
}
