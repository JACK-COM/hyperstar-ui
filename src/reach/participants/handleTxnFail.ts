import { updateAsError } from "state";

export function handleTxnFail(e: any) {
  const src = e.message || e;
  let fallback = typeof src === "object" ? JSON.stringify(src) : src;
  const msg = fallback.includes("signAndPost")
    ? "Transaction was rejected! Check your pop-up blockers and/or minimum account balance, then try again"
    : fallback;

  updateAsError(null, msg);
}

export default handleTxnFail;
