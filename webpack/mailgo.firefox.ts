// webpack > extensions/mailgo.firefox.js
// script to add in Firefox addon
// https://github.com/manzinello/mailgo-firefox-addon

import mailgo from "../src/mailgo";

// check if mailgo HTML is already present in the page
let mailgoExists = !!document.getElementById("mailgo");

if (!mailgoExists) mailgo();
