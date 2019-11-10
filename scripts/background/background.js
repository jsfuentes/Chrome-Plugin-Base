import browser from "webextension-polyfill";
import debugMaker from "debug";
const debug = debugMaker("app:background");

import "../shared/dev_debug.js";
import { getExtendedConfig, getAxios } from "./utils.js";

browser.webNavigation.onHistoryStateUpdated.addListener(urlChanged);

debug("Hello from background");
async function urlChanged() {
  const tabs = await browser.tabs.query({
    active: true,
    currentWindow: true
  });
  debug("Changed url", tabs[0].url);
  // var activeTab = tabs[0];
  // chrome.tabs.sendMessage(activeTab.id, { message: "urlChanged" });
}

getExtendedConfig().then(config => debug("Config:", config));
getAxios().then(axios => debug("Axios:", axios));
