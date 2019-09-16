// @flow
const V = "MAILGO_VERSION";

// mailgo style (gulp)
const mailgoCSS = document.createElement("style");
mailgoCSS.id = "mailgo-style";
mailgoCSS.type = "text/css";
const mailgoCSSContent = document.createTextNode(`MAILGO_STYLE`);
mailgoCSS.appendChild(mailgoCSSContent);
document.head.appendChild(mailgoCSS);

// links
const MAILTO = "mailto:";
const TEL = "tel:";
const CALLTO = "callto:";

// mailgo types
const MAIL_TYPE = "mail";
const TEL_TYPE = "tel";

// mailgo variables
let url = "",
  mail = "",
  encEmail = "",
  cc = "",
  bcc = "",
  subject = "",
  bodyMail = "";

// mailgo tel variables
let tel = "",
  msg = "";

// mailgo buttons
let gmailButton,
  outlookButton,
  openButton,
  waButton,
  telegramButton,
  callButton,
  copyButton;

/**
 * mailgoInit
 * the function that creates the mailgo elements in DOM
 */
const mailgoInit = () => {
  // mailgo mail
  {
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
  }
  // mailgo tel
  {
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
  }
};

/**
 * mailgoRender
 * function to render a single mailgo
 */
const mailgoRender = (type = MAIL_TYPE, mailgo) => {
  // mailgo mail
  if (type === MAIL_TYPE) {
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
    gmailButton = getE("mailgo-gmail");
    outlookButton = getE("mailgo-outlook");
    openButton = getE("mailgo-open");
    copyButton = getE("mailgo-copy");

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
    gmailButton.addEventListener("click", () => actions.openGmail());

    outlookButton.addEventListener("click", () => actions.openOutlook());

    encEmail = encodeEmail(mail);
    openButton.addEventListener("click", () => actions.openDefault());

    copyButton.addEventListener("click", () => actions.copy());
  }
  // mailgo tel
  if (type === TEL_TYPE) {
    if (mailgo.href && mailgo.href.toLowerCase().startsWith(TEL)) {
      tel = decodeURIComponent(
        mailgo.href
          .split("?")[0]
          .split(TEL)[1]
          .trim()
      );
    } else if (mailgo.href && mailgo.href.toLowerCase().startsWith(CALLTO)) {
      tel = decodeURIComponent(
        mailgo.href
          .split("?")[0]
          .split(CALLTO)[1]
          .trim()
      );
    } else if (mailgo.hasAttribute("data-tel")) {
      tel = mailgo.getAttribute("data-tel");
      msg = mailgo.getAttribute("data-msg");
    }

    // information
    let titleEl = getE("mailgo-tel-title");

    // actions
    waButton = getE("mailgo-wa");
    telegramButton = getE("mailgo-telegram");
    callButton = getE("mailgo-call");
    copyButton = getE("mailgo-tel-copy");

    // the title of the modal (tel)
    titleEl.innerHTML = tel;

    // add the actions
    waButton.addEventListener("click", () => actions.openWhatsApp());

    telegramButton.addEventListener("click", () => actions.openTelegram());

    callButton.addEventListener("click", () => actions.callDefault());

    copyButton.addEventListener("click", () => actions.copy(tel));
  }

  // show the mailgo
  showMailgo(type);

  // add listener keyDown
  document.addEventListener("keydown", mailgoKeydown);
};

// actions
const actions = {
  openGmail: () => {
    let gmailUrl =
      "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" +
      encodeURIComponent(mail);

    if (cc) gmailUrl = gmailUrl.concat("&cc=" + encodeURIComponent(cc));
    if (bcc) gmailUrl = gmailUrl.concat("&bcc=" + encodeURIComponent(bcc));
    if (subject) gmailUrl = gmailUrl.concat("&subject=" + subject);
    if (bodyMail) gmailUrl = gmailUrl.concat("&body=" + bodyMail);

    window.open(gmailUrl, "_blank");

    hideMailgo();
  },

  openOutlook: () => {
    let outlookUrl =
      "https://outlook.live.com/owa/?path=/mail/action/compose&to=" +
      encodeURIComponent(mail);
    if (subject) outlookUrl = outlookUrl.concat("&subject=" + subject);
    if (bodyMail) outlookUrl = outlookUrl.concat("&body=" + bodyMail);

    window.open(outlookUrl, "_blank");
    hideMailgo();
  },

  openDefault: () => {
    mailToEncoded(encEmail);
    hideMailgo();
  },

  openTelegram: () => {
    let tgUrl = "tg://msg?text=" + msg + "&to=" + tel;
    window.open(tgUrl, "_blank");
    hideMailgo();
  },

  openWhatsApp: () => {
    let waUrl = "https://wa.me/" + tel;
    window.open(waUrl, "_blank");
    hideMailgo();
  },

  callDefault: () => {
    let callUrl = "tel:" + tel;
    window.open(callUrl);
    hideMailgo();
  },

  copy: content => {
    copyToClipboard(content);
    mailgoIsShowing(MAIL_TYPE)
      ? (copyButton = getE("mailgo-copy"))
      : (copyButton = getE("mailgo-tel-copy"));
    copyButton.textContent = "copied";
    setTimeout(() => {
      copyButton.textContent = "copy";
      hideMailgo();
    }, 999);
  }
};

// function that returns if an element is a mailgo
const isMailgo = element =>
  // first case: it is an <a> element with "mailto:..." in href and no no-mailgo in classList
  (element.href &&
    element.href.toLowerCase().startsWith(MAILTO) &&
    !element.classList.contains("no-mailgo")) ||
  (element.hasAttribute("data-address") &&
    // second case: the href=#mailgo
    ((element.href &&
      element.getAttribute("href").toLowerCase() === "#mailgo") ||
      // third case: the classList contains mailgo
      (element.classList && element.classList.contains("mailgo"))));

// function that returns if an element is a mailgo-tel
const isMailgoTel = element =>
  // first case: it is an <a> element with "tel:..." or "callto:..." in href and no no-mailgo in classList
  (element.href &&
    (element.href.toLowerCase().startsWith(TEL) ||
      element.href.toLowerCase().startsWith(CALLTO)) &&
    !element.classList.contains("no-mailgo")) ||
  ((element.hasAttribute("data-tel") &&
    // second case: the href=#mailgo
    (element.href &&
      element.getAttribute("href").toLowerCase() === "#mailgo")) ||
    // third case: the classList contains mailgo
    (element.classList && element.classList.contains("mailgo")));

/**
 * mailgoCheckRender
 * function to check if an element is mailgo-enabled or not referencing to the old
 * document.querySelectorAll(
 *   'a[href^="mailto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 * document.querySelectorAll(
 *   'a[href^="tel:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
 * );
 */
const mailgoCheckRender = event => {
  // check if the id=mailgo exists in the body
  if (
    !document.contains(getE("mailgo")) ||
    !document.contains(getE("mailgo-tel"))
  )
    return;

  // if a mailgo is already showing do nothing
  if (mailgoIsShowing(MAIL_TYPE) || mailgoIsShowing(TEL_TYPE)) return;

  // the path of the event
  let path =
    event.path ||
    (event.composedPath && event.composedPath()) ||
    composedPath(event.target);

  if (path) {
    path.forEach(element => {
      if (element instanceof HTMLDocument || element instanceof Window) return;

      // go in the event.path to find if the user has clicked on a mailgo element
      if (isMailgo(element)) {
        // stop the normal execution of the element click
        event.preventDefault();

        // render mailgo
        mailgoRender(MAIL_TYPE, element);

        return;
      }
      if (isMailgoTel(element)) {
        // stop the normal execution of the element click
        event.preventDefault();

        // render mailgo
        mailgoRender(TEL_TYPE, element);

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
const mailgoKeydown = event => {
  // if mailgo is showing
  if (mailgoIsShowing(MAIL_TYPE)) {
    switch (event.keyCode) {
      case 27:
        // Escape
        hideMailgo();
        break;
      case 71:
        // g -> open GMail
        actions.openGmail();
        break;
      case 79:
        // o -> open Outlook
        actions.openOutlook();
        break;
      case 32:
      case 13:
        // spacebar or enter -> open default
        actions.openDefault();
        break;
      case 67:
        // c -> copy
        actions.copy(mail);
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
        actions.openTelegram();
        break;
      case 87:
        // w -> open WhatsApp
        actions.openWhatsApp();
        break;
      case 32:
      case 13:
        // spacebar or enter -> open default
        actions.openDefault();
        break;
      case 67:
        // c -> copy
        actions.copy(tel);
        break;
      default:
        return;
    }
  }
  return;
};

// DOMContentLoaded -> mailgoInit (creates the modals)
document.addEventListener("DOMContentLoaded", mailgoInit);

// event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered
document.addEventListener("click", mailgoCheckRender);

// show the modal
const showMailgo = (type = MAIL_TYPE) => {
  type === TEL_TYPE
    ? setDisplay("mailgo-tel", "flex")
    : setDisplay("mailgo", "flex");
};

// hide the modal
const hideMailgo = () => {
  setDisplay("mailgo", "none");
  setDisplay("mailgo-tel", "none");

  // remove listener keyDown
  document.removeEventListener("keydown", mailgoKeydown);
};

// is the mailgo modal hidden?
const mailgoIsShowing = (type = MAIL_TYPE) => {
  if (type === MAIL_TYPE) {
    return getDisplay("mailgo") === "flex";
  } else if (type === TEL_TYPE) {
    return getDisplay("mailgo-tel") === "flex";
  }
  return false;
};

// decrypt email
const mailToEncoded = encoded =>
  (window.location.href = MAILTO + atob(encoded));

// encode email
const encodeEmail = email => btoa(email);

// getE shorthand
const getE = id => document.getElementById(id);

// get display value
const getDisplay = id => getE(id).style.display;

// get display value
const setDisplay = (id, value) => (getE(id).style.display = value);

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

// validate a single email with regex
const validateEmail = email => {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
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
