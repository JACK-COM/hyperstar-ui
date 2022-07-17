import MyAlgoConnect from "@randlabs/myalgo-connect";
import { ALGO_WalletConnect as WCClient } from "@reach-sh/stdlib";
import {
  ConnectedUserData,
  ReachAccount,
  ReachToken,
  checkSessionExists,
  connectUser,
  disconnectUser,
  getBlockchain,
  getBlockchainNetwork,
  getStorage,
  loadReachWithOpts,
  reconnectUser,
  tokenMetadata as getReachToken,
  createConnectorAPI,
  createReachAPI,
  formatCurrency,
} from "@jackcom/reachduck";
import ADI from "ADI";
import store, {
  addNotification,
  checkHasToken,
  updateAsError,
  updateNotification,
} from "state";
import {
  subscribeToExchanges,
  subscribeToListings,
} from "./participants/Announcers";
import { loadStdlib } from "@reach-sh/stdlib";

const CONNECT_USER_OPTS = {
  fetchAssets: true,
  fetchBalance: false,
};

/** Connect user Wallet */
export async function connect() {
  const updates = await connectUser(CONNECT_USER_OPTS);
  // Attach to all announcers
  return onConnected(updates);
}

export async function onConnected(updates: ConnectedUserData) {
  store.multiple(updates);

  ADI.publishItems({ cacheKey: "exchanges" });
  ADI.publishItems({ cacheKey: "listings" });
  subscribeToExchanges(updates.account);
  subscribeToListings(updates.account);
  return updates.account;
}

export async function reconnect() {
  const { addr = undefined, isWCSession } = checkSessionExists();

  if (getBlockchain() === "ALGO") {
    if (isWCSession) useWalletConnect();
    else useWebWallet();
    const updates = await reconnectUser(addr, CONNECT_USER_OPTS);
    // Attach to all announcers
    return onConnected(updates);
  }

  loadReachDefaults();
  return connect();
}

export async function disconnect() {
  // check for wallet-connect session
  const { wcClient } = store.getState();
  if (wcClient) wcClient.killSession();

  store.reset();
  addNotification("Disconnecting ... ");
  disconnectUser();
}

/** Asynchronously update Listings cache */
export async function inlineAssetOptIn(
  alertId: any,
  acc: ReachAccount,
  tokenId: any
) {
  if (await checkHasToken(tokenId)) return true;
  updateNotification(alertId, `⭐️ Please opt-in to token!`, true);

  const [asset, accepted] = await Promise.all([
    tokenMetadata(tokenId, acc),
    acc
      .tokenAccept(tokenId)
      .then(() => true)
      .catch(() => false),
  ]);

  if (accepted) {
    const { assets } = store.getState();
    store.assets([...assets, asset]);
    updateNotification(alertId, `✅ Accepted Token`);
  } else updateAsError(alertId, `Asset opt-in failed!`);

  return accepted;
}

export async function tokenMetadata(
  tokenId: any,
  acc: ReachAccount | null,
  cacheResponse?: boolean
): Promise<ReachToken> {
  if (!acc) return {} as ReachToken;
  const fetchToken = () => getReachToken(tokenId, acc);
  if (cacheResponse === false) return fetchToken();

  return ADI.getItem(tokenId, "tokens", fetchToken);
}

type LibFallbackOpts = {
  MyAlgoConnect?: typeof MyAlgoConnect;
  WalletConnect?: any;
};
/** Configure stdlib wallet fallback */
function setLibFallback(opts?: LibFallbackOpts) {
  loadReachWithOpts(loadStdlib, {
    chain: "ALGO",
    network: getBlockchainNetwork(),
    showReachContractWarnings: false,
    walletFallback: opts,
  });
}

/** Configure `stdlib` for non-Algo blockchain */
export function loadReachDefaults() {
  loadReachWithOpts(loadStdlib, {
    chain: getBlockchain(),
    network: getBlockchainNetwork(),
    showReachContractWarnings: false,
  });
  console.log(createConnectorAPI(), createConnectorAPI().getProviderEnv());
}

/** Configure `stdlib` to fallback to chain's web wallet provider */
export function useWebWallet() {
  getStorage().removeItem("walletconnect");
  return setLibFallback({ MyAlgoConnect });
}

/** Configure `stdlib` to fallback to `WalletConnect` as wallet provider */
export function useWalletConnect() {
  getStorage().removeItem("user");
  return setLibFallback({
    WalletConnect: function _createWCClient() {
      const wcInstance = new WCClient();
      store.wcClient(wcInstance.wc);
      return wcInstance;
    },
  });
}
