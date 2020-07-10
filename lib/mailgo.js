(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mailgo"] = factory();
	else
		root["mailgo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("{\"languages\":[\"en\",\"it\"],\"translations\":{\"en\":{\"open_in\":\"open in \",\"cc_\":\"cc \",\"bcc_\":\"bcc \",\"subject_\":\"subject \",\"body_\":\"body \",\"gmail\":\"Gmail\",\"outlook\":\"Outlook\",\"telegram\":\"Telegram\",\"whatsapp\":\"WhatsApp\",\"skype\":\"Skype\",\"call\":\"call\",\"open\":\"open\",\"_default\":\" default\",\"_as_default\":\" as default\",\"copy\":\"copy\"},\"it\":{\"open_in\":\"apri con \",\"cc_\":\"cc \",\"bcc_\":\"ccn \",\"subject_\":\"oggetto \",\"body_\":\"testo \",\"gmail\":\"Gmail\",\"outlook\":\"Outlook\",\"telegram\":\"Telegram\",\"whatsapp\":\"WhatsApp\",\"skype\":\"Skype\",\"call\":\"chiama\",\"open\":\"apri\",\"_default\":\" \",\"_as_default\":\" \",\"copy\":\"copia\"}}}");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(2);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".m-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:15px;z-index:10000}.m-modal p,.m-modal span,.m-modal strong,.m-modal a{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";text-rendering:optimizeLegibility}.m-modal strong{font-weight:700}.m-modal .m-modal-back{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:#20232a;opacity:0.8}.m-modal .m-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:0.95;border-radius:20px;box-shadow:0 3px 20px rgba(32,35,42,0.5);color:#4a4a4a;display:flex;flex-direction:column;overflow:auto;padding:24px;transition:0.5s box-shadow}.m-modal .m-modal-content:hover{opacity:1}.m-modal .m-modal-content .m-title{margin-bottom:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1.2em}.m-modal .m-modal-content .m-details{margin-bottom:10px}.m-modal .m-modal-content .m-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.m-modal .m-modal-content a{padding:10px;color:#4a4a4a;border-radius:20px;text-decoration:none}.m-modal .m-modal-content a.m-gmail{color:#d44638}.m-modal .m-modal-content a.m-gmail:hover{background-color:rgba(212,70,56,0.08);color:#d44638}.m-modal .m-modal-content a.m-outlook{color:#0072c6}.m-modal .m-modal-content a.m-outlook:hover{background-color:rgba(0,114,198,0.08);color:#0072c6}.m-modal .m-modal-content a.m-tg{color:#08c}.m-modal .m-modal-content a.m-tg:hover{background-color:rgba(0,136,204,0.08);color:#08c}.m-modal .m-modal-content a.m-wa{color:#00bfa5}.m-modal .m-modal-content a.m-wa:hover{background-color:rgba(0,191,165,0.08);color:#00bfa5}.m-modal .m-modal-content a.m-skype{color:#00aff0}.m-modal .m-modal-content a.m-skype:hover{background-color:rgba(0,175,240,0.08);color:#00aff0}.m-modal .m-modal-content a.m-copy{padding:16px 10px;font-size:16px}.m-modal .m-modal-content a.m-default:hover,.m-modal .m-modal-content a.m-copy:hover{background-color:rgba(0,0,0,0.08);color:#4a4a4a}.m-modal .m-modal-content a.m-by{font-size:9px;margin-top:0.8rem;padding:5px;color:#4a4a4a;opacity:0.55}.m-modal .m-modal-content a.m-by:hover{opacity:1}.m-modal .m-modal-content .w-500{font-weight:500}.m-modal.m-dark .m-modal-content{color:#fff;background-color:#20232a}.m-modal.m-dark .m-modal-content a{color:#bbb}.m-modal.m-dark .m-modal-content a:hover{color:#fff}.m-modal.m-dark .m-modal-content a.m-gmail:hover{color:#faeceb}.m-modal.m-dark .m-modal-content a.m-outlook:hover{color:#e5f0f9}.m-modal.m-dark .m-modal-content a.m-tg:hover{color:#e5f3f9}.m-modal.m-dark .m-modal-content a.m-wa:hover{color:#e5f8f6}.m-modal.m-dark .m-modal-content a.m-skype:hover{color:#e5f7fd}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../i18n/i18n.json
var i18n = __webpack_require__(0);
var i18n_namespaceObject = /*#__PURE__*/__webpack_require__.t(i18n, 2);

// CONCATENATED MODULE: ../src/mailgo.ts
// i18n for mailgo
 // mailgo scss

var mailgoCSS = __webpack_require__(1).toString(); // default lang


var DEFAULT_LANG = "en"; // links

var MAILTO = "mailto:";
var TEL = "tel:";
var CALLTO = "callto:"; // mailgo types

var MAIL_TYPE = "mail";
var TEL_TYPE = "tel"; // default href for links

var DEFAULT_BTN_HREF = "javascript:void(0);"; // useful html tags

var spanHTMLTag = "span";
var aHTMLTag = "a";
var pHTMLTag = "p"; // global mailgo config object

var config; // default language

var lang = DEFAULT_LANG; // mailgo variables

var url,
    mail = "",
    encEmail = "",
    cc = "",
    bcc = "",
    subject = "",
    bodyMail = ""; // mailgo tel variables

var tel = "",
    msg = "",
    telegramUsername = "",
    skypeUsername = ""; // the DOM elements

var title, titleTel, detailCc, detailBcc, detailSubject, detailBody, ccValue, bccValue, subjectValue, bodyValue; // mailgo buttons (actions)

var gmail, outlook, mailgo_open, telegram, wa, skype, call, copyMail, copyTel;
/**
 * mailgoInit
 * the function that creates the mailgo elements in DOM
 */

var mailgo_mailgoInit = function mailgoInit(mailgoConfig) {
  var _config, _config2;

  // set the global config
  config = mailgoConfig; // translations

  var _ref = i18n_namespaceObject,
      translations = _ref.translations; // if a default language is defined use it

  if (((_config = config) === null || _config === void 0 ? void 0 : _config.lang) && i18n["languages"].includes(config.lang)) {
    lang = config.lang;
  } // if is defined <html lang=""> use it!


  if (!((_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.forceLang)) {
    // keep the lang from html
    var htmlLang = document.documentElement.lang; // if there are translations...

    if (i18n["languages"].includes(htmlLang)) {
      lang = document.documentElement.lang;
    }
  } // strings


  var defaultStrings = translations[DEFAULT_LANG];
  var strings = translations[lang]; // mailgo mail

  {
    var _config3;

    // modal
    var modal = createElement();
    modal.style.display = "none";
    modal.id = "mailgo";
    modal.classList.add("m-modal"); // if dark is in config

    if ((_config3 = config) === null || _config3 === void 0 ? void 0 : _config3.dark) {
      modal.classList.add("m-dark");
    } // background


    var modalBackground = createElement();
    modalBackground.className = "m-modal-back";
    modal.appendChild(modalBackground); // modal content

    var modalContent = createElement();
    modalContent.className = "m-modal-content";
    modal.appendChild(modalContent); // title (email address)

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
    gmail.href = DEFAULT_BTN_HREF;
    gmail.classList.add("m-open");
    gmail.classList.add("m-gmail");
    gmail.appendChild(createTextNode(strings.open_in || defaultStrings.open_in));
    var gmailSpan = createElement(spanHTMLTag);
    gmailSpan.className = "w-500";
    gmailSpan.appendChild(createTextNode(strings.gmail || defaultStrings.gmail));
    gmail.appendChild(gmailSpan);
    modalContent.appendChild(gmail); // Outlook

    outlook = createElement(aHTMLTag);
    outlook.id = "m-outlook";
    outlook.href = DEFAULT_BTN_HREF;
    outlook.classList.add("m-open");
    outlook.classList.add("m-outlook");
    outlook.appendChild(createTextNode(strings.open_in || defaultStrings.open_in));
    var outlookSpan = createElement(spanHTMLTag);
    outlookSpan.className = "w-500";
    outlookSpan.appendChild(createTextNode(strings.outlook || defaultStrings.outlook));
    outlook.appendChild(outlookSpan);
    modalContent.appendChild(outlook); // open default

    mailgo_open = createElement(aHTMLTag);
    mailgo_open.id = "m-open";
    mailgo_open.href = DEFAULT_BTN_HREF;
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
    copyMail.href = DEFAULT_BTN_HREF;
    copyMail.classList.add("m-copy");
    copyMail.classList.add("w-500");
    copyMail.appendChild(createTextNode(strings.copy || defaultStrings.copy));
    modalContent.appendChild(copyMail);
    modalContent.appendChild(byElement()); // add the modal at the end of the body

    document.body.appendChild(modal); // every click outside the modal will hide the modal

    modalBackground.addEventListener("click", hideMailgo);
  } // mailgo tel

  {
    var _config4;

    // modal
    var _modal = createElement();

    _modal.style.display = "none";
    _modal.id = "mailgo-tel";

    _modal.classList.add("m-modal"); // if dark is in config


    if ((_config4 = config) === null || _config4 === void 0 ? void 0 : _config4.dark) {
      _modal.classList.add("m-dark");
    } // background


    var _modalBackground = createElement();

    _modalBackground.className = "m-modal-back";

    _modal.appendChild(_modalBackground); // modal content


    var _modalContent = createElement();

    _modalContent.className = "m-modal-content";

    _modal.appendChild(_modalContent); // title (telephone number)


    titleTel = createElement("strong");
    titleTel.id = "m-tel-title";
    titleTel.className = "m-title";

    _modalContent.appendChild(titleTel); // Telegram


    telegram = createElement(aHTMLTag);
    telegram.id = "m-tg";
    telegram.href = DEFAULT_BTN_HREF;
    telegram.classList.add("m-open");
    telegram.classList.add("m-tg"); // by default not display

    telegram.style.display = "none";
    telegram.appendChild(createTextNode(strings.open_in || defaultStrings.open_in));
    var telegramSpan = createElement(spanHTMLTag);
    telegramSpan.className = "w-500";
    telegramSpan.appendChild(createTextNode(strings.telegram || defaultStrings.telegram));
    telegram.appendChild(telegramSpan);

    _modalContent.appendChild(telegram); // WhatsApp


    wa = createElement(aHTMLTag);
    wa.id = "m-wa";
    wa.href = DEFAULT_BTN_HREF;
    wa.classList.add("m-open");
    wa.classList.add("m-wa");
    wa.appendChild(createTextNode(strings.open_in || defaultStrings.open_in));
    var waSpan = createElement(spanHTMLTag);
    waSpan.className = "w-500";
    waSpan.appendChild(createTextNode(strings.whatsapp || defaultStrings.whatsapp));
    wa.appendChild(waSpan);

    _modalContent.appendChild(wa); // Skype


    skype = createElement(aHTMLTag);
    skype.id = "m-skype";
    skype.href = DEFAULT_BTN_HREF;
    skype.classList.add("m-open");
    skype.classList.add("m-skype");
    skype.appendChild(createTextNode(strings.open_in || defaultStrings.open_in));
    var skypeSpan = createElement(spanHTMLTag);
    skypeSpan.className = "w-500";
    skypeSpan.appendChild(createTextNode(strings.skype || defaultStrings.skype));
    skype.appendChild(skypeSpan);

    _modalContent.appendChild(skype); // call default


    call = createElement(aHTMLTag);
    call.id = "m-call";
    call.href = DEFAULT_BTN_HREF;
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
    copyTel.href = DEFAULT_BTN_HREF;
    copyTel.classList.add("m-copy");
    copyTel.classList.add("w-500");
    copyTel.appendChild(createTextNode(strings.copy || defaultStrings.copy));

    _modalContent.appendChild(copyTel);

    _modalContent.appendChild(byElement()); // add the modal at the end of the body


    document.body.appendChild(_modal); // every click outside the modal will hide the modal

    _modalBackground.addEventListener("click", hideMailgo);
  } // event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered

  document.addEventListener("click", mailgoCheckRender);
};
/**
 * mailgoRender
 * function to render a mailgo (mail or tel)
 */


var mailgoRender = function mailgoRender() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAIL_TYPE;
  var mailgo = arguments.length > 1 ? arguments[1] : undefined;

  // mailgo mail
  if (type === MAIL_TYPE) {
    // if the element href=^"mailto:"
    if (mailgo.href && mailgo.href.toLowerCase().startsWith(MAILTO)) {
      mail = decodeURIComponent(mailgo.href.split("?")[0].split(MAILTO)[1].trim());
      url = new URL(mailgo.href);
      var urlParams = url.searchParams; // optional parameters for the email

      cc = urlParams.get("cc");
      bcc = urlParams.get("bcc");
      subject = urlParams.get("subject");
      bodyMail = urlParams.get("body");
    } else {
      // if the element href="#mailgo" or class="mailgo"
      // mail = data-address + @ + data-domain
      mail = mailgo.getAttribute("data-address") + "@" + mailgo.getAttribute("data-domain");
      url = new URL(MAILTO + encodeURIComponent(mail)); // cc = data-cc-address + @ + data-cc-domain

      cc = mailgo.getAttribute("data-cc-address") + "@" + mailgo.getAttribute("data-cc-domain"); // bcc = data-bcc-address + @ + data-bcc-domain

      bcc = mailgo.getAttribute("data-bcc-address") + "@" + mailgo.getAttribute("data-bcc-domain"); // subject = data-subject

      subject = mailgo.getAttribute("data-subject"); // body = data-body

      bodyMail = mailgo.getAttribute("data-body");
    } // validate the email address


    if (!validateEmails(mail.split(","))) return; // if cc, bcc is not valid cc, bcc = ""

    if (cc && !validateEmails(cc.split(","))) cc = "";
    if (bcc && !validateEmails(bcc.split(","))) bcc = ""; // the title of the modal (email address)

    title.innerHTML = mail.split(",").join("<br/>"); // add the details if provided

    cc ? (detailCc.style.display = "block", ccValue.innerHTML = cc.split(",").join("<br/>")) : detailCc.style.display = "none";
    bcc ? (detailBcc.style.display = "block", bccValue.innerHTML = bcc.split(",").join("<br/>")) : detailBcc.style.display = "none";
    subject ? (detailSubject.style.display = "block", subjectValue.textContent = subject) : detailSubject.style.display = "none";
    bodyMail ? (detailBody.style.display = "block", bodyValue.textContent = bodyMail) : detailBody.style.display = "none"; // add the actions

    gmail.addEventListener("click", openGmail);
    outlook.addEventListener("click", openOutlook);
    encEmail = encodeEmail(mail);
    mailgo_open.addEventListener("click", openDefault);
    copyMail.addEventListener("click", function () {
      return copy(mail);
    });
  } // mailgo tel


  if (type === TEL_TYPE) {
    if (mailgo.href && mailgo.href.toLowerCase().startsWith(TEL)) {
      tel = decodeURIComponent(mailgo.href.split("?")[0].split(TEL)[1].trim());
    } else if (mailgo.href && mailgo.href.toLowerCase().startsWith(CALLTO)) {
      tel = decodeURIComponent(mailgo.href.split("?")[0].split(CALLTO)[1].trim());
    } else if (mailgo.hasAttribute("data-tel")) {
      tel = mailgo.getAttribute("data-tel");
      msg = mailgo.getAttribute("data-msg");
    } // validate the phone number


    if (!validateTel(tel)) return; // information
    // let titleEl = getE("m-tel-title");
    // Telegram username

    if (mailgo.hasAttribute("data-telegram")) {
      telegramUsername = mailgo.getAttribute("data-telegram");
    } // Telegram username


    if (mailgo.hasAttribute("data-skype")) {
      skypeUsername = mailgo.getAttribute("data-skype");
    } // the title of the modal (tel)


    titleTel.innerHTML = tel; // add the actions to buttons

    wa.addEventListener("click", openWhatsApp);

    if (telegramUsername) {
      setDisplay("m-tg", "block");
      telegram.addEventListener("click", openTelegram);
    }

    skype.addEventListener("click", openSkype);
    call.addEventListener("click", callDefault);
    copyTel.addEventListener("click", function () {
      return copy(tel);
    });
  } // show the mailgo


  showMailgo(type); // add listener keyDown

  document.addEventListener("keydown", mailgoKeydown);
}; // actions


var openGmail = function openGmail() {
  // Gmail url
  var gmailUrl = "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" + encodeURIComponent(mail); // the details if provided

  if (cc) gmailUrl = gmailUrl.concat("&cc=" + encodeURIComponent(cc));
  if (bcc) gmailUrl = gmailUrl.concat("&bcc=" + encodeURIComponent(bcc));
  if (subject) gmailUrl = gmailUrl.concat("&subject=" + subject);
  if (bodyMail) gmailUrl = gmailUrl.concat("&body=" + bodyMail); // open the link

  window.open(gmailUrl, "_blank"); // hide the modal

  hideMailgo();
};

var openOutlook = function openOutlook() {
  // Outlook url
  var outlookUrl = "https://outlook.live.com/owa/?path=/mail/action/compose&to=" + encodeURIComponent(mail); // the details if provided

  if (subject) outlookUrl = outlookUrl.concat("&subject=" + subject);
  if (bodyMail) outlookUrl = outlookUrl.concat("&body=" + bodyMail); // open the link

  window.open(outlookUrl, "_blank"); // hide the modal

  hideMailgo();
};

var openDefault = function openDefault() {
  mailToEncoded(encEmail);
  hideMailgo();
};

var openTelegram = function openTelegram() {
  // Telegram url
  var tgUrl = "https://t.me/" + telegramUsername; // open the url

  window.open(tgUrl, "_blank"); // hide the modal

  hideMailgo();
};

var openSkype = function openSkype() {
  var skype = skypeUsername !== "" ? skypeUsername : tel; // Telegram url

  var skypeUrl = "skype:" + skype; // open the url

  window.open(skypeUrl, "_blank"); // hide the modal

  hideMailgo();
};

var openWhatsApp = function openWhatsApp() {
  // WhatsApp url
  var waUrl = "https://wa.me/" + tel; // the details if provided

  if (msg) waUrl + "?text=" + msg; // open the url

  window.open(waUrl, "_blank"); // hide the modal

  hideMailgo();
};

var callDefault = function callDefault() {
  var callUrl = "tel:" + tel;
  window.open(callUrl);
  hideMailgo();
};

var copy = function copy(content) {
  copyToClipboard(content);
  var activeCopy; // the correct copyButton (mail or tel)

  mailgoIsShowing(MAIL_TYPE) ? activeCopy = copyMail : activeCopy = copyTel;
  activeCopy.textContent = "copied";
  setTimeout(function () {
    activeCopy.textContent = "copy"; // hide after the timeout

    hideMailgo();
  }, 999);
}; // function that returns if an element is a mailgo


var isMailgo = function isMailgo(element) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAIL_TYPE;
  var href = element.href; // mailgo type mail

  if (type === MAIL_TYPE) {
    return (// first case: it is an <a> element with "mailto:..." in href and no no-mailgo in classList
      href && href.toLowerCase().startsWith(MAILTO) && !element.classList.contains("no-mailgo") || element.hasAttribute("data-address") && ( // second case: the href=#mailgo
      href && element.getAttribute("href").toLowerCase() === "#mailgo" || // third case: the classList contains mailgo
      element.classList && element.classList.contains("mailgo"))
    );
  } // mailgo type tel


  if (type === TEL_TYPE) {
    return (// first case: it is an <a> element with "tel:..." or "callto:..." in href and no no-mailgo in classList
      href && (href.toLowerCase().startsWith(TEL) || href.toLowerCase().startsWith(CALLTO)) && !element.classList.contains("no-mailgo") || element.hasAttribute("data-tel") && // second case: the href=#mailgo
      href && element.getAttribute("href").toLowerCase() === "#mailgo" || // third case: the classList contains mailgo
      element.classList && element.classList.contains("mailgo")
    );
  }

  return false;
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
 */


var mailgoCheckRender = function mailgoCheckRender(event) {
  // check if the id=mailgo exists in the body
  if (!document.contains(getE("mailgo")) || !document.contains(getE("mailgo-tel"))) return false; // if a mailgo is already showing do nothing

  if (mailgoIsShowing(MAIL_TYPE) || mailgoIsShowing(TEL_TYPE)) return false; // the path of the event

  var path = event.composedPath && event.composedPath() || composedPath(event.target);

  if (path) {
    path.forEach(function (element) {
      if (element instanceof HTMLDocument || element instanceof Window) return false; // go in the event.path to find if the user has clicked on a mailgo element

      if (isMailgo(element, MAIL_TYPE)) {
        // stop the normal execution of the element click
        event.preventDefault(); // render mailgo

        mailgoRender(MAIL_TYPE, element);
        return true;
      }

      if (isMailgo(element, TEL_TYPE)) {
        // stop the normal execution of the element click
        event.preventDefault(); // render mailgo

        mailgoRender(TEL_TYPE, element);
        return true;
      }
    });
  }

  return false;
};
/**
 * mailgoKeydown
 * function to manage the keydown event when the modal is showing
 */


var mailgoKeydown = function mailgoKeydown(event) {
  // if mailgo is showing
  if (mailgoIsShowing(MAIL_TYPE)) {
    switch (event.keyCode) {
      case 27:
        // Escape
        hideMailgo();
        break;

      case 71:
        // g -> open GMail
        openGmail();
        break;

      case 79:
        // o -> open Outlook
        openOutlook();
        break;

      case 32:
      case 13:
        // spacebar or enter -> open default
        openDefault();
        break;

      case 67:
        // c -> copy
        copy(mail);
        break;

      default:
        return;
    }
  } else if (mailgoIsShowing(TEL_TYPE)) {
    switch (event.keyCode) {
      case 27:
        // Escape
        hideMailgo();
        break;

      case 84:
        // t -> open Telegram
        openTelegram();
        break;

      case 87:
        // w -> open WhatsApp
        openWhatsApp();
        break;

      case 32:
      case 13:
        // spacebar or enter -> call default
        callDefault();
        break;

      case 67:
        // c -> copy
        copy(tel);
        break;

      default:
        return;
    }
  }

  return;
}; // show the modal


var showMailgo = function showMailgo() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAIL_TYPE;

  // show mailgo type mail
  if (type === MAIL_TYPE) {
    setDisplay("mailgo", "flex");
    return true;
  } // show mailgo type tel


  if (type === TEL_TYPE) {
    setDisplay("mailgo-tel", "flex");
    return true;
  }

  return false;
}; // hide the modal


var hideMailgo = function hideMailgo() {
  setDisplay("mailgo", "none");
  setDisplay("mailgo-tel", "none"); // remove listener keyDown

  document.removeEventListener("keydown", mailgoKeydown);
}; // is the mailgo modal hidden?


var mailgoIsShowing = function mailgoIsShowing() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MAIL_TYPE;
  return type === MAIL_TYPE ? getDisplay("mailgo") === "flex" : type === TEL_TYPE ? getDisplay("mailgo-tel") === "flex" : false;
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
}; // getE shorthand


var getE = function getE(id) {
  return document.getElementById(id);
}; // get display value


var getDisplay = function getDisplay(id) {
  return getE(id).style.display;
}; // get display value


var setDisplay = function setDisplay(id, value) {
  return getE(id).style.display = value;
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
}; // validate a single email with regex


var validateEmail = function validateEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}; // validate an array of emails


var validateEmails = function validateEmails(arr) {
  return arr.every(validateEmail);
}; // validate a single tel with regex


var validateTel = function validateTel(tel) {
  // TODO: find a good regex for telephone numbers
  return true;
}; // copy of a string


var copyToClipboard = function copyToClipboard(str) {
  var el = createElement("textarea");
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
};

var mailgoStyle = function mailgoStyle() {
  // mailgo style
  var mailgoCSSElement = createElement("style");
  mailgoCSSElement.id = "mailgo-style";
  mailgoCSSElement.type = "text/css";
  mailgoCSSElement.appendChild(createTextNode(mailgoCSS));
  document.head.appendChild(mailgoCSSElement);
}; // mailgo


function mailgo(config) {
  // if the window is defined...
  if (window && typeof window !== "undefined") {
    // add the style for mailgo
    mailgoStyle(); // if is set an initEvent add the listener

    if (config === null || config === void 0 ? void 0 : config.initEvent) {
      document.addEventListener(config.initEvent, function () {
        mailgo_mailgoInit(config);
      });
    } else {
      mailgo_mailgoInit(config);
    }
  }
}

/* harmony default export */ var src_mailgo = (mailgo);
// CONCATENATED MODULE: ./mailgo.lib.ts
// webpack > lib/mailgo.js



/* harmony default export */ var mailgo_lib = __webpack_exports__["default"] = (src_mailgo);


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=mailgo.js.map