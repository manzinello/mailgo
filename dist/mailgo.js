window.mailgo =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 581:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse("{\"languages\":[\"en\",\"it\",\"es\",\"de\",\"fr\",\"pt\",\"nl\",\"ru\",\"sv\",\"no\",\"dk\",\"is\",\"zh\"],\"translations\":{\"en\":{\"open_in_\":\"open in \",\"cc_\":\"cc \",\"bcc_\":\"bcc \",\"subject_\":\"subject \",\"body_\":\"body \",\"gmail\":\"Gmail\",\"outlook\":\"Outlook\",\"yahoo\":\"Yahoo Mail\",\"telegram\":\"Telegram\",\"whatsapp\":\"WhatsApp\",\"skype\":\"Skype\",\"call\":\"call\",\"open\":\"open\",\"_default\":\" default\",\"_as_default\":\" as default\",\"copy\":\"copy\",\"copied\":\"copied\"},\"it\":{\"open_in_\":\"apri con \",\"bcc_\":\"ccn \",\"subject_\":\"oggetto \",\"body_\":\"testo \",\"call\":\"chiama\",\"open\":\"apri\",\"_default\":\" \",\"_as_default\":\" \",\"copy\":\"copia\",\"copied\":\"copiato\"},\"es\":{\"open_in_\":\"abrir con \",\"bcc_\":\"cco \",\"subject_\":\"asunto \",\"body_\":\"cuerpo \",\"call\":\"llamar\",\"open\":\"abrir\",\"_default\":\" predefinido\",\"_as_default\":\" por defecto\",\"copy\":\"copiar\",\"copied\":\"copiado\"},\"de\":{\"open_in_\":\"Öffnen in \",\"subject_\":\"Betreff \",\"body_\":\"Nachricht \",\"call\":\"Anrufen\",\"open\":\"Öffnen\",\"_default\":\" mit Standard\",\"_as_default\":\" mit Standard\",\"copy\":\"kopieren\",\"copied\":\"kopiert\"},\"pt\":{\"open_in_\":\"abrir com \",\"bcc_\":\"cco \",\"subject_\":\"assunto \",\"body_\":\"corpo \",\"call\":\"ligar\",\"open\":\"abrir\",\"_default\":\" padrão\",\"_as_default\":\" por padrão\",\"copy\":\"copiar\",\"copied\":\"copiado\"},\"fr\":{\"open_in_\":\"Ouvrir dans \",\"bcc_\":\"cci \",\"subject_\":\"sujet \",\"body_\":\"contenu \",\"call\":\"Appeler\",\"open\":\"Ouvrir\",\"_default\":\" par défaut\",\"_as_default\":\" par défaut\",\"copy\":\"Copier\",\"copied\":\"copié\"},\"nl\":{\"subject_\":\"onderwerp \",\"body_\":\"bericht \",\"call\":\"bellen\",\"open\":\"openen\",\"_default\":\" standaard\",\"_as_default\":\" als standaard\",\"copy\":\"kopiëren\"},\"ru\":{\"open_in_\":\"открыть в \",\"subject_\":\"тема \",\"body_\":\"тело \",\"call\":\"позвонить\",\"open\":\"открыть\",\"_default\":\" по умолчанию\",\"_as_default\":\" по умолчанию\",\"copy\":\"скопировать\"},\"sv\":{\"open_in_\":\"öppna i \",\"subject_\":\"ämne \",\"body_\":\"meddelandetext \",\"call\":\"ring\",\"open\":\"öppna\",\"_default\":\" förval\",\"_as_default\":\" som förval\",\"copy\":\"kopiera\",\"copied\":\"kopierad\"},\"no\":{\"open_in_\":\"åpne i \",\"subject_\":\"emne \",\"call\":\"ringe\",\"open\":\"åpne\",\"_as_default\":\" som standard\",\"copy\":\"kopiere\",\"copied\":\"kopiert\"},\"dk\":{\"open_in_\":\"åpne i \",\"subject_\":\"emne \",\"call\":\"ringe op\",\"open\":\"åben\",\"_as_default\":\" som standard\",\"copy\":\"kopi\",\"copied\":\"kopieret\"},\"is\":{\"open_in_\":\"opið inn \",\"subject_\":\"viðfangsefni \",\"body_\":\"líkami \",\"call\":\"hringja\",\"open\":\"opið\",\"_default\":\" sjálfgefið\",\"_as_default\":\" sem sjálfgefið\",\"copy\":\"afrita\",\"copied\":\"afritað\"},\"zh\":{\"open_in_\":\"開啟 \",\"cc_\":\"副本 \",\"bcc_\":\"密件副本 \",\"subject_\":\"主旨 \",\"body_\":\"內文 \",\"call\":\"通話\",\"open\":\"開啟\",\"_default\":\" 預設\",\"_as_default\":\" 預設\",\"copy\":\"複製\",\"copied\":\"已複製\"}}}");

/***/ }),

/***/ 249:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAILTO": function() { return /* binding */ MAILTO; },
/* harmony export */   "MAILGO": function() { return /* binding */ MAILGO; },
/* harmony export */   "TEL": function() { return /* binding */ TEL; },
/* harmony export */   "CALLTO": function() { return /* binding */ CALLTO; },
/* harmony export */   "SMS": function() { return /* binding */ SMS; },
/* harmony export */   "outlookDeepLink": function() { return /* binding */ outlookDeepLink; },
/* harmony export */   "NO_MAILGO": function() { return /* binding */ NO_MAILGO; },
/* harmony export */   "MAILGO_MAIL": function() { return /* binding */ MAILGO_MAIL; },
/* harmony export */   "MAILGO_TEL": function() { return /* binding */ MAILGO_TEL; },
/* harmony export */   "spanHTMLTag": function() { return /* binding */ spanHTMLTag; },
/* harmony export */   "aHTMLTag": function() { return /* binding */ aHTMLTag; },
/* harmony export */   "pHTMLTag": function() { return /* binding */ pHTMLTag; },
/* harmony export */   "defaultLang": function() { return /* binding */ defaultLang; },
/* harmony export */   "mailgoReadyTag": function() { return /* binding */ mailgoReadyTag; },
/* harmony export */   "mailgoRenderTag": function() { return /* binding */ mailgoRenderTag; }
/* harmony export */ });
// links
var MAILTO = "mailto:";
var MAILGO = "mailgo:";
var TEL = "tel:";
var CALLTO = "callto:";
var SMS = "sms:"; // deep linking

var outlookDeepLink = "ms-outlook://"; // no mailgo class

var NO_MAILGO = "no-mailgo"; // mailgo types

var MAILGO_MAIL = "mailgo";
var MAILGO_TEL = "mailgo-tel"; // useful html tags

var spanHTMLTag = "span";
var aHTMLTag = "a";
var pHTMLTag = "p"; // default lang

var defaultLang = "en"; // events tag

var mailgoReadyTag = "mailgo-ready";
var mailgoRenderTag = "mailgo-render";

/***/ }),

/***/ 12:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateEmail": function() { return /* binding */ validateEmail; },
/* harmony export */   "validateEmails": function() { return /* binding */ validateEmails; },
/* harmony export */   "validateTel": function() { return /* binding */ validateTel; },
/* harmony export */   "copyToClipboard": function() { return /* binding */ copyToClipboard; },
/* harmony export */   "setFocusLoop": function() { return /* binding */ setFocusLoop; },
/* harmony export */   "leaveLastLink": function() { return /* binding */ leaveLastLink; },
/* harmony export */   "leaveFirstLink": function() { return /* binding */ leaveFirstLink; }
/* harmony export */ });
// validate a single email with regex
var validateEmail = function validateEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}; // validate an array of emails

var validateEmails = function validateEmails(arr) {
  return arr.every(validateEmail);
}; // validate a single tel with regex

var validateTel = function validateTel(tel) {
  return /^[+]{0,1}[\s0-9]{0,}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(tel);
}; // copy of a string

var copyToClipboard = function copyToClipboard(str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
    return true;
  }

  return false;
}; // set focus loop within modal

var setFocusLoop = function setFocusLoop(ref) {
  var modal = ref;
  modal.querySelector(".m-modal-content a:last-of-type").addEventListener("keydown", leaveLastLink);
  modal.querySelector(".m-modal-content a:first-of-type").addEventListener("keydown", leaveFirstLink);
};
var leaveLastLink = function leaveLastLink(e) {
  // going back to the first link to force looping
  if (e.code === "Tab" && e.shiftKey === false) {
    e.preventDefault();
    e.target.closest("div").querySelector("a:first-of-type").focus();
  }
};
var leaveFirstLink = function leaveFirstLink(e) {
  // going back to the first link to force looping
  if (e.code === "Tab" && e.shiftKey === true) {
    e.preventDefault();
    e.target.closest("div").querySelector("a:last-of-type").focus();
  }
};

/***/ }),

/***/ 91:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(476);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".m-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:16.5px;z-index:10000}.m-modal p,.m-modal span,.m-modal strong,.m-modal a{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";text-rendering:optimizeLegibility}.m-modal strong{font-weight:700}.m-modal .m-modal-back{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:#20232a;opacity:0.8}.m-modal .m-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:0.95;border-radius:20px;box-shadow:0 3px 20px rgba(32,35,42,0.5);color:#4a4a4a;display:flex;flex-direction:column;overflow:auto;padding:24px;transition:0.5s box-shadow}.m-modal .m-modal-content:hover,.m-modal .m-modal-content:focus,.m-modal .m-modal-content:active{opacity:1}.m-modal .m-modal-content .m-title{margin-bottom:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1.2em}.m-modal .m-modal-content .m-details{margin-bottom:10px}.m-modal .m-modal-content .m-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.m-modal .m-modal-content a{cursor:pointer;padding:10px;color:#4a4a4a;border-radius:20px;text-decoration:none}.m-modal .m-modal-content a.m-gmail{color:#c0372a}.m-modal .m-modal-content a.m-gmail:hover,.m-modal .m-modal-content a.m-gmail:focus,.m-modal .m-modal-content a.m-gmail:active{background-color:rgba(192,55,42,0.08);color:#c0372a}.m-modal .m-modal-content a.m-outlook{color:#0967aa}.m-modal .m-modal-content a.m-outlook:hover,.m-modal .m-modal-content a.m-outlook:focus,.m-modal .m-modal-content a.m-outlook:active{background-color:rgba(9,103,170,0.08);color:#0967aa}.m-modal .m-modal-content a.m-yahoo{color:#4a00a0}.m-modal .m-modal-content a.m-yahoo:hover,.m-modal .m-modal-content a.m-yahoo:focus,.m-modal .m-modal-content a.m-yahoo:active{background-color:rgba(74,0,160,0.08);color:#4a00a0}.m-modal .m-modal-content a.m-tg{color:#086da0}.m-modal .m-modal-content a.m-tg:hover,.m-modal .m-modal-content a.m-tg:focus,.m-modal .m-modal-content a.m-tg:active{background-color:rgba(8,109,160,0.08);color:#086da0}.m-modal .m-modal-content a.m-wa{color:#067466}.m-modal .m-modal-content a.m-wa:hover,.m-modal .m-modal-content a.m-wa:focus,.m-modal .m-modal-content a.m-wa:active{background-color:rgba(6,116,102,0.08);color:#067466}.m-modal .m-modal-content a.m-skype{color:#076d92}.m-modal .m-modal-content a.m-skype:hover,.m-modal .m-modal-content a.m-skype:focus,.m-modal .m-modal-content a.m-skype:active{background-color:rgba(7,109,146,0.08);color:#076d92}.m-modal .m-modal-content a.m-copy{padding:16px 10px;font-size:16px}.m-modal .m-modal-content a.m-default:hover,.m-modal .m-modal-content a.m-default:focus,.m-modal .m-modal-content a.m-default:active,.m-modal .m-modal-content a.m-copy:hover,.m-modal .m-modal-content a.m-copy:focus,.m-modal .m-modal-content a.m-copy:active{background-color:rgba(0,0,0,0.08);color:#4a4a4a}.m-modal .m-modal-content a.m-by{font-size:12px;margin-top:0.8rem;padding:5px;color:#4a4a4a}.m-modal .m-modal-content a.m-by:hover,.m-modal .m-modal-content a.m-by:focus,.m-modal .m-modal-content a.m-by:active{color:#3d3d3d}.m-modal .m-modal-content .w-500{font-weight:500}.m-modal.m-dark .m-modal-content{background-color:#20232a}.m-modal.m-dark .m-modal-content,.m-modal.m-dark .m-modal-content p,.m-modal.m-dark .m-modal-content p span,.m-modal.m-dark .m-modal-content strong{color:#fff}.m-modal.m-dark .m-modal-content a{color:#eaeaea}.m-modal.m-dark .m-modal-content a:not(.m-by):hover,.m-modal.m-dark .m-modal-content a:not(.m-by):focus,.m-modal.m-dark .m-modal-content a:not(.m-by):active{background-color:rgba(134,134,134,0.08);color:#eaeaea}.m-modal.m-dark .m-modal-content a.m-gmail{color:#e07d73}.m-modal.m-dark .m-modal-content a.m-gmail:hover,.m-modal.m-dark .m-modal-content a.m-gmail:focus,.m-modal.m-dark .m-modal-content a.m-gmail:active{background-color:rgba(224,125,115,0.08);color:#e07d73}.m-modal.m-dark .m-modal-content a.m-outlook{color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-outlook:hover,.m-modal.m-dark .m-modal-content a.m-outlook:focus,.m-modal.m-dark .m-modal-content a.m-outlook:active{background-color:rgba(76,156,215,0.08);color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-yahoo{color:#ac88d3}.m-modal.m-dark .m-modal-content a.m-yahoo:hover,.m-modal.m-dark .m-modal-content a.m-yahoo:focus,.m-modal.m-dark .m-modal-content a.m-yahoo:active{background-color:rgba(172,136,211,0.08);color:#ac88d3}.m-modal.m-dark .m-modal-content a.m-tg{color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-tg:hover,.m-modal.m-dark .m-modal-content a.m-tg:focus,.m-modal.m-dark .m-modal-content a.m-tg:active{background-color:rgba(76,171,219,0.08);color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-wa{color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-wa:hover,.m-modal.m-dark .m-modal-content a.m-wa:focus,.m-modal.m-dark .m-modal-content a.m-wa:active{background-color:rgba(76,210,192,0.08);color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-skype{color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-skype:hover,.m-modal.m-dark .m-modal-content a.m-skype:focus,.m-modal.m-dark .m-modal-content a.m-skype:active{background-color:rgba(76,199,244,0.08);color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-by:hover,.m-modal.m-dark .m-modal-content a.m-by:focus,.m-modal.m-dark .m-modal-content a.m-by:active{color:#fff}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 476:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 801:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(91);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../src/mailgo.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// polyfill
// const { mailgoPolyfill } = require("./polyfill");
// constants
var _require = __webpack_require__(249),
    MAILTO = _require.MAILTO,
    MAILGO = _require.MAILGO,
    TEL = _require.TEL,
    CALLTO = _require.CALLTO,
    SMS = _require.SMS,
    MAILGO_MAIL = _require.MAILGO_MAIL,
    MAILGO_TEL = _require.MAILGO_TEL,
    NO_MAILGO = _require.NO_MAILGO,
    spanHTMLTag = _require.spanHTMLTag,
    aHTMLTag = _require.aHTMLTag,
    pHTMLTag = _require.pHTMLTag,
    defaultLang = _require.defaultLang; // utils


var _require2 = __webpack_require__(12),
    validateEmails = _require2.validateEmails,
    validateTel = _require2.validateTel,
    copyToClipboard = _require2.copyToClipboard,
    setFocusLoop = _require2.setFocusLoop; // i18n for mailgo


var i18n = __webpack_require__(581); // mailgo scss


var mailgoCSS = __webpack_require__(801).toString(); // translations


var _ref = i18n,
    translations = _ref.translations; // default language

var lang = defaultLang; // default strings

var defaultStrings = translations[defaultLang]; // translation strings

var strings; // global mailgo config object

var config; // default config attributes

var mailtoEnabled = true;
var telEnabled = true;
var smsEnabled = true;
var validateEmailConfig = true;
var validateTelConfig = true;
var showFooterConfig = true;
var loadCSSConfig = true; // modals global object

var modalMailto, modalTel; // mailgo variables

var url, mail, encEmail, cc, bcc, subject, bodyMail; // mailgo tel variables

var tel, msg, telegramUsername, skypeUsername; // the DOM elements

var title, titleTel, detailCc, detailBcc, detailSubject, detailBody, detailMsg, ccValue, bccValue, subjectValue, bodyValue, msgValue, activatedLink; // mailgo buttons (actions)

var gmail, outlook, yahoo, mailgo_open, telegram, wa, skype, call, copyMail, copyTel;
/**
 * mailgoInit
 * the function that creates the mailgo elements in DOM
 */

var mailgoInit = function mailgoInit() {
  // mailgo, if mailgo not already exists
  var mailgoExists = !!document.getElementById(MAILGO_MAIL);

  if (!mailgoExists) {
    var _config, _config2;

    // modal
    modalMailto = createElement();
    modalMailto.style.display = "none";
    modalMailto.id = MAILGO_MAIL;
    modalMailto.classList.add("m-modal");
    modalMailto.setAttribute("role", "dialog");
    modalMailto.setAttribute("tabindex", "-1");
    modalMailto.setAttribute("aria-labelledby", "m-title"); // set the mailgo language

    mailgoSetLanguage(); // if dark is in config

    if ((_config = config) === null || _config === void 0 ? void 0 : _config.dark) {
      enableDarkMode(MAILGO_MAIL);
    } else {
      disableDarkMode(MAILGO_MAIL);
    } // background


    var modalBackground = createElement();
    modalBackground.className = "m-modal-back";
    modalMailto.appendChild(modalBackground); // modal content

    var modalContent = createElement();
    modalContent.className = "m-modal-content";
    modalMailto.appendChild(modalContent); // title (email address)

    title = createElement("strong");
    title.id = "m-title";
    title.className = "m-title";
    modalContent.appendChild(title); // details

    var details = createElement();
    details.id = "m-details";
    details.className = "m-details";
    detailCc = createElement(pHTMLTag);
    detailCc.id = "m-cc";
    var ccSpan = createElement(spanHTMLTag);
    ccSpan.className = "w-500";
    ccSpan.appendChild(createTextNode(strings.cc_ || defaultStrings.cc_));
    ccValue = createElement(spanHTMLTag);
    ccValue.id = "m-cc-value";
    detailCc.appendChild(ccSpan);
    detailCc.appendChild(ccValue);
    details.appendChild(detailCc);
    detailBcc = createElement(pHTMLTag);
    detailBcc.id = "m-bcc";
    var bccSpan = createElement(spanHTMLTag);
    bccSpan.className = "w-500";
    bccSpan.appendChild(createTextNode(strings.bcc_ || defaultStrings.bcc_));
    bccValue = createElement(spanHTMLTag);
    bccValue.id = "m-bcc-value";
    detailBcc.appendChild(bccSpan);
    detailBcc.appendChild(bccValue);
    details.appendChild(detailBcc);
    detailSubject = createElement(pHTMLTag);
    detailSubject.id = "m-subject";
    var subjectSpan = createElement(spanHTMLTag);
    subjectSpan.className = "w-500";
    subjectSpan.appendChild(createTextNode(strings.subject_ || defaultStrings.subject_));
    subjectValue = createElement(spanHTMLTag);
    subjectValue.id = "m-subject-value";
    detailSubject.appendChild(subjectSpan);
    detailSubject.appendChild(subjectValue);
    details.appendChild(detailSubject);
    detailBody = createElement(pHTMLTag);
    detailBody.id = "m-body";
    var bodySpan = createElement(spanHTMLTag);
    bodySpan.className = "w-500";
    bodySpan.appendChild(createTextNode(strings.body_ || defaultStrings.body_));
    bodyValue = createElement(spanHTMLTag);
    bodyValue.id = "m-body-value";
    detailBody.appendChild(bodySpan);
    detailBody.appendChild(bodyValue);
    details.appendChild(detailBody);
    modalContent.appendChild(details); // Gmail

    gmail = createElement(aHTMLTag);
    gmail.id = "m-gmail";
    gmail.href = "#mailgo-gmail";
    gmail.classList.add("m-open");
    gmail.classList.add("m-gmail");
    gmail.appendChild(createTextNode(strings.open_in_ || defaultStrings.open_in_));
    var gmailSpan = createElement(spanHTMLTag);
    gmailSpan.className = "w-500";
    gmailSpan.appendChild(createTextNode(strings.gmail || defaultStrings.gmail));
    gmail.appendChild(gmailSpan);
    if (mailgoActionEnabled("gmail")) modalContent.appendChild(gmail); // Outlook

    outlook = createElement(aHTMLTag);
    outlook.id = "m-outlook";
    outlook.href = "#mailgo-outlook";
    outlook.classList.add("m-open");
    outlook.classList.add("m-outlook");
    outlook.appendChild(createTextNode(strings.open_in_ || defaultStrings.open_in_));
    var outlookSpan = createElement(spanHTMLTag);
    outlookSpan.className = "w-500";
    outlookSpan.appendChild(createTextNode(strings.outlook || defaultStrings.outlook));
    outlook.appendChild(outlookSpan);

    if (mailgoActionEnabled("outlook")) {
      modalContent.appendChild(outlook);
    } // Outlook


    yahoo = createElement(aHTMLTag);
    yahoo.id = "m-yahoo";
    yahoo.href = "#mailgo-yahoo";
    yahoo.classList.add("m-open");
    yahoo.classList.add("m-yahoo");
    yahoo.appendChild(createTextNode(strings.open_in_ || defaultStrings.open_in_));
    var yahooSpan = createElement(spanHTMLTag);
    yahooSpan.className = "w-500";
    yahooSpan.appendChild(createTextNode(strings.yahoo || defaultStrings.yahoo));
    yahoo.appendChild(yahooSpan);

    if (mailgoActionEnabled("yahoo")) {
      modalContent.appendChild(yahoo);
    } // open default


    mailgo_open = createElement(aHTMLTag);
    mailgo_open.id = "m-open";
    mailgo_open.href = "#mailgo-open";
    mailgo_open.classList.add("m-open");
    mailgo_open.classList.add("m-default");
    var openSpan = createElement(spanHTMLTag);
    openSpan.className = "w-500";
    openSpan.appendChild(createTextNode(strings.open || defaultStrings.open));
    mailgo_open.appendChild(openSpan);
    mailgo_open.appendChild(createTextNode(strings._default || defaultStrings._default));
    modalContent.appendChild(mailgo_open); // copy

    copyMail = createElement(aHTMLTag);
    copyMail.id = "m-copy";
    copyMail.href = "#mailgo-copy";
    copyMail.classList.add("m-copy");
    copyMail.classList.add("w-500");
    copyMail.appendChild(createTextNode(strings.copy || defaultStrings.copy));
    modalContent.appendChild(copyMail); // hide mailgo.dev in footer only if showFooter is defined and equal to false

    if (typeof ((_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.showFooter) !== "undefined") {
      showFooterConfig = config.showFooter;
    }

    if (showFooterConfig) {
      modalContent.appendChild(byElement());
    } // add the modal at the end of the body


    document.body.appendChild(modalMailto); // every click outside the modal will hide the modal

    modalBackground.addEventListener("click", hideMailgo);
  } // mailgo tel, if mailgo-tel not already exists


  var mailgoTelExists = !!document.getElementById(MAILGO_TEL);

  if (!mailgoTelExists) {
    var _config3, _config4;

    // modal
    modalTel = createElement();
    modalTel.style.display = "none";
    modalTel.id = MAILGO_TEL;
    modalTel.classList.add("m-modal");
    modalTel.setAttribute("role", "dialog");
    modalTel.setAttribute("tabindex", "-1");
    modalTel.setAttribute("aria-labelledby", "m-tel-title"); // if dark is in config

    if ((_config3 = config) === null || _config3 === void 0 ? void 0 : _config3.dark) {
      enableDarkMode(MAILGO_TEL);
    } else {
      disableDarkMode(MAILGO_TEL);
    } // background


    var _modalBackground = createElement();

    _modalBackground.className = "m-modal-back";
    modalTel.appendChild(_modalBackground); // modal content

    var _modalContent = createElement();

    _modalContent.className = "m-modal-content";
    modalTel.appendChild(_modalContent); // title (telephone number)

    titleTel = createElement("strong");
    titleTel.id = "m-tel-title";
    titleTel.className = "m-title";

    _modalContent.appendChild(titleTel); // details


    var detailsTel = createElement();
    detailsTel.id = "m-tel-details";
    detailsTel.className = "m-details";
    detailMsg = createElement(pHTMLTag);
    detailMsg.id = "m-msg";
    var msgSpan = createElement(spanHTMLTag);
    msgSpan.className = "w-500";
    msgSpan.appendChild(createTextNode(strings.body_ || defaultStrings.body_));
    msgValue = createElement(spanHTMLTag);
    msgValue.id = "m-msg-value";
    detailMsg.appendChild(msgSpan);
    detailMsg.appendChild(msgValue);
    detailsTel.appendChild(detailMsg);

    _modalContent.appendChild(detailsTel); // Telegram


    telegram = createElement(aHTMLTag);
    telegram.id = "m-tg";
    telegram.href = "#mailgo-telegram";
    telegram.classList.add("m-open");
    telegram.classList.add("m-tg"); // by default not display

    telegram.style.display = "none";
    telegram.appendChild(createTextNode(strings.open_in_ || defaultStrings.open_in_));
    var telegramSpan = createElement(spanHTMLTag);
    telegramSpan.className = "w-500";
    telegramSpan.appendChild(createTextNode(strings.telegram || defaultStrings.telegram));
    telegram.appendChild(telegramSpan);

    if (mailgoActionEnabled("telegram")) {
      _modalContent.appendChild(telegram);
    } // WhatsApp


    wa = createElement(aHTMLTag);
    wa.id = "m-wa";
    wa.href = "#mailgo-whatsapp";
    wa.classList.add("m-open");
    wa.classList.add("m-wa");
    wa.appendChild(createTextNode(strings.open_in_ || defaultStrings.open_in_));
    var waSpan = createElement(spanHTMLTag);
    waSpan.className = "w-500";
    waSpan.appendChild(createTextNode(strings.whatsapp || defaultStrings.whatsapp));
    wa.appendChild(waSpan);

    if (mailgoActionEnabled("whatsapp")) {
      _modalContent.appendChild(wa);
    } // Skype


    skype = createElement(aHTMLTag);
    skype.id = "m-skype";
    skype.href = "#mailgo-skype";
    skype.classList.add("m-open");
    skype.classList.add("m-skype");
    skype.appendChild(createTextNode(strings.open_in_ || defaultStrings.open_in_));
    var skypeSpan = createElement(spanHTMLTag);
    skypeSpan.className = "w-500";
    skypeSpan.appendChild(createTextNode(strings.skype || defaultStrings.skype));
    skype.appendChild(skypeSpan);

    if (mailgoActionEnabled("skype")) {
      _modalContent.appendChild(skype);
    } // call default


    call = createElement(aHTMLTag);
    call.id = "m-call";
    call.href = "#mailgo-open";
    call.classList.add("m-open");
    call.classList.add("m-default");
    var callSpan = createElement(spanHTMLTag);
    callSpan.className = "w-500";
    callSpan.appendChild(createTextNode(strings.call || defaultStrings.call));
    call.appendChild(callSpan);
    call.appendChild(createTextNode(strings._as_default || defaultStrings._as_default));

    _modalContent.appendChild(call); // copy


    copyTel = createElement(aHTMLTag);
    copyTel.id = "m-tel-copy";
    copyTel.href = "#mailgo-copy";
    copyTel.classList.add("m-copy");
    copyTel.classList.add("w-500");
    copyTel.appendChild(createTextNode(strings.copy || defaultStrings.copy));

    _modalContent.appendChild(copyTel); // hide mailgo.dev in footer only if showFooter is defined and equal to false


    if (typeof ((_config4 = config) === null || _config4 === void 0 ? void 0 : _config4.showFooter) !== "undefined") {
      showFooterConfig = config.showFooter;
    }

    if (showFooterConfig) {
      _modalContent.appendChild(byElement());
    } // add the modal at the end of the body


    document.body.appendChild(modalTel); // every click outside the modal will hide the modal

    _modalBackground.addEventListener("click", hideMailgo);
  } // event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered


  document.addEventListener("click", mailgoCheckRender);
};
/**
 * mailgoCheckRender
 * function to check if an element is mailgo-enabled or not referencing to
 * mail:
 * document.querySelectorAll(
 *   'a[href^="mailto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 * tel:
 * document.querySelectorAll(
 *   'a[href^="tel:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 * or
 * document.querySelectorAll(
 *   'a[href^="callto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 * or
 * document.querySelectorAll(
 *   'a[href^="sms:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 */


function mailgoCheckRender(event) {
  // check if the mailgo HTML exists in the body
  if (!document.body.contains(modalMailto) || !document.body.contains(modalTel)) {
    return false;
  } // if a mailgo is already showing do nothing


  if (mailgoIsShowing(MAILGO_MAIL) || mailgoIsShowing(MAILGO_TEL)) {
    return false;
  } // the path of the event


  var path = event.composedPath && event.composedPath() || composedPath(event.target);

  if (path) {
    path.forEach(function (element) {
      if (element instanceof HTMLDocument || element instanceof Window) {
        return false;
      } // go in the event.path to find if the user has clicked on a mailgo element (if mailto/tel enabled)


      if (mailtoEnabled && getMailgoTypeByElement(element) === MAILGO_MAIL) {
        // stop the normal execution of the element click
        event.preventDefault(); // render mailgo

        mailgoPreRender(MAILGO_MAIL, element);
        return true;
      }

      if (telEnabled && getMailgoTypeByElement(element) == MAILGO_TEL) {
        // stop the normal execution of the element click
        event.preventDefault(); // render mailgo

        mailgoPreRender(MAILGO_TEL, element);
        return true;
      }
    });
  }

  return false;
}
/**
 * mailgoPreRender
 * function to pre-render a mailgo, it helps populating elements needed by modal
 */


function mailgoPreRender() {
  var _config7;

  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;
  var mailgoElementOrUrl = arguments.length > 1 ? arguments[1] : undefined;
  var href;
  var mailgoElement;

  if (typeof mailgoElementOrUrl == "string") {
    // if the parameter is a string it is the url
    href = mailgoElementOrUrl;
  } else {
    // if the paramenter is an HTMLLinkElement get the href attribute and the element
    href = mailgoElementOrUrl.href;
    mailgoElement = mailgoElementOrUrl;
  } // if href is undefined or null return false


  if (!href) {
    return false;
  } // mailgo mail


  if (type === MAILGO_MAIL) {
    var _config5;

    // if the element href=^"mailto:" or href=^"mailgo:"
    if (validateUrl(href, MAILTO) || validateUrl(href, MAILGO)) {
      if (validateUrl(href, MAILTO)) {
        mail = decodeURIComponent(href.split("?")[0].split(MAILTO)[1].trim());
      } else if (validateUrl(href, MAILGO)) {
        mail = decodeURIComponent(href.split("?")[0].split(MAILGO)[1].trim());
      }

      try {
        url = new URL(href);
        var urlParams = url.searchParams; // optional parameters for the email

        cc = urlParams.get("cc");
        bcc = urlParams.get("bcc");
        subject = urlParams.get("subject");
        bodyMail = urlParams.get("body");
      } catch (error) {
        console.error("step2" + error);
        return false;
      }
    } else {
      // if the element href="#mailgo" or class="mailgo"
      // mail = data-address + @ + data-domain
      mail = mailgoElement.getAttribute("data-address") + "@" + mailgoElement.getAttribute("data-domain");

      try {
        url = new URL(MAILTO + encodeURIComponent(mail));
      } catch (error) {
        console.error("step3" + error);
        return false;
      } // cc = data-cc-address + @ + data-cc-domain


      cc = mailgoElement.getAttribute("data-cc-address") + "@" + mailgoElement.getAttribute("data-cc-domain"); // bcc = data-bcc-address + @ + data-bcc-domain

      bcc = mailgoElement.getAttribute("data-bcc-address") + "@" + mailgoElement.getAttribute("data-bcc-domain"); // subject = data-subject

      subject = mailgoElement.getAttribute("data-subject"); // body = data-body

      bodyMail = mailgoElement.getAttribute("data-body");
    } // if is in config use it


    if (typeof ((_config5 = config) === null || _config5 === void 0 ? void 0 : _config5.validateEmail) !== "undefined") {
      validateEmailConfig = config.validateEmail;
    }

    if (validateEmailConfig) {
      // validate the email address
      if (!validateEmails(mail.split(","))) {
        return false;
      } // if cc, bcc are not valid cc, bcc = ""


      if (cc && !validateEmails(cc.split(","))) cc = "";
      if (bcc && !validateEmails(bcc.split(","))) bcc = "";
    }
  } // mailgo tel
  else if (type === MAILGO_TEL) {
      var _config6;

      if (validateUrl(href, TEL)) {
        tel = decodeURIComponent(href.split("?")[0].split(TEL)[1].trim());
      } else if (validateUrl(href, CALLTO)) {
        tel = decodeURIComponent(href.split("?")[0].split(CALLTO)[1].trim());
      } else if (validateUrl(href, SMS)) {
        tel = decodeURIComponent(href.split("?")[0].split(SMS)[1].trim());

        try {
          url = new URL(href);
          var _urlParams = url.searchParams; // optional parameters for the phone number

          msg = _urlParams.get("body");
        } catch (error) {
          console.error("step4" + error);
          return false;
        }
      } else if (mailgoElement.hasAttribute("data-tel")) {
        tel = mailgoElement.getAttribute("data-tel");
        msg = mailgoElement.getAttribute("data-msg");
      } // if is in config use it


      if (typeof ((_config6 = config) === null || _config6 === void 0 ? void 0 : _config6.validateTel) !== "undefined") {
        validateTelConfig = config.validateTel;
      } // validate the phone number


      if (validateTelConfig) {
        if (!validateTel(tel)) return;
      } // Telegram username


      if (mailgoElement && mailgoElement.hasAttribute("data-telegram")) {
        telegramUsername = mailgoElement.getAttribute("data-telegram");
      } else {
        telegramUsername = null;
      } // Telegram username


      if (mailgoElement && mailgoElement.hasAttribute("data-skype")) {
        skypeUsername = mailgoElement.getAttribute("data-skype");
      } else {
        skypeUsername = null;
      }
    } // if config.dark is set to true then all the modals will be in dark mode


  if (mailgoElement && !((_config7 = config) === null || _config7 === void 0 ? void 0 : _config7.dark)) {
    // if the element contains dark as class enable dark mode
    if (mailgoElement.classList.contains("dark")) {
      enableDarkMode(type);
    } else {
      disableDarkMode(type);
    }
  } // render mailgo


  mailgoRender(type);
  return true;
}
/**
 * mailgoDirectRender
 * function to render a mailgo directly from a URL
 */


function mailgoDirectRender(directUrl) {
  // start mailgo
  mailgo();

  if (validateUrl(directUrl, MAILTO) || validateUrl(directUrl, MAILGO)) {
    url = new URL(directUrl);
    mailgoPreRender(MAILGO_MAIL, directUrl);
    return true;
  } else if (validateUrl(directUrl, TEL) || validateUrl(directUrl, CALLTO) || validateUrl(directUrl, SMS)) {
    url = new URL(directUrl);
    mailgoPreRender(MAILGO_TEL, directUrl);
    return true;
  }

  return false;
}
/**
 * mailgoRender
 * function to render a mailgo (mail or tel)
 */


function mailgoRender() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;

  // mailgo mail
  if (type === MAILGO_MAIL) {
    // the title of the modal (email address)
    title.innerHTML = mail.split(",").join("<br/>"); // add the details if provided

    if (cc) {
      detailCc.style.display = "block";
      ccValue.innerHTML = cc.split(",").join("<br/>");
    } else {
      detailCc.style.display = "none";
    }

    if (bcc) {
      detailBcc.style.display = "block";
      bccValue.innerHTML = bcc.split(",").join("<br/>");
    } else {
      detailBcc.style.display = "none";
    }

    if (subject) {
      detailSubject.style.display = "block";
      subjectValue.textContent = subject;
    } else {
      detailSubject.style.display = "none";
    }

    if (bodyMail) {
      detailBody.style.display = "block";
      bodyValue.textContent = bodyMail;
    } else {
      detailBody.style.display = "none";
    } // add the actions


    gmail.addEventListener("click", openGmail);
    outlook.addEventListener("click", openOutlook);
    yahoo.addEventListener("click", openYahooMail);
    encEmail = encodeEmail(mail);
    mailgo_open.addEventListener("click", openDefault);
    copyMail.addEventListener("click", function (event) {
      event.preventDefault();
      copy(mail);
    });
  } // mailgo tel
  else if (type === MAILGO_TEL) {
      // the title of the modal (tel)
      titleTel.innerHTML = tel;

      if (msg) {
        detailMsg.style.display = "block";
        msgValue.textContent = msg;
      } else {
        detailMsg.style.display = "none";
      } // add the actions to buttons


      wa.addEventListener("click", openWhatsApp); // telegram must be shown only if data-telegram is provided

      if (telegramUsername) {
        document.getElementById("m-tg").style.display = "block";
        telegram.addEventListener("click", openTelegram);
      } else {
        document.getElementById("m-tg").style.display = "none";
      }

      skype.addEventListener("click", openSkype);
      call.addEventListener("click", callDefault);
      copyTel.addEventListener("click", function (event) {
        event.preventDefault();
        copy(tel);
      });
    } // show the mailgo


  showMailgo(type); // add listener keyDown

  document.addEventListener("keydown", mailgoKeydown);
  return true;
} // actions


var openGmail = function openGmail(event) {
  event.preventDefault(); // Gmail url

  var gmailUrl = "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" + encodeURIComponent(mail); // the details if provided

  if (cc) {
    gmailUrl = gmailUrl.concat("&cc=" + encodeURIComponent(cc));
  }

  if (bcc) {
    gmailUrl = gmailUrl.concat("&bcc=" + encodeURIComponent(bcc));
  }

  if (subject) {
    gmailUrl = gmailUrl.concat("&subject=" + subject);
  }

  if (bodyMail) {
    gmailUrl = gmailUrl.concat("&body=" + bodyMail);
  } // open the link


  window.open(gmailUrl, "_blank", "noopener, noreferrer"); // hide the modal

  hideMailgo();
};

var openOutlook = function openOutlook(event) {
  event.preventDefault(); // Outlook url

  var outlookUrl = "https://outlook.live.com/owa/?path=/mail/action/compose&to=" + encodeURIComponent(mail); // the details if provided

  if (subject) {
    outlookUrl = outlookUrl.concat("&subject=" + subject);
  }

  if (bodyMail) {
    outlookUrl = outlookUrl.concat("&body=" + bodyMail);
  } // open the link


  window.open(outlookUrl, "_blank", "noopener, noreferrer"); // hide the modal

  hideMailgo();
};

var openYahooMail = function openYahooMail(event) {
  event.preventDefault(); // Yahoo url

  var yahooUrl = "https://compose.mail.yahoo.com/?to=" + encodeURIComponent(mail); // the details if provided

  if (subject) {
    yahooUrl = yahooUrl.concat("&subject=" + subject);
  }

  if (bodyMail) {
    yahooUrl = yahooUrl.concat("&body=" + bodyMail);
  } // open the link


  window.open(yahooUrl, "_blank", "noopener, noreferrer"); // hide the modal

  hideMailgo();
};

var openDefault = function openDefault(event) {
  event.preventDefault();
  mailToEncoded(encEmail);
  hideMailgo();
};

var openTelegram = function openTelegram(event) {
  event.preventDefault(); // check if telegramUsername exists

  if (telegramUsername) {
    // Telegram url
    var tgUrl = "https://t.me/" + telegramUsername; // open the url

    window.open(tgUrl, "_blank", "noopener, noreferrer"); // hide the modal

    hideMailgo();
  }
};

var openSkype = function openSkype(event) {
  event.preventDefault();
  var skype = skypeUsername || tel; // Telegram url

  var skypeUrl = "skype:" + skype; // open the url

  window.open(skypeUrl, "_blank", "noopener, noreferrer"); // hide the modal

  hideMailgo();
};

var openWhatsApp = function openWhatsApp(event) {
  event.preventDefault(); // WhatsApp url

  var waUrl = "https://wa.me/" + tel; // the details if provided

  if (msg) {
    waUrl + "?text=" + msg;
  } // open the url


  window.open(waUrl, "_blank", "noopener, noreferrer"); // hide the modal

  hideMailgo();
};

var callDefault = function callDefault(event) {
  event.preventDefault();
  var callUrl = TEL + tel;
  window.open(callUrl);
  hideMailgo();
};

var copy = function copy(content) {
  copyToClipboard(content);
  var activeCopy; // the correct copyButton (mail or tel)

  if (mailgoIsShowing(MAILGO_MAIL)) {
    activeCopy = copyMail;
  } else {
    activeCopy = copyTel;
  }

  activeCopy.textContent = strings.copied || defaultStrings.copied;
  setTimeout(function () {
    activeCopy.textContent = strings.copy || defaultStrings.copy; // hide after the timeout

    hideMailgo();
  }, 999);
}; // function to find if a link is a mailto, tel, callto or sms


var validateUrl = function validateUrl(url) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAILTO;
  var regexValidate = new RegExp("^" + type, "gi");
  return regexValidate.test(url);
}; // function that returns if an element is a mailgo


function getMailgoTypeByElement(element) {
  var href = element.href; // mailgo type mail

  if ( // first case: it is an <a> element with "mailto:..." or "mailgo:..." in href and no no-mailgo in classList
  href && (validateUrl(href, MAILTO) || validateUrl(href, MAILGO)) && !element.classList.contains(NO_MAILGO) || element.hasAttribute("data-address") && ( // second case: the href=#mailgo
  href && element.getAttribute("href").toLowerCase() === "#mailgo" || // third case: the classList contains mailgo
  element.classList && element.classList.contains("mailgo"))) {
    return MAILGO_MAIL;
  } // mailgo type tel


  if ( // first case: it is an <a> element with "tel:...", "callto:..." or "sms:..." in href and no no-mailgo in classList
  href && (validateUrl(href, TEL) || validateUrl(href, CALLTO) || validateUrl(href, SMS)) && !element.classList.contains(NO_MAILGO) || element.hasAttribute("data-tel") && // second case: the href=#mailgo
  href && element.getAttribute("href").toLowerCase() === "#mailgo" || // third case: the classList contains mailgo
  element.classList && element.classList.contains("mailgo")) {
    return MAILGO_TEL;
  }

  return null;
}
/**
 * mailgoKeydown
 * function to manage the keydown event when the modal is showing, return a boolean that represents if a useful key has been pressed
 */


var mailgoKeydown = function mailgoKeydown(keyboardEvent) {
  // if mailgo is showing
  if (mailgoIsShowing(MAILGO_MAIL)) {
    switch (keyboardEvent.keyCode) {
      case 27:
        // Escape
        hideMailgo();
        return true;

      case 71:
        // g -> open GMail
        openGmail();
        return true;

      case 79:
        // o -> open Outlook
        openOutlook();
        return true;

      case 89:
        // y -> open Yahoo Mail
        openYahooMail();
        return true;

      case 32:
      case 13:
        // spacebar or enter -> open default
        openDefault();
        return true;

      case 67:
        // c -> copy
        copy(mail);
        return true;

      default:
        return false;
    }
  } else if (mailgoIsShowing(MAILGO_TEL)) {
    switch (keyboardEvent.keyCode) {
      case 27:
        // Escape
        hideMailgo();
        return true;

      case 84:
        // t -> open Telegram
        openTelegram();
        return true;

      case 87:
        // w -> open WhatsApp
        openWhatsApp();
        return true;

      case 83:
        // s -> open Skype
        openSkype();
        return true;

      case 32:
      case 13:
        // spacebar or enter -> call default
        callDefault();
        return true;

      case 67:
        // c -> copy
        copy(tel);
        return true;

      default:
        return false;
    }
  }

  return false;
}; // show the modal


var showMailgo = function showMailgo() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;
  // show the correct modal
  setModalDisplay(type, "flex");
}; // hide the modal


var hideMailgo = function hideMailgo() {
  // hide all the modals
  setModalDisplay(MAILGO_MAIL, "none");
  setModalDisplay(MAILGO_TEL, "none"); // remove listener keyDown

  document.removeEventListener("keydown", mailgoKeydown);
}; // is the mailgo modal hidden?


var mailgoIsShowing = function mailgoIsShowing() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;
  return getModalDisplay(type) === "flex";
};

var byElement = function byElement() {
  // by
  var by = createElement(aHTMLTag);
  by.href = "https://mailgo.dev?ref=mailgo-modal";
  by.className = "m-by";
  by.target = "_blank";
  by.rel = "noopener noreferrer";
  by.appendChild(createTextNode("mailgo.dev"));
  return by;
}; // create element


var createElement = function createElement() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  return document.createElement(element);
}; // create text node


var createTextNode = function createTextNode(element) {
  return document.createTextNode(element);
}; // decrypt email


var mailToEncoded = function mailToEncoded(encoded) {
  return window.location.href = MAILTO + atob(encoded);
}; // encode email


var encodeEmail = function encodeEmail(email) {
  return btoa(email);
}; // get the correct HTMLElement from a type


var getModalHTMLElement = function getModalHTMLElement() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;

  if (type === MAILGO_TEL) {
    return modalTel;
  } else {
    return modalMailto;
  }
}; // get display value


var getModalDisplay = function getModalDisplay() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;
  return getModalHTMLElement(ref).style.display;
}; // set display value


var setModalDisplay = function setModalDisplay() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var modal = getModalHTMLElement(ref);
  modal.style.display = value;

  if (value === "flex") {
    // "save" the activated link.
    activatedLink = document.activeElement;
    modal.setAttribute("aria-hidden", "false"); // Focus on the modal container.

    modal.setAttribute("tabindex", "0");
    modal.focus();
    setFocusLoop(modal);
  } else {
    modal.setAttribute("aria-hidden", "true"); // focus back the activated link for getting back to the context.

    modal.setAttribute("tabindex", "-1");
    activatedLink.focus();
  }
}; // enable dark mode


var enableDarkMode = function enableDarkMode() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;
  return getModalHTMLElement(type).classList.add("m-dark");
}; // disable dark mode


var disableDarkMode = function disableDarkMode() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAILGO_MAIL;
  return getModalHTMLElement(type).classList.remove("m-dark");
}; // custom composedPath if path or event.composedPath() are not defined


var composedPath = function composedPath(el) {
  var path = [];

  while (el) {
    path.push(el);

    if (el.tagName === "HTML") {
      path.push(document);
      path.push(window);
      return path;
    }

    el = el.parentElement;
  }
}; // function to check an action is enabled or not


var mailgoActionEnabled = function mailgoActionEnabled(action) {
  var _config8, _config9;

  // by default all the actions are enabled
  if (!config) {
    return true;
  }

  if (config && !((_config8 = config) === null || _config8 === void 0 ? void 0 : _config8.actions)) {
    return true;
  }

  if (config && config.actions && ((_config9 = config) === null || _config9 === void 0 ? void 0 : _config9.actions[action]) === false) {
    return false;
  }

  return true;
}; // manage the language of mailgo


var mailgoSetLanguage = function mailgoSetLanguage() {
  var _config10;

  var languageType = "default lang"; // if a language is defined in configuration use it

  if (((_config10 = config) === null || _config10 === void 0 ? void 0 : _config10.lang) && i18n.languages.indexOf(config.lang) !== -1) {
    lang = config.lang;
    languageType = "config lang";
  } else {
    // else if is defined <html lang=""> use it!
    // keep the lang from html
    var htmlLang = document.documentElement.lang; // find the correct language using the lang attribute, not just a === because there a are cases like fr-FR or fr_FR in html lang attribute

    i18n.languages.forEach(function (language) {
      if (new RegExp("^" + language, "gi").test(htmlLang)) {
        lang = htmlLang;
        languageType = "html lang";
      }
    });
  } // strings


  strings = translations[lang];
  return languageType;
};

var mailgoStyle = function mailgoStyle() {
  if (!document.getElementById("mailgo-style")) {
    // mailgo style
    var mailgoCSSElement = createElement("style");
    mailgoCSSElement.id = "mailgo-style";
    mailgoCSSElement.type = "text/css";
    mailgoCSSElement.appendChild(createTextNode(mailgoCSS));
    document.head.appendChild(mailgoCSSElement);
  }
}; // mailgo


function mailgo(mailgoConfig) {
  try {
    var _window;

    // polyfill mailgo
    // mailgoPolyfill();
    // set the global config merging window mailgConfig and mailgoConfig passed as a parameter
    config = _objectSpread(_objectSpread({}, mailgoConfig), ((_window = window) === null || _window === void 0 ? void 0 : _window.mailgoConfig) || null); // if the window is defined...

    if (window && typeof window !== "undefined") {
      var _config11, _config12, _config13, _config14, _config15;

      // if is set in config use it (load the mailgo CSS)
      if (typeof ((_config11 = config) === null || _config11 === void 0 ? void 0 : _config11.loadCSS) !== "undefined") {
        loadCSSConfig = config.loadCSS;
      } // if is set in config use it (enable mailto)


      if (typeof ((_config12 = config) === null || _config12 === void 0 ? void 0 : _config12.mailto) !== "undefined") {
        mailtoEnabled = config.mailto;
      } // if is set in config use it (enable tel)


      if (typeof ((_config13 = config) === null || _config13 === void 0 ? void 0 : _config13.tel) !== "undefined") {
        telEnabled = config.tel;
      } // if is set in config use it (enable sms)


      if (typeof ((_config14 = config) === null || _config14 === void 0 ? void 0 : _config14.sms) !== "undefined") {
        smsEnabled = config.sms;
      } // if load css enabled load it!


      if (loadCSSConfig) {
        // add the style for mailgo
        mailgoStyle();
      } // if is set an initEvent add the listener


      if ((_config15 = config) === null || _config15 === void 0 ? void 0 : _config15.initEvent) {
        var _config16;

        if ((_config16 = config) === null || _config16 === void 0 ? void 0 : _config16.listenerOptions) {
          // listener options specified
          document.addEventListener(config.initEvent, mailgoInit, config.listenerOptions);
        } else {
          // no listener options
          document.addEventListener(config.initEvent, mailgoInit);
        }
      } else {
        mailgoInit();
      }

      return true;
    }
  } catch (error) {
    console.error("step1" + error);
    return false;
  }

  return false;
} // define the methods also for window element


if (window && typeof window !== "undefined") {
  window.getMailgoTypeByElement = getMailgoTypeByElement;
  window.mailgoCheckRender = mailgoCheckRender;
  window.mailgoPreRender = mailgoPreRender;
  window.mailgoDirectRender = mailgoDirectRender;
  window.mailgoRender = mailgoRender;
  window.mailgo = mailgo;
}


/* harmony default export */ var src_mailgo = (mailgo);
// CONCATENATED MODULE: ./mailgo.dist.ts
// webpack > dist/mailgo.min.js



// call init mailgo attached to the event DOMContentLoaded
const mailgoConfig = {
  initEvent: "DOMContentLoaded",
};

src_mailgo(mailgoConfig);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(358);
/******/ })()
;
//# sourceMappingURL=mailgo.js.map