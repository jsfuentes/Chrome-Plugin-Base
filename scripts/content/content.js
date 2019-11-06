import browser from "webextension-polyfill";

import "../shared/dev_debug.js";

console.log("CONTENT TEST RUNS");

browser.storage.sync.get(["test"]).then(async storage => {
  const newVal = storage.test !== undefined ? storage.test + 1 : 0;
  await browser.storage.sync.set({
    test: newVal
  });
});
