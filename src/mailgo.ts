import { MailgoConfig } from "../mailgo";

// i18n for mailgo
const i18n = require("../i18n/i18n.json");

// mailgo css
const mailgoCSS = require("./mailgo.scss").toString();

// default lang
const DEFAULT_LANG = "en";

// links
const MAILTO: string = "mailto:";
const TEL: string = "tel:";
const CALLTO: string = "callto:";

// mailgo types
const MAIL_TYPE: string = "mail";
const TEL_TYPE: string = "tel";

// default href for links
const DEFAULT_BTN_HREF: string = "javascript:void(0);";

// html tags
const span: string = "span";

// mailgo variables
let url: URL,
  mail: string = "",
  encEmail: string = "",
  cc: string = "",
  bcc: string = "",
  subject: string = "",
  bodyMail: string = "";

// mailgo tel variables
let tel: string = "",
  msg: string = "",
  telegramUsername: string = "",
  skypeUsername: string = "";

// the DOM elements
let title: HTMLElement,
  titleTel: HTMLElement,
  detailCc: HTMLElement,
  detailBcc: HTMLElement,
  detailSubject: HTMLElement,
  detailBody: HTMLElement,
  ccValue: HTMLElement,
  bccValue: HTMLElement,
  subjectValue: HTMLElement,
  bodyValue: HTMLElement;

// mailgo buttons (actions)
let gmail: HTMLLinkElement,
  outlook: HTMLLinkElement,
  open: HTMLLinkElement,
  telegram: HTMLLinkElement,
  wa: HTMLLinkElement,
  skype: HTMLLinkElement,
  call: HTMLLinkElement,
  copyMail: HTMLLinkElement,
  copyTel: HTMLLinkElement;

/**
 * mailgoInit
 * the function that creates the mailgo elements in DOM
 */
const mailgoInit = (mailgoConfig?: MailgoConfig): void => {
  // default language
  let lang = DEFAULT_LANG;

  // translations
  let translations: any = i18n.translations;

  // if a default language is defined use it
  if (
    mailgoConfig?.defaultLang &&
    i18n.languages.includes(mailgoConfig.defaultLang)
  ) {
    lang = mailgoConfig.defaultLang;
  }

  // if is defined <html lang=""> use it!
  if (!mailgoConfig?.forceLang && document.documentElement.lang) {
    lang = document.documentElement.lang;
  }

  // strings
  let defaultStrings: any = translations[DEFAULT_LANG];
  let strings: any = translations[lang];

  // mailgo mail
  {
    // modal
    let modal = createElement();
    modal.style.display = "none";
    modal.id = "mailgo";
    modal.classList.add("m-modal");

    // background
    let modalBackground = createElement();
    modalBackground.className = "m-modal-back";
    modal.appendChild(modalBackground);

    // modal content
    let modalContent = createElement();
    modalContent.className = "m-modal-content";
    modal.appendChild(modalContent);

    // title (email address)
    title = createElement("strong");
    title.id = "m-title";
    title.className = "m-title";
    modalContent.appendChild(title);

    // details
    let details = createElement();
    details.id = "m-details";
    details.className = "m-details";

    detailCc = createElement("p");
    detailCc.id = "m-cc";
    let ccSpan = createElement(span);
    ccSpan.className = "w-500";
    ccSpan.appendChild(createTextNode(strings.cc || defaultStrings.cc));
    ccValue = createElement(span);
    ccValue.id = "m-cc-value";
    detailCc.appendChild(ccSpan);
    detailCc.appendChild(ccValue);
    details.appendChild(detailCc);

    detailBcc = createElement("p");
    detailBcc.id = "m-bcc";
    let bccSpan = createElement(span);
    bccSpan.className = "w-500";
    bccSpan.appendChild(createTextNode(strings.bcc || defaultStrings.bcc));
    bccValue = createElement(span);
    bccValue.id = "m-bcc-value";
    detailBcc.appendChild(bccSpan);
    detailBcc.appendChild(bccValue);
    details.appendChild(detailBcc);

    detailSubject = createElement("p");
    detailSubject.id = "m-subject";
    let subjectSpan = createElement(span);
    subjectSpan.className = "w-500";
    subjectSpan.appendChild(
      createTextNode(strings.subject || defaultStrings.subject)
    );
    subjectValue = createElement(span);
    subjectValue.id = "m-subject-value";
    detailSubject.appendChild(subjectSpan);
    detailSubject.appendChild(subjectValue);
    details.appendChild(detailSubject);

    detailBody = createElement("p");
    detailBody.id = "m-body";
    let bodySpan = createElement(span);
    bodySpan.className = "w-500";
    bodySpan.appendChild(createTextNode(strings.body || defaultStrings.body));
    bodyValue = createElement(span);
    bodyValue.id = "m-body-value";
    detailBody.appendChild(bodySpan);
    detailBody.appendChild(bodyValue);
    details.appendChild(detailBody);

    modalContent.appendChild(details);

    // Gmail
    gmail = createElement("a") as HTMLLinkElement;
    gmail.id = "m-gmail";
    gmail.href = DEFAULT_BTN_HREF;
    gmail.classList.add("m-open");
    gmail.classList.add("m-gmail");
    gmail.appendChild(
      createTextNode(strings.open_in || defaultStrings.open_in)
    );
    let gmailSpan = createElement(span);
    gmailSpan.className = "w-500";
    gmailSpan.appendChild(
      createTextNode(strings.gmail || defaultStrings.gmail)
    );
    gmail.appendChild(gmailSpan);

    modalContent.appendChild(gmail);

    // Outlook
    outlook = createElement("a") as HTMLLinkElement;
    outlook.id = "m-outlook";
    outlook.href = DEFAULT_BTN_HREF;
    outlook.classList.add("m-open");
    outlook.classList.add("m-outlook");
    outlook.appendChild(
      createTextNode(strings.open_in || defaultStrings.open_in)
    );
    let outlookSpan = createElement(span);
    outlookSpan.className = "w-500";
    outlookSpan.appendChild(
      createTextNode(strings.outlook || defaultStrings.outlook)
    );
    outlook.appendChild(outlookSpan);

    modalContent.appendChild(outlook);

    // open default
    open = createElement("a") as HTMLLinkElement;
    open.id = "m-open";
    open.href = DEFAULT_BTN_HREF;
    open.classList.add("m-open");
    open.classList.add("m-default");
    let openSpan = createElement(span);
    openSpan.className = "w-500";
    openSpan.appendChild(createTextNode(strings.open || defaultStrings.open));
    open.appendChild(openSpan);
    open.appendChild(
      createTextNode(strings._default || defaultStrings._default)
    );

    modalContent.appendChild(open);

    // copy
    copyMail = createElement("a") as HTMLLinkElement;
    copyMail.id = "m-copy";
    copyMail.href = DEFAULT_BTN_HREF;
    copyMail.classList.add("m-copy");
    copyMail.classList.add("w-500");
    copyMail.appendChild(createTextNode(strings.copy || defaultStrings.copy));

    modalContent.appendChild(copyMail);

    modalContent.appendChild(byElement());

    // add the modal at the end of the body
    document.body.appendChild(modal);

    // every click outside the modal will hide the modal
    modalBackground.addEventListener("click", hideMailgo);
  }
  // mailgo tel
  {
    // modal
    let modal = createElement();
    modal.style.display = "none";
    modal.id = "mailgo-tel";
    modal.classList.add("m-modal");

    // background
    let modalBackground = createElement();
    modalBackground.className = "m-modal-back";
    modal.appendChild(modalBackground);

    // modal content
    let modalContent = createElement();
    modalContent.className = "m-modal-content";
    modal.appendChild(modalContent);

    // title (telephone number)
    titleTel = createElement("strong");
    titleTel.id = "m-tel-title";
    titleTel.className = "m-title";
    modalContent.appendChild(titleTel);

    // Telegram
    telegram = createElement("a") as HTMLLinkElement;
    telegram.id = "m-tg";
    telegram.href = DEFAULT_BTN_HREF;
    telegram.classList.add("m-open");
    telegram.classList.add("m-tg");

    // by default not display
    telegram.style.display = "none";

    telegram.appendChild(
      createTextNode(strings.open_in || defaultStrings.open_in)
    );
    let telegramSpan = createElement(span);
    telegramSpan.className = "w-500";
    telegramSpan.appendChild(
      createTextNode(strings.telegram || defaultStrings.telegram)
    );
    telegram.appendChild(telegramSpan);

    modalContent.appendChild(telegram);

    // WhatsApp
    wa = createElement("a") as HTMLLinkElement;
    wa.id = "m-wa";
    wa.href = DEFAULT_BTN_HREF;
    wa.classList.add("m-open");
    wa.classList.add("m-wa");
    wa.appendChild(createTextNode(strings.open_in || defaultStrings.open_in));
    let waSpan = createElement(span);
    waSpan.className = "w-500";
    waSpan.appendChild(
      createTextNode(strings.whatsapp || defaultStrings.whatsapp)
    );
    wa.appendChild(waSpan);

    modalContent.appendChild(wa);

    // Skype
    skype = createElement("a") as HTMLLinkElement;
    skype.id = "m-skype";
    skype.href = DEFAULT_BTN_HREF;
    skype.classList.add("m-open");
    skype.classList.add("m-skype");
    skype.appendChild(
      createTextNode(strings.open_in || defaultStrings.open_in)
    );
    let skypeSpan = createElement(span);
    skypeSpan.className = "w-500";
    skypeSpan.appendChild(
      createTextNode(strings.skype || defaultStrings.skype)
    );
    skype.appendChild(skypeSpan);

    modalContent.appendChild(skype);

    // call default
    call = createElement("a") as HTMLLinkElement;
    call.id = "m-call";
    call.href = DEFAULT_BTN_HREF;
    call.classList.add("m-open");
    call.classList.add("m-default");
    let callSpan = createElement(span);
    callSpan.className = "w-500";
    callSpan.appendChild(createTextNode(strings.call || defaultStrings.call));
    call.appendChild(callSpan);
    call.appendChild(
      createTextNode(strings._as_default || defaultStrings._as_default)
    );

    modalContent.appendChild(call);

    // copy
    copyTel = createElement("a") as HTMLLinkElement;
    copyTel.id = "m-tel-copy";
    copyTel.href = DEFAULT_BTN_HREF;
    copyTel.classList.add("m-copy");
    copyTel.classList.add("w-500");
    copyTel.appendChild(createTextNode(strings.copy || defaultStrings.copy));

    modalContent.appendChild(copyTel);

    modalContent.appendChild(byElement());

    // add the modal at the end of the body
    document.body.appendChild(modal);

    // every click outside the modal will hide the modal
    modalBackground.addEventListener("click", hideMailgo);
  }

  // event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered
  document.addEventListener("click", mailgoCheckRender);
};

/**
 * mailgoRender
 * function to render a mailgo (mail or tel)
 */
const mailgoRender = (type = MAIL_TYPE, mailgo: HTMLLinkElement): void => {
  // mailgo mail
  if (type === MAIL_TYPE) {
    // if the element href=^"mailto:"
    if (mailgo.href && mailgo.href.toLowerCase().startsWith(MAILTO)) {
      mail = decodeURIComponent(
        mailgo.href.split("?")[0].split(MAILTO)[1].trim()
      );

      url = new URL(mailgo.href);
      let urlParams: URLSearchParams = url.searchParams;

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

    // the title of the modal (email address)
    title.innerHTML = mail.split(",").join("<br/>");

    // add the details if provided
    cc
      ? ((detailCc.style.display = "block"),
        (ccValue.innerHTML = cc.split(",").join("<br/>")))
      : (detailCc.style.display = "none");

    bcc
      ? ((detailBcc.style.display = "block"),
        (bccValue.innerHTML = bcc.split(",").join("<br/>")))
      : (detailBcc.style.display = "none");

    subject
      ? ((detailSubject.style.display = "block"),
        (subjectValue.textContent = subject))
      : (detailSubject.style.display = "none");

    bodyMail
      ? ((detailBody.style.display = "block"),
        (bodyValue.textContent = bodyMail))
      : (detailBody.style.display = "none");

    // add the actions
    gmail.addEventListener("click", openGmail);

    outlook.addEventListener("click", openOutlook);

    encEmail = encodeEmail(mail);
    open.addEventListener("click", openDefault);

    copyMail.addEventListener("click", () => copy(mail));
  }
  // mailgo tel
  if (type === TEL_TYPE) {
    if (mailgo.href && mailgo.href.toLowerCase().startsWith(TEL)) {
      tel = decodeURIComponent(mailgo.href.split("?")[0].split(TEL)[1].trim());
    } else if (mailgo.href && mailgo.href.toLowerCase().startsWith(CALLTO)) {
      tel = decodeURIComponent(
        mailgo.href.split("?")[0].split(CALLTO)[1].trim()
      );
    } else if (mailgo.hasAttribute("data-tel")) {
      tel = mailgo.getAttribute("data-tel");
      msg = mailgo.getAttribute("data-msg");
    }

    // information
    // let titleEl = getE("m-tel-title");

    // Telegram username
    if (mailgo.hasAttribute("data-telegram")) {
      telegramUsername = mailgo.getAttribute("data-telegram");
    }

    // Telegram username
    if (mailgo.hasAttribute("data-skype")) {
      skypeUsername = mailgo.getAttribute("data-skype");
    }

    // the title of the modal (tel)
    titleTel.innerHTML = tel;

    // add the actions to buttons
    wa.addEventListener("click", openWhatsApp);

    if (telegramUsername) {
      setDisplay("m-tg", "block");
      telegram.addEventListener("click", openTelegram);
    }

    skype.addEventListener("click", openSkype);

    call.addEventListener("click", callDefault);

    copyTel.addEventListener("click", () => copy(tel));
  }

  // show the mailgo
  showMailgo(type);

  // add listener keyDown
  document.addEventListener("keydown", mailgoKeydown);
};

// actions
const openGmail = (): void => {
  // Gmail url
  let gmailUrl =
    "https://mail.google.com/mail/u/0/?view=cm&source=mailto&to=" +
    encodeURIComponent(mail);

  // the details if provided
  if (cc) gmailUrl = gmailUrl.concat("&cc=" + encodeURIComponent(cc));
  if (bcc) gmailUrl = gmailUrl.concat("&bcc=" + encodeURIComponent(bcc));
  if (subject) gmailUrl = gmailUrl.concat("&subject=" + subject);
  if (bodyMail) gmailUrl = gmailUrl.concat("&body=" + bodyMail);

  // open the link
  window.open(gmailUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const openOutlook = (): void => {
  // Outlook url
  let outlookUrl =
    "https://outlook.live.com/owa/?path=/mail/action/compose&to=" +
    encodeURIComponent(mail);

  // the details if provided
  if (subject) outlookUrl = outlookUrl.concat("&subject=" + subject);
  if (bodyMail) outlookUrl = outlookUrl.concat("&body=" + bodyMail);

  // open the link
  window.open(outlookUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const openDefault = (): void => {
  mailToEncoded(encEmail);
  hideMailgo();
};

const openTelegram = (): void => {
  // Telegram url
  let tgUrl = "https://t.me/" + telegramUsername;

  // open the url
  window.open(tgUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const openSkype = (): void => {
  let skype = skypeUsername !== "" ? skypeUsername : tel;

  // Telegram url
  let skypeUrl = "skype:" + skype;

  // open the url
  window.open(skypeUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const openWhatsApp = (): void => {
  // WhatsApp url
  let waUrl = "https://wa.me/" + tel;

  // the details if provided
  if (msg) waUrl + "?text=" + msg;

  // open the url
  window.open(waUrl, "_blank");

  // hide the modal
  hideMailgo();
};

const callDefault = () => {
  let callUrl = "tel:" + tel;
  window.open(callUrl);
  hideMailgo();
};

const copy = (content: string): void => {
  copyToClipboard(content);
  let activeCopy: HTMLElement;
  // the correct copyButton (mail or tel)
  mailgoIsShowing(MAIL_TYPE) ? (activeCopy = copyMail) : (activeCopy = copyTel);
  activeCopy.textContent = "copied";
  setTimeout(() => {
    activeCopy.textContent = "copy";
    // hide after the timeout
    hideMailgo();
  }, 999);
};

// function that returns if an element is a mailgo
const isMailgo = (element: HTMLElement, type: string = MAIL_TYPE): boolean => {
  let href: string = (element as HTMLLinkElement).href;

  // mailgo type mail
  if (type === MAIL_TYPE) {
    return (
      // first case: it is an <a> element with "mailto:..." in href and no no-mailgo in classList
      (href &&
        href.toLowerCase().startsWith(MAILTO) &&
        !element.classList.contains("no-mailgo")) ||
      (element.hasAttribute("data-address") &&
        // second case: the href=#mailgo
        ((href && element.getAttribute("href").toLowerCase() === "#mailgo") ||
          // third case: the classList contains mailgo
          (element.classList && element.classList.contains("mailgo"))))
    );
  }

  // mailgo type tel
  if (type === TEL_TYPE) {
    return (
      // first case: it is an <a> element with "tel:..." or "callto:..." in href and no no-mailgo in classList
      (href &&
        (href.toLowerCase().startsWith(TEL) ||
          href.toLowerCase().startsWith(CALLTO)) &&
        !element.classList.contains("no-mailgo")) ||
      (element.hasAttribute("data-tel") &&
        // second case: the href=#mailgo
        href &&
        element.getAttribute("href").toLowerCase() === "#mailgo") ||
      // third case: the classList contains mailgo
      (element.classList && element.classList.contains("mailgo"))
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
const mailgoCheckRender = (event: Event): boolean => {
  // check if the id=mailgo exists in the body
  if (
    !document.contains(getE("mailgo")) ||
    !document.contains(getE("mailgo-tel"))
  )
    return;

  // if a mailgo is already showing do nothing
  if (mailgoIsShowing(MAIL_TYPE) || mailgoIsShowing(TEL_TYPE)) return false;

  // the path of the event
  let path =
    (event.composedPath && event.composedPath()) ||
    composedPath(event.target as HTMLElement);

  if (path) {
    path.forEach((element: HTMLElement) => {
      if (element instanceof HTMLDocument || element instanceof Window)
        return false;

      // go in the event.path to find if the user has clicked on a mailgo element
      if (isMailgo(element, MAIL_TYPE)) {
        // stop the normal execution of the element click
        event.preventDefault();

        // render mailgo
        mailgoRender(MAIL_TYPE, element as HTMLLinkElement);

        return true;
      }
      if (isMailgo(element, TEL_TYPE)) {
        // stop the normal execution of the element click
        event.preventDefault();

        // render mailgo
        mailgoRender(TEL_TYPE, element as HTMLLinkElement);

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
const mailgoKeydown = (event: KeyboardEvent): void => {
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
};

// show the modal
const showMailgo = (type = MAIL_TYPE): boolean => {
  // show mailgo type mail
  if (type === MAIL_TYPE) {
    setDisplay("mailgo", "flex");
    return true;
  }
  // show mailgo type tel
  if (type === TEL_TYPE) {
    setDisplay("mailgo-tel", "flex");
    return true;
  }
  return false;
};

// hide the modal
const hideMailgo = (): void => {
  setDisplay("mailgo", "none");
  setDisplay("mailgo-tel", "none");

  // remove listener keyDown
  document.removeEventListener("keydown", mailgoKeydown);
};

// is the mailgo modal hidden?
const mailgoIsShowing = (type = MAIL_TYPE): boolean => {
  return type === MAIL_TYPE
    ? getDisplay("mailgo") === "flex"
    : type === TEL_TYPE
    ? getDisplay("mailgo-tel") === "flex"
    : false;
};

const byElement = (): HTMLLinkElement => {
  // by
  let by: HTMLLinkElement = createElement("a") as HTMLLinkElement;
  by.href = "https://mailgo.js.org?ref=mailgo-modal";
  by.className = "m-by";
  by.target = "_blank";
  by.rel = "noopener noreferrer";
  by.appendChild(createTextNode("mailgo.js.org"));

  return by;
};

// create element
const createElement = (element: string = "div"): HTMLElement =>
  document.createElement(element);

// create text node
const createTextNode = (element: string): Text =>
  document.createTextNode(element);

// decrypt email
const mailToEncoded = (encoded: string): string =>
  (window.location.href = MAILTO + atob(encoded));

// encode email
const encodeEmail = (email: string): string => btoa(email);

// getE shorthand
const getE = (id: string): HTMLElement => document.getElementById(id);

// get display value
const getDisplay = (id: string): string => getE(id).style.display;

// get display value
const setDisplay = (id: string, value: string): string =>
  (getE(id).style.display = value);

// custom composedPath if path or event.composedPath() are not defined
const composedPath = (
  el: HTMLElement
): (HTMLElement | Document | (Window & typeof globalThis))[] => {
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
const validateEmail = (email: string): boolean =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

// validate an array of emails
const validateEmails = (arr: string[]): boolean => arr.every(validateEmail);

// copy of a string
const copyToClipboard = (str: string): boolean => {
  let el: HTMLInputElement = createElement("textarea") as HTMLInputElement;
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
    return true;
  }
  return false;
};

const mailgoStyle = (): void => {
  // mailgo style
  let mailgoCSSElement: HTMLStyleElement = createElement(
    "style"
  ) as HTMLStyleElement;
  mailgoCSSElement.id = "mailgo-style";
  mailgoCSSElement.type = "text/css";
  mailgoCSSElement.appendChild(createTextNode(mailgoCSS));
  document.head.appendChild(mailgoCSSElement);
};

// mailgo
export const mailgo = (mailgoConfig?: MailgoConfig) => {
  // if the window is defined...
  if (window && typeof window !== "undefined") {
    // add the style for mailgo
    mailgoStyle();

    // if is set an initEvent add the listener
    if (mailgoConfig?.initEvent) {
      document.addEventListener(mailgoConfig.initEvent, () => {
        mailgoInit(mailgoConfig);
      });
    } else {
      mailgoInit(mailgoConfig);
    }
  }
};

export default mailgo;
