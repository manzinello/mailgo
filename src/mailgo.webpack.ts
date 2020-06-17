import mailgo from "./mailgo";

// call init mailgo attached to the event DOMContentLoaded
const mailgoConfig = {
  initEvent: "DOMContentLoaded",
};

console.log(mailgo);

mailgo(mailgoConfig);
