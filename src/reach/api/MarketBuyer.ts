import { marketBackend } from "reach/backends";
import { updateNotification, resetNotifications, updateAsError } from "state";
import { getSaleByContract } from "state/sale";
import { parseAddress, optInToAsset, parseCurrency } from "@jackcom/reachduck";
import { ReachAccount } from "@jackcom/reachduck/lib/types";
import { loadSale } from "reach/views/MarketView";
import { endListing } from "graphql";

export function createBuyerAPI(acc: ReachAccount, info: any) {
  if (!acc) return null;
  const ctcInfo = parseAddress(info);
  let listing = getSaleByContract(ctcInfo);

  const stat = { loading: true, persistent: true };
  const end = { loading: false, persistent: true };
  const ctc = acc.contract(marketBackend, ctcInfo);
  const ctcAPI = ctc.apis;
  const ensureListing = async () => {
    if (!listing) listing = await loadSale(ctcInfo, acc);
  };

  return {
    async altBuy(amt: number) {
      const id = resetNotifications("⏳ Starting transaction ... ", stat);
      await ensureListing();

      if (!(await optInToAsset(acc, listing?.item?.id))) {
        updateAsError(id, "Please opt-in before purchasing!");
        return;
      }

      try {
        updateNotification(id, "💰 Purchasing items ...", stat);
        await ctcAPI.altBuy(amt);
        updateNotification(id, "✅ Item purchased!", end);
      } catch (error: any) {
        updateAsError(id, `Could not complete: ${error.message}`);
      }
    },

    async buy(amt: number) {
      const id = resetNotifications("⏳ Starting transaction ... ", stat);
      await ensureListing();

      if (!(await optInToAsset(acc, listing?.item?.id))) {
        updateAsError(id, "Please opt-in before purchasing!");
        return;
      }

      try {
        updateNotification(id, "💰 Purchasing items ...", stat);
        await ctcAPI.buy(amt);
        updateNotification(id, "✅ Item purchased!");
      } catch (error: any) {
        updateAsError(id, `Could not complete: ${error.message}`);
      }
    },

    async closeSale() {
      const alertId = resetNotifications("ℹ️ Closing Sale ... ", stat);
      await ensureListing();

      try {
        await ctcAPI.closeSale();
        await endListing(ctcInfo.toString());
        const success = `✅ Sale closed: any balance will be refunded.`;
        updateNotification(alertId, success);
      } catch (error: any) {
        updateAsError(alertId, `Could not close sale: ${error.message}`);
      }
    }
  };
}
