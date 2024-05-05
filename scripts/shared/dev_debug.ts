//include this in both content and background script plz
import debugMaker from "debug";
const debug = debugMaker("app:scripts:dev_debug");

function isDevMode() {
  if (typeof chrome.runtime.getManifest) {
    console.log("chrome.runtime.getManifest found");
    return !("update_url" in chrome.runtime.getManifest());
  } else {
    console.log("chrome.runtime.getManifest not found");
    return false;
  }
}

isDevMode();

//Need to turn on debug mode for development

// if in background script
// if (chrome.management) {
//   chrome.management
//     .getSelf()
//     .then(pluginInfo => {
//       console.log("Plugin info: ", pluginInfo);
//       if (pluginInfo.installType === "development") {
//         debugMaker.enable("app:*");
//         debug("Starting debug mode");
//       }

//       chrome.runtime.onMessage.addListener(request => {
//         if (request.type === C.is_development) {
//           return new Promise(resolve =>
//             resolve({ env: pluginInfo.installType })
//           );
//         }
//         return false;
//       });
//     })
//     .catch(err => {
//       console.error("Debugging error: ", err);
//     });
// } else {
//   //hit the listener defined above to learn if in development
//   chrome.runtime
//     .sendMessage({ type: C.is_development })
//     .then(resp => {
//       if (resp.env === "development") {
//         debugMaker.enable("app:*");
//         debug("Starting debug mode");
//       } else {
//         // console.log("In production");
//       }
//     })
//     .catch(err => {
//       console.error("Debugging error: ", err);
//     });
// }

//Debug local storage changes
chrome.storage.onChanged.addListener((changes, namespace) => {
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

chrome.runtime.onMessage.addListener(msg => {
  debug("Message recieved", msg);
  // Content script debug messages will be slightly delayed
  // console.log("Message recieved", msg);
  return false;
});
