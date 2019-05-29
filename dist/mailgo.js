"use strict";

var V = "0.6.3";
var MAILTO = "mailto:"; // mailgo style (gulp)

var mailgoCSS = document.createElement("style");
mailgoCSS.id = "mailgo-style";
mailgoCSS.type = "text/css";
var mailgoCSSContent = document.createTextNode(".mailgo-modal p,\n.mailgo-modal span,\n.mailgo-modal strong,\n.mailgo-modal a {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  line-height: 1;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n    Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\n.mailgo-modal strong {\n  font-weight: 700;\n}\n\n.mailgo-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  overflow: hidden;\n  font-size: 15px;\n  z-index: 10000;\n}\n\n.mailgo-title {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.mailgo-details {\n  margin-bottom: 10px;\n}\n\n.mailgo-details p {\n  font-size: 12px;\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\n.mailgo-modal-background {\n  position: absolute;\n  z-index: 10001;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(10, 10, 10, 0.75);\n  opacity: 0.8;\n}\n\n.mailgo-modal-content {\n  position: relative;\n  z-index: 10002;\n  box-sizing: content-box;\n  text-align: center;\n  min-width: 200px;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: 0 2px 6px 0 rgba(10, 10, 10, 0.39);\n  color: #4a4a4a;\n  display: block;\n  overflow: auto;\n  padding: 1.25rem;\n}\n\n.mailgo-modal-content:hover {\n  box-shadow: 0 6px 20px rgba(10, 10, 10, 0.23);\n}\n\n.mailgo-modal-content a {\n  display: block;\n  padding: 10px;\n  color: #4a4a4a;\n  border-radius: 4px;\n  text-decoration: none;\n}\n\n.mailgo-modal-content a.mailgo-gmail {\n  color: #d44638;\n}\n\n.mailgo-modal-content a.mailgo-outlook {\n  color: #0072c6;\n}\n\n.mailgo-modal-content a.mailgo-copy {\n  padding: 16px 10px;\n  font-size: 16px;\n}\n\n.mailgo-modal-content a.mailgo-default:hover,\n.mailgo-modal-content a.mailgo-copy:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n  color: #4a4a4a;\n}\n\n.mailgo-modal-content a.mailgo-outlook:hover {\n  background-color: rgba(0, 114, 198, 0.08);\n  color: #0072c6;\n}\n\n.mailgo-modal-content a.mailgo-gmail:hover {\n  background-color: rgba(212, 70, 56, 0.08);\n  color: #d44638;\n}\n\n.mailgo-modal-content a.mailgo-by {\n  display: block;\n  font-size: 8px;\n  margin-top: 1rem;\n  padding: 0px;\n  color: #4a4a4a;\n  opacity: 0.5;\n}\n\n.mailgo-modal-content a.mailgo-by:hover {\n  opacity: 1;\n}\n\n.mailgo-weight-500 {\n  font-weight: 500;\n}\n");
mailgoCSS.appendChild(mailgoCSSContent);
document.head.appendChild(mailgoCSS);
/**
 * mailgoInit
 * the function that creates the mailgo element in DOM
 */

var mailgoInit = function mailgoInit() {
  // modal
  var modal = document.createElement("div");
  modal.id = "mailgo";
  modal.classList.add("mailgo-modal");
  modal.style.display = "none"; // background

  var modalBackground = document.createElement("div");
  modalBackground.className = "mailgo-modal-background";
  modal.appendChild(modalBackground); // modal content

  var modalContent = document.createElement("div");
  modalContent.className = "mailgo-modal-content";
  modal.appendChild(modalContent); // title (email address)

  var title = document.createElement("strong");
  title.id = "mailgo-title";
  title.className = "mailgo-title";
  modalContent.appendChild(title); // details

  var details = document.createElement("div");
  details.id = "mailgo-details";
  details.className = "mailgo-details";
  var detailCc = document.createElement("p");
  detailCc.id = "mailgo-cc";
  var ccSpan = document.createElement("span");
  ccSpan.className = "mailgo-weight-500";
  var ccContent = document.createTextNode("cc ");
  ccSpan.appendChild(ccContent);
  var ccValue = document.createElement("span");
  ccValue.id = "mailgo-cc-value";
  detailCc.appendChild(ccSpan);
  detailCc.appendChild(ccValue);
  details.appendChild(detailCc);
  var detailBcc = document.createElement("p");
  detailBcc.id = "mailgo-bcc";
  var bccSpan = document.createElement("span");
  bccSpan.className = "mailgo-weight-500";
  var bccContent = document.createTextNode("bcc ");
  bccSpan.appendChild(bccContent);
  var bccValue = document.createElement("span");
  bccValue.id = "mailgo-bcc-value";
  detailBcc.appendChild(bccSpan);
  detailBcc.appendChild(bccValue);
  details.appendChild(detailBcc);
  var detailSubject = document.createElement("p");
  detailSubject.id = "mailgo-subject";
  var subjectSpan = document.createElement("span");
  subjectSpan.className = "mailgo-weight-500";
  var subjectContent = document.createTextNode("subject ");
  subjectSpan.appendChild(subjectContent);
  var subjectValue = document.createElement("span");
  subjectValue.id = "mailgo-subject-value";
  detailSubject.appendChild(subjectSpan);
  detailSubject.appendChild(subjectValue);
  details.appendChild(detailSubject);
  var detailBody = document.createElement("p");
  detailBody.id = "mailgo-body";
  var bodySpan = document.createElement("span");
  bodySpan.className = "mailgo-weight-500";
  var bodyContent = document.createTextNode("body ");
  bodySpan.appendChild(bodyContent);
  var bodyValue = document.createElement("span");
  bodyValue.id = "mailgo-body-value";
  detailBody.appendChild(bodySpan);
  detailBody.appendChild(bodyValue);
  details.appendChild(detailBody);
  modalContent.appendChild(details); // Gmail

  var gmail = document.createElement("a");
  gmail.id = "mailgo-gmail";
  gmail.href = "#mailgo-gmail";
  gmail.classList.add("mailgo-open");
  gmail.classList.add("mailgo-gmail");
  var gmailContent = document.createTextNode("open in ");
  gmail.appendChild(gmailContent);
  var gmailSpan = document.createElement("span");
  gmailSpan.className = "mailgo-weight-500";
  var gmailSpanContent = document.createTextNode("Gmail");
  gmailSpan.appendChild(gmailSpanContent);
  gmail.appendChild(gmailSpan);
  modalContent.appendChild(gmail); // Outlook

  var outlook = document.createElement("a");
  outlook.id = "mailgo-outlook";
  outlook.href = "#mailgo-outlook";
  outlook.classList.add("mailgo-open");
  outlook.classList.add("mailgo-outlook");
  var outlookContent = document.createTextNode("open in ");
  outlook.appendChild(outlookContent);
  var outlookSpan = document.createElement("span");
  outlookSpan.className = "mailgo-weight-500";
  var outlookSpanContent = document.createTextNode("Outlook");
  outlookSpan.appendChild(outlookSpanContent);
  outlook.appendChild(outlookSpan);
  modalContent.appendChild(outlook); // open default

  var open = document.createElement("a");
  open.id = "mailgo-open";
  open.href = "#mailgo-open";
  open.classList.add("mailgo-open");
  open.classList.add("mailgo-default");
  var openSpan = document.createElement("span");
  openSpan.className = "mailgo-weight-500";
  var openSpanContent = document.createTextNode("open");
  openSpan.appendChild(openSpanContent);
  var openContent = document.createTextNode(" default");
  open.appendChild(openSpan);
  open.appendChild(openContent);
  modalContent.appendChild(open); // copy

  var copy = document.createElement("a");
  copy.id = "mailgo-copy";
  copy.href = "#mailgo-copy";
  copy.classList.add("mailgo-copy");
  copy.classList.add("mailgo-weight-500");
  var copyContent = document.createTextNode("copy");
  copy.appendChild(copyContent);
  modalContent.appendChild(copy); // by

  var by = document.createElement("a");
  by.href = "https://mailgo.js.org?ref=mailgo-modal";
  by.className = "mailgo-by";
  by.target = "_blank";
  by.rel = "noopener noreferrer";
  var textBy = document.createTextNode("mailgo.js.org");
  by.appendChild(textBy);
  modalContent.appendChild(by); // add the modal at the end of the body

  document.body.appendChild(modal); // every click outside the modal will hide the modal

  modalBackground.addEventListener("click", hideMailgo);
};
/**
 * mailgoRender
 * function to render a single mailgo
 */


var mailgoRender = function mailgoRender(mailgo) {
  var url = "",
      mail = "",
      cc = "",
      bcc = "",
      subject = "",
      bodyMail = ""; // if the element href=^"mailto:"

  if (mailgo.href && mailgo.href.toLowerCase().startsWith(MAILTO)) {
    mail = decodeURIComponent(mailgo.href.split("?")[0].split(MAILTO)[1].trim());
    url = new URL(mailgo.href);
    var urlParams = new URLSearchParams(url.search); // optional parameters for the email

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
  if (bcc && !validateEmails(bcc.split(","))) bcc = ""; // information

  var titleEl = getE("mailgo-title");
  var detailsEl = getE("mailgo-details");
  var ccEl = getE("mailgo-cc");
  var ccValueEl = getE("mailgo-cc-value");
  var bccEl = getE("mailgo-bcc");
  var bccValueEl = getE("mailgo-bcc-value");
  var subjectEl = getE("mailgo-subject");
  var subjectValueEl = getE("mailgo-subject-value");
  var bodyEl = getE("mailgo-body");
  var bodyValueEl = getE("mailgo-body-value"); // actions

  var gmailButton = getE("mailgo-gmail");
  var outlookButton = getE("mailgo-outlook");
  var openButton = getE("mailgo-open");
  var copyButton = getE("mailgo-copy"); // the title of the modal (email address)

  titleEl.innerHTML = mail.split(",").join("<br/>"); // add the details if provided

  cc ? (ccEl.style.display = "block", ccValueEl.innerHTML = cc.split(",").join("<br/>")) : ccEl.style.display = "none";
  bcc ? (bccEl.style.display = "block", bccValueEl.innerHTML = bcc.split(",").join("<br/>")) : bccEl.style.display = "none";
  subject ? (subjectEl.style.display = "block", subjectValueEl.textContent = subject) : subjectEl.style.display = "none";
  bodyMail ? (bodyEl.style.display = "block", bodyValueEl.textContent = bodyMail) : bodyEl.style.display = "none"; // add the actions

  gmailButton.addEventListener("click", function () {
    return actions.openGmail(mail, cc, bcc, subject, bodyMail);
  });
  outlookButton.addEventListener("click", function () {
    return actions.openOutlook(mail, subject, bodyMail);
  });
  var encEmail = encodeEmail(mail);
  openButton.addEventListener("click", function () {
    return actions.openDefault(encEmail);
  });
  copyButton.addEventListener("click", function () {
    return actions.copy(mail, copyButton);
  }); // show the mailgo

  showMailgo(); // listener keyDown

  document.addEventListener("keydown", function () {
    return mailgoKeydown(mail, cc, bcc, subject, bodyMail, encEmail, copyButton);
  });
}; // actions


var actions = {
  openGmail: function openGmail(mail, cc, bcc, subject, bodyMail) {
    var gmailUrl = "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" + encodeURIComponent(mail);
    if (cc) gmailUrl = gmailUrl.concat("&cc=" + encodeURIComponent(cc));
    if (bcc) gmailUrl = gmailUrl.concat("&bcc=" + encodeURIComponent(bcc));
    if (subject) gmailUrl = gmailUrl.concat("&subject=" + subject);
    if (bodyMail) gmailUrl = gmailUrl.concat("&body=" + bodyMail);
    window.open(gmailUrl, "_blank");
  },
  openOutlook: function openOutlook(mail, subject, bodyMail) {
    var outlookUrl = "https://outlook.live.com/owa/?path=/mail/action/compose&to=" + encodeURIComponent(mail);
    if (subject) outlookUrl = outlookUrl.concat("&subject=" + subject);
    if (bodyMail) outlookUrl = outlookUrl.concat("&body=" + bodyMail);
    window.open(outlookUrl, "_blank");
  },
  openDefault: function openDefault(encEmail) {
    mailToEncoded(encEmail);
  },
  copy: function copy(mail, copyButton) {
    copyToClipboard(mail);
    copyButton.textContent = "copied";
    setTimeout(function () {
      return copyButton.textContent = "copy";
    }, 999);
  }
}; // function that returns if an element is a mailgo

var isMailgo = function isMailgo(element) {
  return (// first case: it is an <a> element with "mailto:..." in href and no no-mailgo in classList
    element.href && element.href.toLowerCase().startsWith(MAILTO) && !element.classList.contains("no-mailgo") || // second case: the href=#mailgo
    element.href && element.getAttribute("href").toLowerCase() === "#mailgo" || // third case: the classList contains mailgo
    element.classList && element.classList.contains("mailgo")
  );
};
/**
 * mailgoCheckRender
 * function to check if an element is mailgo-enabled or not referencing to the old
 * document.querySelectorAll(
 *   'a[href^="mailto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 */


var mailgoCheckRender = function mailgoCheckRender(event) {
  // check if the id=mailgo exists in the body
  if (!document.contains(getE("mailgo"))) return; // the path of the event

  var path = event.path || event.composedPath && event.composedPath() || composedPath(event.target);

  if (path) {
    path.forEach(function (element) {
      // go in the event.path to find if the user has clicked on a mailgo element
      if (isMailgo(element)) {
        // stop the normal execution of the element click
        event.preventDefault(); // render mailgo

        mailgoRender(element);
        return;
      }
    });
  }

  return;
};
/**
 * mailgoKeydown
 * function to manage the keydown event when the modal is showing
 */


var mailgoKeydown = function mailgoKeydown(mail, cc, bcc, subject, bodyMail, encEmail, copyButton) {
  // if mailgo is not showing do nothing
  if (!mailgoIsShowing()) return;

  switch (event.keyCode) {
    case 27:
      // Escape
      hideMailgo();
      break;

    case 71:
      // g -> open GMail
      actions.openGmail(mail, cc, bcc, subject, bodyMail);
      break;

    case 79:
      // o -> open Outlook
      actions.openOutlook(mail, subject, bodyMail);
      break;

    case 32:
    case 13:
      // spacebar or enter -> open default
      actions.openDefault(encEmail);
      break;

    case 67:
      // c -> copy
      actions.copy(mail, copyButton);
      break;

    default:
      return;
  }

  return;
}; // DOMContentLoaded -> mailgoInit (creates the modal)


document.addEventListener("DOMContentLoaded", mailgoInit); // event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered

document.addEventListener("click", mailgoCheckRender); // validate a single email with regex

var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}; // validate an array of emails


var validateEmails = function validateEmails(arr) {
  return arr.every(validateEmail);
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
  }
}; // show the modal


var showMailgo = function showMailgo() {
  return getE("mailgo").style.display = "flex";
}; // hide the modal


var hideMailgo = function hideMailgo() {
  return getE("mailgo").style.display = "none";
}; // is the modal hidden?


var mailgoIsShowing = function mailgoIsShowing() {
  return getE("mailgo").style.display === "flex";
}; // decrypt email


var mailToEncoded = function mailToEncoded(encoded) {
  return window.location.href = MAILTO + atob(encoded);
}; // encode email


var encodeEmail = function encodeEmail(email) {
  return btoa(email);
}; // getE shorthand


var getE = function getE(id) {
  return document.getElementById(id);
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
};