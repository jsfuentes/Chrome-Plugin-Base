import { default as axiosBase } from "axios";
const debug = require("debug")("app:shared:utils");

let eConfig; //singleton
export async function getExtendedConfig() {
  if (eConfig === undefined) {
    // const pluginInfo = await chrome.management.getSelf();
    // let config;
    // if (pluginInfo.installType === "development") {
    //   localStorage.debug = "app:*";
    //   config = require("../config/dev.json");
    // } else {
    //   config = require("../config/prod.json");
    // }

    // const userInfo = await chrome.identity.getProfileUserInfo();
    // // this won't change between calls
    // eConfig = { ...config, ...userInfo };
    eConfig = {
      env: "dev",
      server_url: "http://localhost:3000"
    };
  }

  return eConfig;
}

let axios;
export async function getAxios() {
  if (axios === undefined) {
    axios = axiosBase;

    // const eConfig = await getExtendedConfig();
    // if (eConfig.env === "dev") {
    //   debug("Using axios base");
    //   axios = axiosBase;
    // } else {
    //   debug("Using axios prod");
    //   axios = axiosBase.create({
    //     baseURL: eConfig.server_url
    //     // withCredentials: true
    //     /* other custom settings */
    //   });
    // }
  }

  return axios;
}
