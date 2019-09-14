// @flow
const V = "MAILGO_VERSION";
const MAILTO = "mailto:";
const TEL = "tel:";
const CALLTO = "callto:";

// mailgo style (gulp)
const mailgoCSS = document.createElement("style");
mailgoCSS.id = "mailgo-style";
mailgoCSS.type = "text/css";
const mailgoCSSContent = document.createTextNode(`MAILGO_STYLE`);
mailgoCSS.appendChild(mailgoCSSContent);
document.head.appendChild(mailgoCSS);

/**
 * mailgoInit
 * the function that creates the mailgo element in DOM
 */
const mailgoInit = () => {
  // modal
  let modal = document.createElement("div");
  modal.style.display = "none";
  modal.id = "mailgo";
  modal.classList.add("mailgo-modal");

  // background
  let modalBackground = document.createElement("div");
  modalBackground.className = "mailgo-modal-background";
  modal.appendChild(modalBackground);

  // modal content
  let modalContent = document.createElement("div");
  modalContent.className = "mailgo-modal-content";
  modal.appendChild(modalContent);

  // title (email address)
  let title = document.createElement("strong");
  title.id = "mailgo-title";
  title.className = "mailgo-title";
  modalContent.appendChild(title);

  // details
  let details = document.createElement("div");
  details.id = "mailgo-details";
  details.className = "mailgo-details";

  let detailCc = document.createElement("p");
  detailCc.id = "mailgo-cc";
  let ccSpan = document.createElement("span");
  ccSpan.className = "mailgo-weight-500";
  let ccContent = document.createTextNode("cc ");
  ccSpan.appendChild(ccContent);
  let ccValue = document.createElement("span");
  ccValue.id = "mailgo-cc-value";
  detailCc.appendChild(ccSpan);
  detailCc.appendChild(ccValue);
  details.appendChild(detailCc);

  let detailBcc = document.createElement("p");
  detailBcc.id = "mailgo-bcc";
  let bccSpan = document.createElement("span");
  bccSpan.className = "mailgo-weight-500";
  let bccContent = document.createTextNode("bcc ");
  bccSpan.appendChild(bccContent);
  let bccValue = document.createElement("span");
  bccValue.id = "mailgo-bcc-value";
  detailBcc.appendChild(bccSpan);
  detailBcc.appendChild(bccValue);
  details.appendChild(detailBcc);

  let detailSubject = document.createElement("p");
  detailSubject.id = "mailgo-subject";
  let subjectSpan = document.createElement("span");
  subjectSpan.className = "mailgo-weight-500";
  let subjectContent = document.createTextNode("subject ");
  subjectSpan.appendChild(subjectContent);
  let subjectValue = document.createElement("span");
  subjectValue.id = "mailgo-subject-value";
  detailSubject.appendChild(subjectSpan);
  detailSubject.appendChild(subjectValue);
  details.appendChild(detailSubject);

  let detailBody = document.createElement("p");
  detailBody.id = "mailgo-body";
  let bodySpan = document.createElement("span");
  bodySpan.className = "mailgo-weight-500";
  let bodyContent = document.createTextNode("body ");
  bodySpan.appendChild(bodyContent);
  let bodyValue = document.createElement("span");
  bodyValue.id = "mailgo-body-value";
  detailBody.appendChild(bodySpan);
  detailBody.appendChild(bodyValue);
  details.appendChild(detailBody);

  modalContent.appendChild(details);

  // Gmail
  let gmail = document.createElement("a");
  gmail.id = "mailgo-gmail";
  gmail.href = "#mailgo-gmail";
  gmail.classList.add("mailgo-open");
  gmail.classList.add("mailgo-gmail");
  let gmailContent = document.createTextNode("open in ");
  gmail.appendChild(gmailContent);
  let gmailSpan = document.createElement("span");
  gmailSpan.className = "mailgo-weight-500";
  let gmailSpanContent = document.createTextNode("Gmail");
  gmailSpan.appendChild(gmailSpanContent);
  gmail.appendChild(gmailSpan);

  modalContent.appendChild(gmail);

  // Outlook
  let outlook = document.createElement("a");
  outlook.id = "mailgo-outlook";
  outlook.href = "#mailgo-outlook";
  outlook.classList.add("mailgo-open");
  outlook.classList.add("mailgo-outlook");
  let outlookContent = document.createTextNode("open in ");
  outlook.appendChild(outlookContent);
  let outlookSpan = document.createElement("span");
  outlookSpan.className = "mailgo-weight-500";
  let outlookSpanContent = document.createTextNode("Outlook");
  outlookSpan.appendChild(outlookSpanContent);
  outlook.appendChild(outlookSpan);

  modalContent.appendChild(outlook);

  // open default
  let open = document.createElement("a");
  open.id = "mailgo-open";
  open.href = "#mailgo-open";
  open.classList.add("mailgo-open");
  open.classList.add("mailgo-default");
  let openSpan = document.createElement("span");
  openSpan.className = "mailgo-weight-500";
  let openSpanContent = document.createTextNode("open");
  openSpan.appendChild(openSpanContent);
  let openContent = document.createTextNode(" default");
  open.appendChild(openSpan);
  open.appendChild(openContent);

  modalContent.appendChild(open);

  // copy
  let copy = document.createElement("a");
  copy.id = "mailgo-copy";
  copy.href = "#mailgo-copy";
  copy.classList.add("mailgo-copy");
  copy.classList.add("mailgo-weight-500");
  let copyContent = document.createTextNode("copy");
  copy.appendChild(copyContent);

  modalContent.appendChild(copy);

  // by
  let by = document.createElement("a");
  by.href = "https://mailgo.js.org?ref=mailgo-modal";
  by.className = "mailgo-by";
  by.target = "_blank";
  by.rel = "noopener noreferrer";
  let textBy = document.createTextNode("mailgo.js.org");
  by.appendChild(textBy);

  modalContent.appendChild(by);

  // add the modal at the end of the body
  document.body.appendChild(modal);

  // every click outside the modal will hide the modal
  modalBackground.addEventListener("click", hideMailgo);
};

/**
 * mailgoTelInit
 * the function that creates the mailgo (for tel:) element in DOM
 */
const mailgoTelInit = () => {
  // modal
  let modal = document.createElement("div");
  modal.style.display = "none";
  modal.id = "mailgo-tel";
  modal.classList.add("mailgo-modal");

  // background
  let modalBackground = document.createElement("div");
  modalBackground.className = "mailgo-modal-background";
  modal.appendChild(modalBackground);

  // modal content
  let modalContent = document.createElement("div");
  modalContent.className = "mailgo-modal-content";
  modal.appendChild(modalContent);

  // title (email address)
  let title = document.createElement("strong");
  title.id = "mailgo-tel-title";
  title.className = "mailgo-title";
  modalContent.appendChild(title);

  // Telegram
  let telegram = document.createElement("a");
  telegram.id = "mailgo-telegram";
  telegram.href = "#mailgo-telegram";
  telegram.classList.add("mailgo-open");
  telegram.classList.add("mailgo-telegram");
  let telegramContent = document.createTextNode("open in ");
  telegram.appendChild(telegramContent);
  let telegramSpan = document.createElement("span");
  telegramSpan.className = "mailgo-weight-500";
  let telegramSpanContent = document.createTextNode("Telegram");
  telegramSpan.appendChild(telegramSpanContent);
  telegram.appendChild(telegramSpan);

  modalContent.appendChild(telegram);

  // WhatsApp
  let wa = document.createElement("a");
  wa.id = "mailgo-wa";
  wa.href = "#mailgo-wa";
  wa.classList.add("mailgo-open");
  wa.classList.add("mailgo-wa");
  let waContent = document.createTextNode("open in ");
  wa.appendChild(waContent);
  let waSpan = document.createElement("span");
  waSpan.className = "mailgo-weight-500";
  let waSpanContent = document.createTextNode("WhatsApp");
  waSpan.appendChild(waSpanContent);
  wa.appendChild(waSpan);

  modalContent.appendChild(wa);

  // call default
  let call = document.createElement("a");
  call.id = "mailgo-call";
  call.href = "#mailgo-call";
  call.classList.add("mailgo-open");
  call.classList.add("mailgo-default");
  let callSpan = document.createElement("span");
  callSpan.className = "mailgo-weight-500";
  let callSpanContent = document.createTextNode("call");
  callSpan.appendChild(callSpanContent);
  let callContent = document.createTextNode(" as default");
  call.appendChild(callSpan);
  call.appendChild(callContent);

  modalContent.appendChild(call);

  // copy
  let copy = document.createElement("a");
  copy.id = "mailgo-tel-copy";
  copy.href = "#mailgo-copy";
  copy.classList.add("mailgo-copy");
  copy.classList.add("mailgo-weight-500");
  let copyContent = document.createTextNode("copy");
  copy.appendChild(copyContent);

  modalContent.appendChild(copy);

  // by
  let by = document.createElement("a");
  by.href = "https://mailgo.js.org?ref=mailgo-modal";
  by.className = "mailgo-by";
  by.target = "_blank";
  by.rel = "noopener noreferrer";
  let textBy = document.createTextNode("mailgo.js.org");
  by.appendChild(textBy);

  modalContent.appendChild(by);

  // add the modal at the end of the body
  document.body.appendChild(modal);

  // every click outside the modal will hide the modal
  modalBackground.addEventListener("click", hideMailgo);
};

/**
 * mailgoRender
 * function to render a single mailgo
 */
const mailgoRender = mailgo => {
  let url = "",
    mail = "",
    cc = "",
    bcc = "",
    subject = "",
    bodyMail = "";

  // if the element href=^"mailto:"
  if (mailgo.href && mailgo.href.toLowerCase().startsWith(MAILTO)) {
    mail = decodeURIComponent(
      mailgo.href
        .split("?")[0]
        .split(MAILTO)[1]
        .trim()
    );

    url = new URL(mailgo.href);
    let urlParams = new URLSearchParams(url.search);

    // optional parameters for the email
    cc = urlParams.get("cc");
    bcc = urlParams.get("bcc");
    subject = urlParams.get("subject");
    bodyMail = urlParams.get("body");
  } else {
    // if the element href="#mailgo" or class="mailgo"
    // mail = data-address + @ + data-domain
    mail =
      mailgo.getAttribute("data-address") +
      "@" +
      mailgo.getAttribute("data-domain");

    url = new URL(MAILTO + encodeURIComponent(mail));

    // cc = data-cc-address + @ + data-cc-domain
    cc =
      mailgo.getAttribute("data-cc-address") +
      "@" +
      mailgo.getAttribute("data-cc-domain");

    // bcc = data-bcc-address + @ + data-bcc-domain
    bcc =
      mailgo.getAttribute("data-bcc-address") +
      "@" +
      mailgo.getAttribute("data-bcc-domain");

    // subject = data-subject
    subject = mailgo.getAttribute("data-subject");

    // body = data-body
    bodyMail = mailgo.getAttribute("data-body");
  }

  // validate the email address
  if (!validateEmails(mail.split(","))) return;

  // if cc, bcc is not valid cc, bcc = ""
  if (cc && !validateEmails(cc.split(","))) cc = "";
  if (bcc && !validateEmails(bcc.split(","))) bcc = "";

  // information
  let titleEl = getE("mailgo-title");
  let detailsEl = getE("mailgo-details");
  let ccEl = getE("mailgo-cc");
  let ccValueEl = getE("mailgo-cc-value");
  let bccEl = getE("mailgo-bcc");
  let bccValueEl = getE("mailgo-bcc-value");
  let subjectEl = getE("mailgo-subject");
  let subjectValueEl = getE("mailgo-subject-value");
  let bodyEl = getE("mailgo-body");
  let bodyValueEl = getE("mailgo-body-value");

  // actions
  let gmailButton = getE("mailgo-gmail");
  let outlookButton = getE("mailgo-outlook");
  let openButton = getE("mailgo-open");
  let copyButton = getE("mailgo-copy");

  // the title of the modal (email address)
  titleEl.innerHTML = mail.split(",").join("<br/>");

  // add the details if provided
  cc
    ? ((ccEl.style.display = "block"),
      (ccValueEl.innerHTML = cc.split(",").join("<br/>")))
    : (ccEl.style.display = "none");

  bcc
    ? ((bccEl.style.display = "block"),
      (bccValueEl.innerHTML = bcc.split(",").join("<br/>")))
    : (bccEl.style.display = "none");

  subject
    ? ((subjectEl.style.display = "block"),
      (subjectValueEl.textContent = subject))
    : (subjectEl.style.display = "none");

  bodyMail
    ? ((bodyEl.style.display = "block"), (bodyValueEl.textContent = bodyMail))
    : (bodyEl.style.display = "none");

  // add the actions
  gmailButton.addEventListener("click", () =>
    actions.openGmail(mail, cc, bcc, subject, bodyMail)
  );

  outlookButton.addEventListener("click", () =>
    actions.openOutlook(mail, subject, bodyMail)
  );

  let encEmail = encodeEmail(mail);
  openButton.addEventListener("click", () => actions.openDefault(encEmail));

  copyButton.addEventListener("click", () => actions.copy(mail, copyButton));

  // show the mailgo
  showMailgo();

  // listener keyDown
  document.addEventListener("keydown", () =>
    mailgoKeydown(mail, cc, bcc, subject, bodyMail, encEmail, copyButton)
  );
};

/**
 * mailgoTelRender
 * function to render a single tel mailgo
 */
const mailgoTelRender = mailgo => {
  let tel = "";

  if (mailgo.href && mailgo.href.toLowerCase().startsWith(TEL)) {
    tel = decodeURIComponent(
      mailgo.href
        .split("?")[0]
        .split(TEL)[1]
        .trim()
    );
  }

  if (mailgo.href && mailgo.href.toLowerCase().startsWith(CALLTO)) {
    tel = decodeURIComponent(
      mailgo.href
        .split("?")[0]
        .split(CALLTO)[1]
        .trim()
    );
  }

  console.log(tel);

  // information
  let titleEl = getE("mailgo-tel-title");

  // actions
  let waButton = getE("mailgo-wa");
  let telegramButton = getE("mailgo-telegram");
  let callButton = getE("mailgo-call");
  let copyButton = getE("mailgo-tel-copy");

  // the title of the modal (tel)
  titleEl.innerHTML = tel;

  // add the actions
  waButton.addEventListener("click", () => actions.openWhatsApp(tel));

  telegramButton.addEventListener("click", () => actions.openTelegram(tel));

  callButton.addEventListener("click", () => actions.callDefault(tel));

  copyButton.addEventListener("click", () => actions.copy(tel, copyButton));

  // show the mailgo
  showMailgoTel();

  // listener keyDown
  /*
  document.addEventListener("keydown", () =>
    mailgoKeydown(mail, cc, bcc, subject, bodyMail, encEmail, copyButton)
  );
  */
};

// actions
const actions = {
  openGmail: (mail, cc, bcc, subject, bodyMail) => {
    let gmailUrl =
      "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" +
      encodeURIComponent(mail);

    if (cc) gmailUrl = gmailUrl.concat("&cc=" + encodeURIComponent(cc));
    if (bcc) gmailUrl = gmailUrl.concat("&bcc=" + encodeURIComponent(bcc));
    if (subject) gmailUrl = gmailUrl.concat("&subject=" + subject);
    if (bodyMail) gmailUrl = gmailUrl.concat("&body=" + bodyMail);

    window.open(gmailUrl, "_blank");
  },

  openOutlook: (mail, subject, bodyMail) => {
    let outlookUrl =
      "https://outlook.live.com/owa/?path=/mail/action/compose&to=" +
      encodeURIComponent(mail);
    if (subject) outlookUrl = outlookUrl.concat("&subject=" + subject);
    if (bodyMail) outlookUrl = outlookUrl.concat("&body=" + bodyMail);

    window.open(outlookUrl, "_blank");
  },

  openDefault: encEmail => {
    mailToEncoded(encEmail);
  },

  openTelegram: (tel, msg = "") => {
    let tgUrl = "tg://msg?text=" + msg + "&to=" + tel;
    window.open(tgUrl, "_blank");
  },

  openWhatsApp: (tel, msg = "") => {
    let waUrl = "https://wa.me/" + tel;
    window.open(waUrl, "_blank");
  },

  callDefault: tel => {
    let callUrl = "tel:" + tel;
    window.open(callUrl);
  },

  copy: (mail, copyButton) => {
    copyToClipboard(mail);
    copyButton.textContent = "copied";
    setTimeout(() => (copyButton.textContent = "copy"), 999);
  }
};

// function that returns if an element is a mailgo
const isMailgo = element =>
  // first case: it is an <a> element with "mailto:..." in href and no no-mailgo in classList
  (element.href &&
    element.href.toLowerCase().startsWith(MAILTO) &&
    !element.classList.contains("no-mailgo")) ||
  // second case: the href=#mailgo
  (element.href && element.getAttribute("href").toLowerCase() === "#mailgo") ||
  // third case: the classList contains mailgo
  (element.classList && element.classList.contains("mailgo"));

// function that returns if an element is a mailgo-tel
const isMailgoTel = element =>
  // first case: it is an <a> element with "mailto:..." in href and no no-mailgo in classList
  element.href &&
  (element.href.toLowerCase().startsWith(TEL) ||
    element.href.toLowerCase().startsWith(CALLTO)) &&
  !element.classList.contains("no-mailgo");

/**
 * mailgoCheckRender
 * function to check if an element is mailgo-enabled or not referencing to the old
 * document.querySelectorAll(
 *   'a[href^="mailto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 */
const mailgoCheckRender = event => {
  // check if the id=mailgo exists in the body
  if (!document.contains(getE("mailgo"))) return;

  // the path of the event
  let path =
    event.path ||
    (event.composedPath && event.composedPath()) ||
    composedPath(event.target);

  if (path) {
    path.forEach(element => {
      // go in the event.path to find if the user has clicked on a mailgo element
      if (isMailgo(element)) {
        // stop the normal execution of the element click
        event.preventDefault();

        // render mailgo
        mailgoRender(element);

        return;
      }
      if (isMailgoTel(element)) {
        // stop the normal execution of the element click
        event.preventDefault();

        // render mailgo
        mailgoTelRender(element);

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
const mailgoKeydown = (
  mail,
  cc,
  bcc,
  subject,
  bodyMail,
  encEmail,
  copyButton
) => {
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
};

// DOMContentLoaded -> mailgoInit and mailgoTelInit (creates the modals)
document.addEventListener("DOMContentLoaded", mailgoInit);
document.addEventListener("DOMContentLoaded", mailgoTelInit);

// event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered
document.addEventListener("click", mailgoCheckRender);

// validate a single email with regex
const validateEmail = email => {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// show the modal
const showMailgo = () => (getE("mailgo").style.display = "flex");

// show the tel modal
const showMailgoTel = () => (getE("mailgo-tel").style.display = "flex");

// hide the modal
const hideMailgo = () => (
  (getE("mailgo").style.display = "none"),
  (getE("mailgo-tel").style.display = "none")
);

// is the modal hidden?
const mailgoIsShowing = () => getE("mailgo").style.display === "flex";

// decrypt email
const mailToEncoded = encoded =>
  (window.location.href = MAILTO + atob(encoded));

// encode email
const encodeEmail = email => btoa(email);

// getE shorthand
const getE = id => document.getElementById(id);

// custom composedPath if path or event.composedPath() are not defined
const composedPath = el => {
  let path = [];

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

// validate an array of emails
const validateEmails = arr => arr.every(validateEmail);

// TODO
// clean a telephone number (removes +, - ...)
const cleanTel = tel => tel;

// copy of a string
const copyToClipboard = str => {
  let el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  let selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
