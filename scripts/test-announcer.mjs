/* eslint-disable no-console */
import { loadStdlib } from "@reach-sh/stdlib";
import {
  Bright,
  FgRed,
  BgRed,
  FgYellow,
  FgGreen,
  errorExit,
  FgBlue,
} from "./cli-utils.mjs";
import * as announcerBackend from "../src/reach/build/announcer.main.mjs";

async function deployCtc(acc) {
  const ctc = acc.contract(announcerBackend);

  return new Promise((resolve) =>
    ctc.participants.Deployer({
      async done() {
        console.log(Bright(FgYellow(`🎧 Setting up Event Listeners ...`)));
        ctc.events.announce.next().then(({ when, what }) => {
          console.log(Bright(FgRed("\t 📣 Announce.Next() event")));
          console.log(Bright("\t Received When:"), when);
          console.log(Bright("\t Received What:"), what);
          setTimeout(process.exit, 5000);
        });

        ctc.events.announce.monitor(({ when, what }) => {
          console.log(Bright(FgBlue("\t 👮‍♀️ Announce.Monitor event")));
          console.log(Bright(FgGreen("\t Received When:")), when);
          console.log(Bright(FgGreen("\t Received What:")), what);
          setTimeout(process.exit, 5000);
        });

        console.log(Bright(FgGreen(`🎧 Event Listeners activated!`)));

        resolve([ctc, await ctc.getInfo()]);
      },
    })
  ).catch(() => {
    console.log(Bright(FgRed("Error creating announcer")));
    return 0;
  });
}

(async () => {
  const args = process.argv.slice(2);
  const matchKey = (a) => a.startsWith("key=");
  const matchAnnouncer = (a) => a.startsWith("announcer=");
  const mnem = (args.find(matchKey) || "").replaceAll("key=", "");
  if (!mnem) {
    errorExit(Bright(BgRed("🔑 No mnmemonic supplied.")));
    return;
  }

  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setProviderByName("TestNet");
  console.log(Bright(FgYellow("🏛 Loading Account ...")));
  const acc = await reach.newAccountFromMnemonic(mnem);

  let ctcInfo = (args.find(matchAnnouncer) || "").replaceAll("announcer=", "");
  let ctc;

  if (ctcInfo) ctc = acc.contract(announcerBackend, ctcInfo);
  else {
    console.log(Bright(FgYellow("📣 Creating Announcer ...")));
    [ctc, ctcInfo] = await deployCtc(acc);
    console.log(Bright(FgGreen("📄 Contract created!")));
  }

  console.log(Bright(FgYellow(`📣 Publishing to Announcer "${ctcInfo}"...`)));
  await ctc.apis.publish("12345", false).catch((e) => {
    console.log(Bright(FgRed("Error publishing")));
    console.log(FgRed(e));
  });
  console.log(Bright(FgGreen("📄 Published value '12345' to Announcer!")));
  console.log(Bright(FgGreen("📄 Awaiting event ... :mega: ")));
})();
