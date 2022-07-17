import createState from "@jackcom/raphsducks";
import { UIDao } from "reach/views/DaoView";

/**
 * Stores `DAO` stuff
 */
const DaoStore = createState({
  /** Selected DAO (to limit re-fetching) */
  selected: null as UIDao | null
});

export default DaoStore;
