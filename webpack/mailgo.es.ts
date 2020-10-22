// webpack > lib/mailgo.js

import mailgo, {
  getMailgoTypeByElement,
  mailgoCheckRender,
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
} from "../src/mailgo";

// start function
const start = mailgo;

export {
  getMailgoTypeByElement,
  mailgoCheckRender,
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
  mailgo,
  start,
};
