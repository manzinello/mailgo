// webpack > extensions/mailgo.chrome.js
// script to add in Chrome extension
// https://github.com/manzinello/mailgo-chrome-extension

import mailgo from "../src/mailgo";

// check if mailgo HTML is already present in the page
let mailgoExists = !!document.getElementById("mailgo");

if (!mailgoExists) mailgo();
