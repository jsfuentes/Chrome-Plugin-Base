import browser from "webextension-polyfill";
import debugMaker from 'debug';
const debug = debugMaker('app:dev_debug');

//if in background script
if(browser.management) {
  browser.management.getSelf().then((pluginInfo) => {
    if(pluginInfo.installType === "development") {
      localStorage.debug = "app:*";
      debug("Starting debug mode");
    }
  });
}

//Debug local storage changes
chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (let key in changes) {
    let storageChange = changes[key];
    //not all in `` b/c it abbreivates objs there
    console.log(`${namespace} ${key} changed from`, storageChange.oldValue, "to", storageChange.newValue);
  }
});

//Debug messages
chrome.runtime.onMessage.addListener((msg, sender) => {
  console.log("Message recieved", msg);
});