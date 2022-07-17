import createState from "@jackcom/raphsducks";
import { Sale } from "reach/views/MarketView";

const SalesStore = createState({
  items: [] as Sale[],
});

export default SalesStore;

export function addSale(sale: Sale) {
  if (!sale) return;

  const { items } = SalesStore.getState();
  const updates = [...items];
  const i = updates.findIndex((s) => s.ctc === sale.ctc);
  if (i > -1) updates[i] = sale;
  else updates.push(sale);

  SalesStore.items(updates);
}

export function removeSale(id: any) {
  const { items } = SalesStore.getState();
  const updates = [...items];
  const index = items.findIndex((s) => s.ctc === id);
  if (index === -1) return;
  updates.splice(index, 1);
  SalesStore.items(updates);
}

export function getSaleByContract(ctc: any): Sale | null {
  const { items }: { items: Sale[] } = SalesStore.getState();
  const listing = items.find((s) => s.ctc === ctc);
  return listing || null;
}

export function getSaleByItem(itemId: any): Sale | null {
  const { items } = SalesStore.getState();
  const listing = items.find((s) => s.item.id === itemId);
  return listing || null;
}
