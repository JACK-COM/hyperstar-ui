/* eslint-disable no-console */
import { loadStdlib } from "@reach-sh/stdlib";
import * as announcerBackend from "../src/reach/build/announcer.main.mjs";
import {
  Bright,
  FgRed,
  BgRed,
  FgYellow,
  FgGreen,
  errorExit,
} from "./cli-utils.mjs";

const reach = loadStdlib("ALGO");

async function startContract(acc, announcer, saleInfo) {
  const usesBC = fromArgs("uses-bc=") === "1";
  const ctc = acc.contract(announcerBackend, parseInt(announcer));
  ctc.events.announce.monitor((res) => onEvent(res, saleInfo));

  await ctc.apis.publish(saleInfo, usesBC).catch((e) => {
    console.log(Bright(FgRed("Error announcing sale!")));
    console.log("\t", Bright(FgRed(e)));
    return 0;
  });
}

function onEvent({ what, when }, target) {
  const received = parseAddress(what[0]);
  const expected = parseAddress(target);
  if (received === expected) {
    console.log(Bright(FgGreen(`Target "${target}" received! Exiting ... `)));
    return process.exit();
  }

  return console.log({ what: [received], when: reach.bigNumberToNumber(when) });
}

/**
 * Parses a contract address for Algorand or other chains
 * @param {string|number} addr string|number contract address
 * @returns string|number contract address
 */
function parseAddress(ctc) {
  const { isBigNumber, bigNumberToNumber } = reach;
  const addr = isBigNumber(ctc) ? bigNumberToNumber(ctc) : ctc;
  if (reach.connector === "ALGO") return parseInt(addr);

  const pit = addr.toString().trim().replace(/\0.*$/g, "");
  return pit.startsWith("0x") ? pit : `0x${pit}`;
}

(async () => {
  reach.setProviderByName("TestNet");

  const mnem = fromArgs("key=", "");
  if (!mnem) {
    errorExit(Bright(BgRed("🔑 No mnmemonic supplied.")));
    return;
  }

  const announcer = fromArgs("announcer=");
  if (!announcer) {
    errorExit(Bright(BgRed("📣 No announcer supplied.")));
    return;
  }

  const saleInfo = fromArgs("sale=");
  if (!saleInfo) {
    errorExit(Bright(BgRed("❌ No sale contract supplied.")));
    return;
  }

  console.log(Bright(FgYellow("🏛 Loading Account ...")));
  const acc = await reach.newAccountFromMnemonic(mnem);

  console.log(Bright(FgYellow("📣 Announcing sale ...")));
  await startContract(acc, announcer, saleInfo);
  console.log(Bright(FgGreen("📣 Sale was announced!")));
})();

function fromArgs(key) {
  const args = process.argv.slice(2);
  const matchKey = (a) => a.startsWith(key);
  return (args.find(matchKey) || "").replaceAll(key, "");
}
