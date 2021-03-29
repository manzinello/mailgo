// webpack > lib/mailgo.js

import mailgo, {
  getMailgoTypeByElement,
  mailgoClickListener,
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
  mailgoValidateEmail,
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
  mailgoValidateEmail,
  mailgo,
  start,
};

export default mailgo;
