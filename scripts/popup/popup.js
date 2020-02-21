import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import browser from "webextension-polyfill";
const debug = require("debug")("app:popup");

import { getAxios, getExtendedConfig } from "../shared/utils.js";
import "../shared/dev_debug.js";

debug("Running popup");
function Popup() {
  useEffect(() => {
    getAxios().then(axios => debug("Axios:", axios));
  }, []);

  return <button>Activate Superpowers</button>;
}

ReactDOM.render(<Popup />, document.getElementById("root"));
