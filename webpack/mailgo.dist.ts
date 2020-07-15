// webpack > dist/mailgo.min.js

import mailgoPolyfill from "./polyfill";
import mailgo from "../src/mailgo";

// call init mailgo attached to the event DOMContentLoaded
const mailgoConfig = {
  initEvent: "DOMContentLoaded",
};

mailgoPolyfill();

mailgo(mailgoConfig);
