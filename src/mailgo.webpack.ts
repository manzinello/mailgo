// webpack > dist/mailgo.min.js

import mailgo from "./mailgo";

// call init mailgo attached to the event DOMContentLoaded
const mailgoConfig = {
  initEvent: "DOMContentLoaded",
};

mailgo(mailgoConfig);
