import createState from "@jackcom/raphsducks";
import { ExchangeView } from "reach/views/TokenExchangeView";

const ExchangeStore = createState({
  /** List of Pools (token pairs) */
  exchanges: [] as ExchangeView[],
});

export default ExchangeStore;

export function addExchange(newEx: ExchangeView) {
  const { exchanges } = ExchangeStore.getState();
  const i = exchanges.findIndex((e) => e.ctcInfo === newEx.ctcInfo);
  const updates = [...exchanges];
  if (i > -1) updates[i] = newEx;
  else updates.push(newEx);

  ExchangeStore.exchanges(updates);
}

export function removeExchange(id: any) {
  const { exchanges } = ExchangeStore.getState();
  const i = exchanges.findIndex((e) => e.ctcInfo === id);
  const updates = [...exchanges];
  if (i > -1) updates.splice(i, 1);
  ExchangeStore.exchanges(updates);
}

export function getExchangeById(id: any) {
  const { exchanges } = ExchangeStore.getState();
  return exchanges.find((e) => e.ctcInfo === id);
}
