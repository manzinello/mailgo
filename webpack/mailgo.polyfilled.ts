// webpack > dist/mailgo.polyfilled.min.js

import { mailgoPolyfill } from "../src/polyfill";
import mailgo from "../src/mailgo";

// call init mailgo attached to the event DOMContentLoaded
const mailgoConfig = {
  initEvent: "DOMContentLoaded",
};

// polyfill
mailgoPolyfill();

mailgo(mailgoConfig);
