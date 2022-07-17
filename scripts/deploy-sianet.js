import { SkynetClient } from "@nebulous/skynet";

const portal = "https://siasky.net/";
const client = new SkynetClient(portal);

(async () => {
  try {
    console.log("Deploying to skynet. Please wait...");
    const skylink = await client.uploadDirectory("./build");
    const skyLinkHash = skylink.split("//")[1];
    const httpsLink = portal + skyLinkHash;
    console.log(`Woo! Successfully Deployed @ ${httpsLink}`);
  } catch (error) {
    console.log("err", error);
  }
})();
