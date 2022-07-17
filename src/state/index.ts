import createState from "@jackcom/raphsducks";
import { NETWORKS, ReachToken } from "@jackcom/reachduck";

export enum MODAL {
  IDLE = "0",
  PROVIDER_SELECT = "Select Provider",
  SETTINGS_MENU = "Settings"
}

/** Your global application state. Add/remove any properties you need here */
const store = createState({
  initialized: false,
  notifications: [] as Alert[],

  /** Identity address (for UI) */
  address: "",

  /** Reach `networkAccount` instance */
  account: {} as any | null,

  /**
   * Number Algorand `Applications` created by current user.
   * Will be deprecated when Alogrand lifts limit
   */
  appsCount: {
    length: 0,
    description: null as string | null
  },

  /** User Account `Assets` */
  assets: [] as ReachToken[],

  /** Reach `networkAccount` balance */
  balance: "0.00",

  /** Current configured network */
  currentNetwork: NETWORKS.ALGO.abbr,

  /** Reach delegate `networkAccount` instance */
  delegate: null as null | any,

  /** Error messages */
  error: null as string | null,

  /** Loading state */
  loading: false,

  /** Globally-visible modal component */
  modal: MODAL.IDLE,

  /** WalletConnect client (if used) */
  wcClient: null as any | null
});

export default store;

export type AlertOpts = {
  persistent?: boolean;
  error?: boolean;
  loading?: boolean;
};
export type Alert = { msg: string; time: number } & AlertOpts;

export function addNotification(
  msg: string | Alert,
  persist?: boolean | AlertOpts,
  additional = {}
) {
  const note = (msg as Alert).time
    ? (msg as Alert)
    : createAlert(msg as string, persist || false);
  const { notifications: old } = store.getState();
  const notifications = [...old, note];
  store.multiple({ notifications, ...additional });
  return note.time;
}

export function resetNotifications(
  msg?: string,
  persist?: boolean | AlertOpts
) {
  const updates = [];
  let msgId = null;
  if (msg) {
    const notification = createAlert(msg, persist);
    msgId = notification.time;
    updates.push(notification);
  }
  store.notifications(updates);
  return msgId;
}

export function removeNotification(msg: Alert, additional = {}) {
  const { notifications } = store.getState();
  const i = notifications.findIndex((n) => n.time === msg.time);
  if (i === -1) return;

  const updates = [...notifications];
  updates.splice(i, 1);
  store.multiple({ notifications: updates, ...additional });
}

export function updateAsError(id: number | null, msg: string, additional = {}) {
  const { notifications } = store.getState();
  const msgIndex = notifications.findIndex(({ time }) => time === id);
  const newAlert = createAlert(msg, true);
  const updates = [...notifications];
  newAlert.error = true;
  newAlert.loading = false;
  if (id) newAlert.time = id as number;
  if (msgIndex === -1) updates.push(newAlert);
  else updates.splice(msgIndex, 1, newAlert);

  store.multiple({ notifications: updates, ...additional });
}

export function updateNotification(
  id: number | null,
  msg: string,
  persist?: boolean | AlertOpts,
  additional = {}
) {
  const { notifications } = store.getState();
  const i = notifications.findIndex(({ time }) => time === id);
  const newAlert = createAlert(msg, canonicalizeAlertOpts(persist));
  const updates = [...notifications];
  newAlert.time = id as number;
  if (i === -1) updates.push(newAlert);
  else updates.splice(i, 1, newAlert);

  store.multiple({ notifications: updates, ...additional });
}

export async function checkHasToken(token: any) {
  const { account } = store.getState();
  return account?.tokenAccepted(token) || Promise.resolve(false);
}

function canonicalizeAlertOpts(opts?: boolean | AlertOpts): AlertOpts {
  if (!opts) return {};
  if (typeof opts === "boolean") return { persistent: opts };
  return opts;
}

function createAlert(msg: string, opts?: boolean | AlertOpts): Alert {
  const time = new Date().getTime();
  return { msg, time, ...canonicalizeAlertOpts(opts) };
}
