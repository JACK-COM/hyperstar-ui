/* eslint-disable no-console */
import { loadStdlib } from "@reach-sh/stdlib";
import {
  Bright,
  BgYellow,
  FgRed,
  BgRed,
  FgYellow,
  FgGreen,
  FgBlue,
} from "./cli-utils.mjs";
import * as saleAnnouncerBackend from "../src/reach/build/announcer-listing.main.mjs";
import * as exchAnnouncerBackend from "../src/reach/build/announcer.main.mjs";

export default async function initAnnouncer(acc) {
  console.log(Bright(BgYellow("Creating Announcer contract ...")));
  const ctc = acc.contract(exchAnnouncerBackend);
  await deployContract(ctc);
}

async function deployContract(ctc) {
  return new Promise((resolve) =>
    ctc.participants.Deployer({
      async done() {
        const announcerCtc = await ctc.getInfo();
        resolve(announcerCtc);
      },
    })
  ).catch(() => {
    console.log(Bright(FgRed("Error creating announcer")));
    return 0;
  });
}

const errorExit = (...msgs) => {
  console.log(Bright(FgRed("⛔️ Exit with Error:\n")), ...msgs);
  process.exit();
};

(async () => {
  const args = process.argv.slice(2);
  const matchKey = (a) => a.startsWith("key=");
  const mnem = (args.find(matchKey) || "").replaceAll("key=", "");
  if (!mnem) {
    errorExit(Bright(BgRed("🔑 No mnmemonic supplied.")));
    return;
  }

  const reach = loadStdlib("ALGO");
  reach.setProviderByName("TestNet");
  console.log(Bright(FgYellow("🏛 Loading Account ...")));
  const [acc, surrogate] = await Promise.all([
    reach.newAccountFromMnemonic(mnem),
    reach.createAccount(),
  ]);

  console.log(Bright(FgYellow("💵 Funding surrogate ...")));
  await reach.transfer(acc, surrogate, reach.parseCurrency(0.5));

  console.log(Bright(FgYellow("📣 Creating Announcers ...")));
  const exchCtc = acc.contract(exchAnnouncerBackend);
  const saleCtc = acc.contract(saleAnnouncerBackend);
  const [exchInfo, saleInfo] = await Promise.all([
    deployContract(exchCtc),
    deployContract(saleCtc),
  ]);
  console.log(
    Bright(FgBlue("📣 Contracts created!")),
    `\n\t* ${Bright(FgGreen("📣 Exchange Announcer:"))} ${exchInfo}`,
    `\n\t* ${Bright(FgGreen("📣 Sale Announcer:"))} ${saleInfo}`
  );

  process.exit();
})();
