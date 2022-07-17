import { marketBackend } from "reach/backends";
import {
  updateNotification,
  resetNotifications,
  updateAsError,
  addNotification,
} from "state";
import ADI from "ADI";
import { getSaleByContract } from "state/sale";
import { parseAddress, optInToAsset, parseCurrency } from "@jackcom/reachduck";
import { ReachAccount } from "@jackcom/reachduck/lib/types";

export function createBuyerAPI(acc: ReachAccount, info: any) {
  const ctcInfo = parseAddress(info);
  const listing = getSaleByContract(ctcInfo);
  if (!acc || !listing) return null;

  const stat = { loading: true, persistent: true };
  const end = { loading: false, persistent: true };
  const ctc = acc.contract(marketBackend, ctcInfo);
  const ctcAPI = ctc.apis;

  // Only listen from now, and update cache when listing changes
  ctc.events.itemPurchased.seekNow().then(() =>
    ctc.events.itemPurchased.monitor(({ what }) => {
      addNotification("Item purchased! Updating cache ... ");
      const [_saleItem, _amtPurchased, remaining] = what;
      listing.qty = parseCurrency(remaining, listing.item.decimals);
      listing.closed = listing.qty > 0;
      ADI.cacheItem(ctcInfo, listing, "listings");
    })
  );

  return {
    async altBuy(amt: number) {
      const alertId = resetNotifications("⏳ Starting transaction ... ", stat);
      const optedIn = await optInToAsset(acc, listing?.item?.id);
      if (!optedIn) {
        updateAsError(alertId, "Please opt-in before purchasing!");
        return;
      }

      try {
        updateNotification(alertId, "💰 Purchasing items ...", stat);
        await ctcAPI.altBuy(amt);
        updateNotification(alertId, "✅ Item purchased!");
      } catch (error: any) {
        updateAsError(alertId, `Could not complete: ${error.message}`);
      }
    },

    async buy(amt: number) {
      const alertId = resetNotifications("⏳ Starting transaction ... ", stat);
      const optedIn = await optInToAsset(acc, listing?.item?.id);
      if (!optedIn) {
        updateAsError(alertId, "Please opt-in before purchasing!");
        return;
      }

      try {
        updateNotification(alertId, "💰 Purchasing items ...", stat);
        await ctcAPI.buy(amt);
        updateNotification(alertId, "✅ Item purchased!");
      } catch (error: any) {
        updateAsError(alertId, `Could not complete: ${error.message}`);
      }
    },

    async closeSale() {
      const alertId = resetNotifications("ℹ️ Closing Sale ... ", end);
      const success = `✅ Sale closed: any balance will be refunded.`;
      try {
        await ctcAPI.closeSale();
        ADI.removeItem(ctcInfo, "listings");
        updateNotification(alertId, success);
      } catch (error: any) {
        updateAsError(alertId, `Could not close sale: ${error.message}`);
      }
    },
  };
}
