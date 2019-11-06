import browser from "webextension-polyfill";
import debugMaker from "debug";
const debug = debugMaker("app:background");

import "../shared/dev_debug.js";

//TODO: Conditional import??
// import devConfig from '../config/development.json';
// import prodConfig from '../config/production.json';

// async function getConfig() {
//   const pluginInfo = await browser.management.getSelf();
//   if(pluginInfo.installType === "development") {
//     localStorage.debug = "app:*";
//     debug(`In development mode`);
//     return devConfig;
//   } else {
//     console.log(`In production mode`);
//     return prodConfig;
//   }
// }

browser.webNavigation.onHistoryStateUpdated.addListener(urlChanged);

async function urlChanged() {
  const tabs = await browser.tabs.query({
    active: true,
    currentWindow: true
  });
  debug("Changed url", tabs);
  // var activeTab = tabs[0];
  // chrome.tabs.sendMessage(activeTab.id, { message: "urlChanged" });
}
