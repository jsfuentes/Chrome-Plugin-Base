import React, { useEffect } from "react";
import ReactDOM from "react-dom";
const debug = require("debug")("app:popup");

import "../shared/dev_debug";
import { getAxios } from "../shared/utils";

debug("Running popup");
function Popup() {
  useEffect(() => {
    getAxios().then(axios => debug("Axios:", axios));
  }, []);

  return <button>Activate Superpowers</button>;
}

ReactDOM.render(<Popup />, document.getElementById("root"));
