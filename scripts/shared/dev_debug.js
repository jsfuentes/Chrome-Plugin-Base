//include this in both content and background script plz
import browser from "webextension-polyfill";
import debugMaker from "debug";
const debug = debugMaker("app:scripts:dev_debug");

import C from "./constants.js";

// if in background script
if (browser.management) {
  browser.management
    .getSelf()
    .then(pluginInfo => {
      if (pluginInfo.installType === "development") {
        debugMaker.enable("app:*");
        debug("Starting debug mode");
      }

      browser.runtime.onMessage.addListener(request => {
        if (request.type === C.is_development) {
          return new Promise(resolve =>
            resolve({ env: pluginInfo.installType })
          );
        }
      });
    })
    .catch(err => {
      console.error("Debugging error: ", err);
    });
} else {
  //hit the listener defined above to learn if in development
  browser.runtime
    .sendMessage({ type: C.is_development })
    .then(resp => {
      if (resp.env === "development") {
        debugMaker.enable("app:*");
        debug("Starting debug mode");
      } else {
        // console.log("In production");
      }
    })
    .catch(err => {
      console.error("Debugging error: ", err);
    });
}

//Debug local storage changes
browser.storage.onChanged.addListener((changes, namespace) => {
  for (let key in changes) {
    const storageChange = changes[key];
    //not all in `` b/c it abbreivates objs there
    debug(
      `${namespace} ${key} changed from`,
      storageChange.oldValue,
      "to",
      storageChange.newValue
    );
  }
});

browser.runtime.onMessage.addListener(msg => {
  debug("Message recieved", msg);
  // Content script debug messages will be slightly delayed
  // console.log("Message recieved", msg);
});
