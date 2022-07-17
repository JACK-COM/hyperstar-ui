import createDataCacheAPI from "@jackcom/adi-cacheducks";
import { checkVersionChanged } from "@jackcom/reachduck";
import store from "state";
import ExchangeStore, { addExchange, removeExchange } from "state/exchanges";
import SalesStore, { addSale, removeSale } from "state/sale";
import { APP_VERSION, APP_VERSION_KEY } from "utils";
import cache from "../cache";

const ADI = createDataCacheAPI(cache);
export default ADI;

export async function startApplication() {
  ADI.onApplicationStart();

  if (checkVersionChanged(APP_VERSION, APP_VERSION_KEY)) {
    await Promise.all([ADI.clearItems("all")]);
  }

  ADI.cacheItem(APP_VERSION_KEY, APP_VERSION);
  ADI.subscribeToCaches(onUpdate, ["listings", "exchanges"]);
  store.initialized(true);
}

/**
 * Route cache updates to relevant state instance. When key is
 * `all`, an entire list was affected by an update. A falsy value
 * means an item was removed. All other items will be added to their
 * `state` instance
 */
function onUpdate(key: string, val: any, cacheKey?: string) {
  switch (cacheKey) {
    case "exchanges":
      updateExchanges(key, val);
      return null;
    case "listings":
      return updateListings(key, val);
    default:
      return null;
  }
}

/** Update `TokenSwap` store */
async function updateExchanges(key: string, val: any) {
  if (key === "all") return ExchangeStore.exchanges(val.data);
  if (!val) return removeExchange(key);
  return addExchange(await ADI.getItem(key, "exchanges"));
}

/** Update `Listings` (marketplace) store */
function updateListings(key: string, val: any) {
  if (key === "all") return SalesStore.items(val.data);
  if (!val) return removeSale(key);
  return addSale(val);
}
