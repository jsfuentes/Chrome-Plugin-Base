import browser from "webextension-polyfill";
const debug = require("debug")("app:shared:utils");

let isDev: boolean;
export function isDevMode() {
  if (isDev === undefined) {
    if (typeof browser.runtime.getManifest) {
      isDev = !("update_url" in browser.runtime.getManifest());
      console.log("isDev", isDev, browser.runtime.getManifest());
    } else {
      isDev = true;
      console.log("browser.runtime.getManifest not found, so isDev", isDev);
    }
  }

  return isDev;
}
