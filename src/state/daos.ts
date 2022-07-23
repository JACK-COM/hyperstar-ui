import createState from "@jackcom/raphsducks";
import { UIDao } from "reach/views/DaoView";
import { Proposition } from "types/dao";

/**
 * Stores `DAO` stuff
 */
const DaoStore = createState({
  /** Selected DAO (to limit re-fetching) */
  selected: null as UIDao | null,
  proposals: [] as Proposition[]
});

export default DaoStore;
