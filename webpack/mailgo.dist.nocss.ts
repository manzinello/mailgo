// webpack > dist/mailgo.nocss.min.js

import mailgo from "../src/mailgo";

// call init mailgo attached to the event DOMContentLoaded
const mailgoConfig = {
  initEvent: "DOMContentLoaded",
  loadCSS: false,
};

mailgo(mailgoConfig);
