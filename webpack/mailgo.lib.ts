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

// compatibility with old version of mailgo
const mailgoCheckRender = mailgoClickListener;

export {
  getMailgoTypeByElement,
  mailgoClickListener,
  mailgoCheckRender,
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
  mailgo,
  start,
};

export default mailgo;
