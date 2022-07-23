import {
  ReachAccount,
  ReachEvent,
  parseAddress,
  getBlockchain
} from "@jackcom/reachduck";
import { EXCHANGE_ANNOUNCER, SALE_ANNOUNCER } from "constants/announcers";
import { daoBackend, exchangeBroadcaster } from "reach/backends";
import { listingBroadcaster } from "reach/backends";
import { loadSale } from "reach/views/MarketView";
import { loadExchangeView } from "reach/views/TokenExchangeView";
import DaoStore from "state/daos";
import {
  updateNotification,
  resetNotifications,
  updateAsError
} from "state/index";
import { Proposition } from "types/dao";
import { Inventory } from "types/shared";

type CtcAlert = [ctcAddr: string, secondVal?: boolean];

/** Address announcer (announces an address and a boolean) */
export function createAnnouncerAPI(
  acc: ReachAccount,
  ctcInfo: string | number
) {
  const backend = exchangeBroadcaster;
  const ctc = acc.contract(backend, parseAddress(ctcInfo));
  const stat = { loading: true, persistent: true };
  const end = { loading: false, persistent: true };

  return {
    async publish(addr: string, secondVal = false) {
      const init = `📣 Publishing address "${addr}" ... `;
      const alertId = resetNotifications(init, stat);

      return ctc.apis
        .contractCreated(`${addr}`, secondVal)
        .then(() => updateNotification(alertId, "✅ Published address!", end))
        .catch((er) => updateAsError(alertId, er.message || er));
    }
  };
}

/** Create a Listing announcer API */
export function createSaleAnnouncerAPI(
  acc: ReachAccount,
  ctcInfo: string | number
) {
  const ctc = acc.contract(listingBroadcaster, parseAddress(ctcInfo));
  const stat = { loading: true, persistent: true };
  const end = { loading: false, persistent: true };

  return {
    async publish(addr: string | number, saleData: Inventory) {
      const [item, qty, useBondingCurve] = [
        saleData.item,
        saleData.qty,
        saleData.useBondingCurve
      ];
      const init = `📣 Publishing listing "${addr}" ... `;
      const alertId = resetNotifications(init, stat);

      return ctc.apis
        .publishValues(addr, item, qty, useBondingCurve)
        .then(() => updateNotification(alertId, "✅ Published address!", end))
        .catch((er) => updateAsError(alertId, er.message || er));
    }
  };
}

type ExchangePublication = [
  contract: string,
  smallUnit: number | string,
  largeUnit: number | string,
  conversionRate: number | string
];

/** Create an Exchange/Token Conversion contract announcer API */
export function createExchangeAnnouncerAPI(acc: ReachAccount, info: any) {
  const ctc = acc.contract(exchangeBroadcaster, parseAddress(info));
  const stat = { loading: true, persistent: true };
  const end = { loading: false, persistent: true };

  return {
    async publish(saleData: ExchangePublication) {
      const [addr, smallUnit, largeUnit, conversionRate] = saleData;
      const init = `📣 Publishing listing "${addr}" ... `;
      const alertId = resetNotifications(init, stat);

      return ctc.apis
        .contractCreated(addr, smallUnit, largeUnit, conversionRate)
        .then(() => updateNotification(alertId, "✅ Published Contract!", end))
        .catch((err) => updateAsError(alertId, err.message || err));
    }
  };
}

/** Create a DAO Proposal announcer API */
export function createProposalAnnouncerAPI(acc: ReachAccount, info: any) {
  const ctc = acc.contract(daoBackend, parseAddress(info));

  return {
    async subscribe() {
      DaoStore.proposals([]);

      ctc.events.MotionEnacted.seekNow();
      ctc.events.MotionEnacted.monitor<Proposition>(({ what }) => {
        console.log("MotionEnacted", what);
      });
      ctc.events.MotionFailed.seekNow();
      ctc.events.MotionFailed.monitor<Proposition>(({ what }) => {
        console.log("MotionFailed", what);
      });
    }
  };
}

/** Listen for all (and new) Exchange (swap pools) contracts */
export function subscribeToExchanges(acc: ReachAccount) {
  if (getBlockchain() !== "ALGO") return;

  const ctc = acc.contract(exchangeBroadcaster, EXCHANGE_ANNOUNCER);
  ctc.events.announce.seekNow().then(() =>
    ctc.events.announce.monitor((e: ReachEvent<CtcAlert>) => {
      const [address] = e.what;
      loadExchangeView(parseAddress(address), acc);
    })
  );
}

type CtcListing = [
  ctcAddr: string,
  token: any,
  qty: any,
  usesBondCurve: boolean
];
export function subscribeToListings(acc: ReachAccount, saveCtc = false) {
  if (getBlockchain() !== "ALGO") return;

  const ctc = acc.contract(listingBroadcaster, parseAddress(SALE_ANNOUNCER));
  ctc.events.announce.seekNow().then(() =>
    ctc.events.announce.monitor((e: ReachEvent<CtcListing>) => {
      const [ctcAddr, _t, _q] = e.what;
      loadSale(parseAddress(ctcAddr), acc, saveCtc);
    })
  );
}
