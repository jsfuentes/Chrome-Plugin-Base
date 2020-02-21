import browser from "webextension-polyfill";
const debug = require("debug")("app:background");

import "../shared/dev_debug.js";
import { getExtendedConfig, getAxios } from "../shared/utils.js";

browser.webNavigation.onHistoryStateUpdated.addListener(urlChanged);

debug("Hello from backgrounds");
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
