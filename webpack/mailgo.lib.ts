// webpack > lib/mailgo.js

import mailgo, {
  getMailgoTypeByElement,
  mailgoClickListener,
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
} from "../src/mailgo";

// start function
const start = mailgo;

export {
  getMailgoTypeByElement,
  mailgoClickListener,
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
  mailgo,
  start,
};

export default mailgo;
