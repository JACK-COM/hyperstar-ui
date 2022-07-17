import { ReachAccount } from "@jackcom/reachduck";
import { escrowBackend } from "reach/backends";
import { resetNotifications, updateAsError, updateNotification } from "state";

export function createEscrowAPI(acc: ReachAccount, ctcAddr: string | number) {
  const { apis } = acc.contract(escrowBackend, ctcAddr);
  const stat = { loading: true, persistent: true };

  return {
    async buy() {
      const alertId = resetNotifications("⏳ Starting transaction", stat);

      try {
        await apis.buy();
        updateNotification(alertId, "✅ Transaction successful");
      } catch (error: any) {
        updateAsError(alertId, error.toString());
      }
    },

    async close() {
      const alertId = resetNotifications("⏳ Closing contract", stat);

      try {
        await apis.close();
        updateNotification(alertId, "✅ Transaction successful");
      } catch (error: any) {
        updateAsError(alertId, error.toString());
      }
    },

    async exchange() {
      const alertId = resetNotifications("⏳ Starting contract", stat);

      try {
        await apis.exchange();
        updateNotification(alertId, "✅ Transaction successful", {
          loading: true,
          persistent: true
        });
      } catch (error: any) {
        updateAsError(alertId, error.toString());
      }
    }
  };
}
