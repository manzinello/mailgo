// import mailgo
import mailgo from "./mailgo.m.js";

// call init mailgo attached to the event DOMContentLoaded

const mailgoConfig = {
  initEvent: "DOMContentLoaded",
};

mailgo(mailgoConfig);
