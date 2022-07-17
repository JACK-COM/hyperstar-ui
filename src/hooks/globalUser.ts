import { checkSessionExists, ReachAccount } from "@jackcom/reachduck";
import { useEffect, useState } from "react";
import store, { Alert } from "state";

type HookUserState = {
  initialized: boolean;
  account: ReachAccount;
  address: string;
  appsCount: { length: number; description: string | null };
  balance: string;
  error: any;
  notifications: Alert[];
};

export default function useGlobalUser() {
  const current = store.getState();
  const { exists, isWCSession } = checkSessionExists();
  const [state, setState] = useState<HookUserState>({
    initialized: current.initialized,
    address: current.address,
    account: current.account,
    balance: current.balance,
    appsCount: current.appsCount,
    error: current.error,
    notifications: current.notifications,
  });

  const onUpdate = (newState: Partial<HookUserState>) => {
    setState((s: any) => ({ ...s, ...newState }));
  };

  useEffect(
    () =>
      store.subscribeToKeys(onUpdate, [
        "initialized",
        "address",
        "account",
        "balance",
        "error",
        "appsCount",
      ]),
    [state]
  );

  return { exists, isWCSession, ...state };
}
