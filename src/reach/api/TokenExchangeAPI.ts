import {
  ReachAccount,
  formatCurrency,
  parseCurrency,
  optInToAsset
} from "@jackcom/reachduck";
import { exchangeBackend } from "reach/backends";
import {
  updateNotification,
  resetNotifications,
  updateAsError,
  addNotification
} from "state";
import { ExchangeView, loadExchangeView } from "reach/views/TokenExchangeView";

/** Create a Contract API for talking to a TokenSwap contract */
export function createTokenExchangeAPI(data: ExchangeView, acc: ReachAccount) {
  if (!acc) return {};

  const stat = { loading: true, persistent: true };
  const end = { loading: false, persistent: true };
  const ctc = acc.contract(exchangeBackend, data.ctcInfo);
  const { largeUnit, smallUnit } = data;
  const ctcAPI = ctc.apis;

  return {
    async convertToLarge(smallAmt: number) {
      const action = `⏳ Converting to ${largeUnit.symbol} ...`;
      const alertId = resetNotifications(action, stat);
      const optedIn = await optInToAsset(acc, largeUnit.id);
      if (!optedIn) {
        updateAsError(alertId, "Please opt-in before swapping!");
        return;
      }

      try {
        updateNotification(alertId, "💰 Swapping token ...", stat);
        await ctcAPI.convertToLarge(
          parseCurrency(smallAmt, smallUnit.decimals)
        );
        updateNotification(alertId, "✅ Swap complete!", end);
        updatePoolBalance();
      } catch (error: any) {
        updateAsError(alertId, `Swap failed: ${error.message}`);
      }
    },

    async convertToSmall(lgAmt: number) {
      const action = `⏳ Converting to ${smallUnit.symbol} ...`;
      const alertId = resetNotifications(action, stat);
      const optedIn = await optInToAsset(acc, largeUnit.id);
      if (!optedIn) {
        updateAsError(alertId, "Please opt-in before swapping!");
        return;
      }

      try {
        updateNotification(alertId, "💰 Swapping token ...", stat);
        await ctcAPI.convertToSmall(parseCurrency(lgAmt, largeUnit.decimals));
        updateNotification(alertId, "✅ Swap complete!", end);
        updatePoolBalance();
      } catch (error: any) {
        updateAsError(alertId, `Swap failed: ${error.message}`);
      }
    },

    async addLiquidity(input: any) {
      if (!input.small && !input.large) {
        const msg = "Invalid input amounts";
        updateAsError(null, msg);
        throw new Error(msg);
      }

      const alertId = resetNotifications("⏳ Funding pool ... ", stat);
      const success = `✅ Pool balance increased.`;
      try {
        const large = parseCurrency(input.large, largeUnit.decimals);
        const small = parseCurrency(input.small, smallUnit.decimals);

        await ctcAPI.addLiquidity(small, large);
        updateNotification(alertId, success, end);
        updatePoolBalance();
      } catch (error: any) {
        const msg = `Fund treasury: ${error.message}`;
        updateAsError(alertId, msg);
        throw new Error(msg);
      }
    },

    async closePool() {
      const alertId = resetNotifications("⏳ Closing pool ... ", stat);
      try {
        await ctcAPI.closeTreasury();
        const success = `✅ Done! Balance has been refunded.`;
        updateNotification(alertId, success);
      } catch (error: any) {
        updateAsError(alertId, `Close Pool: ${error.message}`);
      }
    },

    async withdraw(sm: number | string, lg: number | string) {
      const alertId = resetNotifications("⏳ Withdrawing from pool ... ", stat);
      const success = `✅ Funds withdrawn from pool.`;
      const large = parseCurrency(lg, largeUnit.decimals);
      const small = parseCurrency(sm, smallUnit.decimals);

      try {
        await ctcAPI.withdraw(small, large);
        updateNotification(alertId, success);
      } catch (error: any) {
        updateAsError(alertId, `Close Pool: ${error.message}`);
      }
    }
  };

  async function updatePoolBalance() {
    const alertId = addNotification("⏳ Updating Pool ...", true);
    return loadExchangeView(data.ctcInfo, acc, true).then(() => {
      updateNotification(alertId, "✅ Pool updated");
      return true;
    });
  }
}
