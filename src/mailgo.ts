import {
  MailgoConfig,
  MailgoTranslations,
  MailgoTranslation,
  MailgoAction,
  MailgoLanguages,
  MailgoType,
  MailgoDetail,
  MailgoInstallationType,
  MailgoModalType,
} from "mailgo";

// polyfill
// import { mailgoPolyfill } from "./polyfill";

// constants
import {
  MAILTO,
  MAILGO,
  TEL,
  CALLTO,
  SMS,
  MAILGO_MAIL,
  MAILGO_TEL,
  MAILGO_SMS,
  CLASSIC,
  LESS_SPAM,
  NO_MAILGO,
  MOBILE,
  spanHTMLTag,
  aHTMLTag,
  pHTMLTag,
  defaultLang,
  notNumber,
  leadingZeros,
} from "./constants";

// utils
import {
  validateEmails,
  validateTel,
  copyToClipboard,
  setFocusLoop,
} from "./utils";

// i18n for mailgo
import languages from "../i18n/languages.json";
import translations from "../i18n/translations.json";

// mobile detect
import { userAgent } from "./mobile-detect";

// mailgo scss, with toString (https://github.com/webpack-contrib/css-loader#tostring)
const mailgoCSS: string = require("./mailgo.scss").toString();

// default language
let lang: string = defaultLang;

// default strings
const defaultStrings: MailgoTranslation = (translations as MailgoTranslations)[
  defaultLang
];

// translation strings
let strings: MailgoTranslation;

// global mailgo config object
let config: MailgoConfig;

// config to check if the client is mobile or desktop
let isMobile: boolean = false;

// default config attributes
let mailtoEnabled: boolean = true;
let telEnabled: boolean = true;
let smsEnabled: boolean = false;
let desktopEnabled: boolean = true;
let mobileEnabled: boolean = true;
let validateEmailConfig: boolean = true;
let validateTelConfig: boolean = true;
let showFooterConfig: boolean = true;
let loadCSSConfig: boolean = true;

// activeMailgoType
let activeMailgoType: MailgoType;

// modals global object
let modalMailto: HTMLElement, modalTel: HTMLElement;

// mailgo general variables
let url: URL, href: string, lessSpamHref: string;

// mailgo mail variables
let mail: string, cc: string, bcc: string, subject: string, bodyMail: string;

// mailgo tel variables
let tel: string, msg: string, telegramUsername: string, skypeUsername: string;

// the DOM elements
let title: HTMLElement,
  titleTel: HTMLElement,
  detailCc: HTMLElement,
  detailBcc: HTMLElement,
  detailSubject: HTMLElement,
  detailBody: HTMLElement,
  detailMsg: HTMLElement,
  ccValue: HTMLElement,
  bccValue: HTMLElement,
  subjectValue: HTMLElement,
  bodyValue: HTMLElement,
  msgValue: HTMLElement,
  activatedLink: HTMLElement;

// mailgo buttons (actions)
let gmail: HTMLLinkElement,
  outlook: HTMLLinkElement,
  yahoo: HTMLLinkElement,
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
const mailgoInit = (): void => {
  // set the boolean for mobile/desktop
  isMobile = userAgent() === MOBILE;

  // responsive settings
  {
    if (typeof config?.desktop !== "undefined") {
      desktopEnabled = config.desktop;
      // if it is a desktop and desktop is not enabled no init mailgo
      if (!isMobile && !desktopEnabled) {
        return;
      }
    }
    if (typeof config?.mobile !== "undefined") {
      mobileEnabled = config.mobile;
      // if it is a mobile and mobile is not enabled no init mailgo
      if (isMobile && !mobileEnabled) {
        return;
      }
    }
  }

  // set the mailgo language
  mailgoSetLanguage();

  // mailgo, if mailgo not already exists
  let mailgoExists = !!document.getElementById(MAILGO_MAIL);

  // if mailgo is enabled for mailto and it not exists in DOM
  if (mailtoEnabled && !mailgoExists) {
    // modal
    modalMailto = createElement() as HTMLElement;
    modalMailto.style.display = "none";
    modalMailto.id = MAILGO_MAIL;
    modalMailto.classList.add("m-modal");
    modalMailto.setAttribute("role", "dialog");
    modalMailto.setAttribute("tabindex", "-1");
    modalMailto.setAttribute("aria-labelledby", "m-title");

    // if dark is in config
    if (config?.dark) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }

    // background
    let modalBackground: HTMLElement = createElement();
    modalBackground.className = "m-modal-back";
    modalMailto.appendChild(modalBackground);

    // modal content
    let modalContent: HTMLElement = createElement();
    modalContent.className = "m-modal-content";
    modalMailto.appendChild(modalContent);

    // title (email address)
    title = createElement("strong");
    title.id = "m-title";
    title.className = "m-title";
    modalContent.appendChild(title);

    // details
    let details: HTMLElement = createElement();
    details.id = "m-details";
    details.className = "m-details";

    detailCc = createElement(pHTMLTag);
    detailCc.id = "m-cc";
    let ccSpan: HTMLElement = createElement(spanHTMLTag);
    ccSpan.className = "w-500";
    ccSpan.appendChild(createTextNode(strings.cc_ || defaultStrings.cc_));
    ccValue = createElement(spanHTMLTag);
    ccValue.id = "m-cc-value";
    detailCc.appendChild(ccSpan);
    detailCc.appendChild(ccValue);
    details.appendChild(detailCc);

    detailBcc = createElement(pHTMLTag);
    detailBcc.id = "m-bcc";
    let bccSpan: HTMLElement = createElement(spanHTMLTag);
    bccSpan.className = "w-500";
    bccSpan.appendChild(createTextNode(strings.bcc_ || defaultStrings.bcc_));
    bccValue = createElement(spanHTMLTag);
    bccValue.id = "m-bcc-value";
    detailBcc.appendChild(bccSpan);
    detailBcc.appendChild(bccValue);
    details.appendChild(detailBcc);

    detailSubject = createElement(pHTMLTag);
    detailSubject.id = "m-subject";
    let subjectSpan: HTMLElement = createElement(spanHTMLTag);
    subjectSpan.className = "w-500";
    subjectSpan.appendChild(
      createTextNode(strings.subject_ || defaultStrings.subject_)
    );
    subjectValue = createElement(spanHTMLTag);
    subjectValue.id = "m-subject-value";
    detailSubject.appendChild(subjectSpan);
    detailSubject.appendChild(subjectValue);
    details.appendChild(detailSubject);

    detailBody = createElement(pHTMLTag);
    detailBody.id = "m-body";
    let bodySpan: HTMLElement = createElement(spanHTMLTag);
    bodySpan.className = "w-500";
    bodySpan.appendChild(createTextNode(strings.body_ || defaultStrings.body_));
    bodyValue = createElement(spanHTMLTag);
    bodyValue.id = "m-body-value";
    detailBody.appendChild(bodySpan);
    detailBody.appendChild(bodyValue);
    details.appendChild(detailBody);

    modalContent.appendChild(details);

    // Gmail
    gmail = createElement(aHTMLTag) as HTMLLinkElement;
    gmail.id = "m-gmail";
    gmail.href = "#mailgo-gmail";
    gmail.classList.add("m-open");
    gmail.classList.add("m-gmail");
    gmail.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let gmailSpan: HTMLElement = createElement(spanHTMLTag);
    gmailSpan.className = "w-500";
    gmailSpan.appendChild(
      createTextNode(strings.gmail || defaultStrings.gmail)
    );
    gmail.appendChild(gmailSpan);

    if (mailgoConfigAttributeEnabled("action", "gmail")) {
      modalContent.appendChild(gmail);
    }

    // Outlook
    outlook = createElement(aHTMLTag) as HTMLLinkElement;
    outlook.id = "m-outlook";
    outlook.href = "#mailgo-outlook";
    outlook.classList.add("m-open");
    outlook.classList.add("m-outlook");
    outlook.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let outlookSpan: HTMLElement = createElement(spanHTMLTag);
    outlookSpan.className = "w-500";
    outlookSpan.appendChild(
      createTextNode(strings.outlook || defaultStrings.outlook)
    );
    outlook.appendChild(outlookSpan);

    if (mailgoConfigAttributeEnabled("action", "outlook")) {
      modalContent.appendChild(outlook);
    }

    // Outlook
    yahoo = createElement(aHTMLTag) as HTMLLinkElement;
    yahoo.id = "m-yahoo";
    yahoo.href = "#mailgo-yahoo";
    yahoo.classList.add("m-open");
    yahoo.classList.add("m-yahoo");
    yahoo.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let yahooSpan: HTMLElement = createElement(spanHTMLTag);
    yahooSpan.className = "w-500";
    yahooSpan.appendChild(
      createTextNode(strings.yahoo || defaultStrings.yahoo)
    );
    yahoo.appendChild(yahooSpan);

    if (mailgoConfigAttributeEnabled("action", "yahoo")) {
      modalContent.appendChild(yahoo);
    }

    // open default
    open = createElement(aHTMLTag) as HTMLLinkElement;
    open.id = "m-open";
    open.href = "#mailgo-open";
    open.classList.add("m-open");
    open.classList.add("m-default");
    let openSpan: HTMLElement = createElement(spanHTMLTag);
    openSpan.className = "w-500";
    openSpan.appendChild(createTextNode(strings.open || defaultStrings.open));
    open.appendChild(openSpan);
    open.appendChild(
      createTextNode(strings._default || defaultStrings._default)
    );

    modalContent.appendChild(open);

    // copy
    copyMail = createElement(aHTMLTag) as HTMLLinkElement;
    copyMail.id = "m-copy";
    copyMail.href = "#mailgo-copy";
    copyMail.classList.add("m-copy");
    copyMail.classList.add("w-500");
    copyMail.appendChild(createTextNode(strings.copy || defaultStrings.copy));

    modalContent.appendChild(copyMail);

    // hide mailgo.dev in footer only if showFooter is defined and equal to false
    if (typeof config?.showFooter !== "undefined") {
      showFooterConfig = config.showFooter;
    }

    if (showFooterConfig) {
      modalContent.appendChild(byElement());
    }

    // add the modal at the end of the body
    document.body.appendChild(modalMailto);

    // every click outside the modal will hide the modal
    modalBackground.addEventListener("click", hideMailgo);
  }

  // mailgo tel, if mailgo-tel not already exists
  let mailgoTelExists = !!document.getElementById(MAILGO_TEL);

  // if mailgo is enabled for tel/callto and it not exists in DOM
  if (telEnabled && !mailgoTelExists) {
    // modal
    modalTel = createElement() as HTMLElement;
    modalTel.style.display = "none";
    modalTel.id = MAILGO_TEL;
    modalTel.classList.add("m-modal");
    modalTel.setAttribute("role", "dialog");
    modalTel.setAttribute("tabindex", "-1");
    modalTel.setAttribute("aria-labelledby", "m-tel-title");

    // if dark is in config
    if (config?.dark) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }

    // background
    let modalBackground: HTMLElement = createElement();
    modalBackground.className = "m-modal-back";
    modalTel.appendChild(modalBackground);

    // modal content
    let modalContent: HTMLElement = createElement();
    modalContent.className = "m-modal-content";
    modalTel.appendChild(modalContent);

    // title (telephone number)
    titleTel = createElement("strong");
    titleTel.id = "m-tel-title";
    titleTel.className = "m-title";
    modalContent.appendChild(titleTel);

    // details
    let detailsTel: HTMLElement = createElement();
    detailsTel.id = "m-tel-details";
    detailsTel.className = "m-details";

    detailMsg = createElement(pHTMLTag);
    detailMsg.id = "m-msg";
    let msgSpan: HTMLElement = createElement(spanHTMLTag);
    msgSpan.className = "w-500";
    msgSpan.appendChild(createTextNode(strings.body_ || defaultStrings.body_));
    msgValue = createElement(spanHTMLTag);
    msgValue.id = "m-msg-value";
    detailMsg.appendChild(msgSpan);
    detailMsg.appendChild(msgValue);
    detailsTel.appendChild(detailMsg);

    modalContent.appendChild(detailsTel);

    // Telegram
    telegram = createElement(aHTMLTag) as HTMLLinkElement;
    telegram.id = "m-tg";
    telegram.href = "#mailgo-telegram";
    telegram.classList.add("m-open");
    telegram.classList.add("m-tg");

    // by default not display
    telegram.style.display = "none";

    telegram.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let telegramSpan: HTMLElement = createElement(spanHTMLTag);
    telegramSpan.className = "w-500";
    telegramSpan.appendChild(
      createTextNode(strings.telegram || defaultStrings.telegram)
    );
    telegram.appendChild(telegramSpan);

    if (mailgoConfigAttributeEnabled("action", "telegram")) {
      modalContent.appendChild(telegram);
    }

    // WhatsApp
    wa = createElement(aHTMLTag) as HTMLLinkElement;
    wa.id = "m-wa";
    wa.href = "#mailgo-whatsapp";
    wa.classList.add("m-open");
    wa.classList.add("m-wa");
    wa.appendChild(createTextNode(strings.open_in_ || defaultStrings.open_in_));
    let waSpan: HTMLElement = createElement(spanHTMLTag);
    waSpan.className = "w-500";
    waSpan.appendChild(
      createTextNode(strings.whatsapp || defaultStrings.whatsapp)
    );
    wa.appendChild(waSpan);

    if (mailgoConfigAttributeEnabled("action", "whatsapp")) {
      modalContent.appendChild(wa);
    }

    // Skype
    skype = createElement(aHTMLTag) as HTMLLinkElement;
    skype.id = "m-skype";
    skype.href = "#mailgo-skype";
    skype.classList.add("m-open");
    skype.classList.add("m-skype");
    skype.appendChild(
      createTextNode(strings.open_in_ || defaultStrings.open_in_)
    );
    let skypeSpan: HTMLElement = createElement(spanHTMLTag);
    skypeSpan.className = "w-500";
    skypeSpan.appendChild(
      createTextNode(strings.skype || defaultStrings.skype)
    );
    skype.appendChild(skypeSpan);

    if (mailgoConfigAttributeEnabled("action", "skype")) {
      modalContent.appendChild(skype);
    }

    // call default
    call = createElement(aHTMLTag) as HTMLLinkElement;
    call.id = "m-call";
    call.href = "#mailgo-open";
    call.classList.add("m-open");
    call.classList.add("m-default");
    let callSpan: HTMLElement = createElement(spanHTMLTag);
    callSpan.className = "w-500";
    callSpan.appendChild(createTextNode(strings.call || defaultStrings.call));
    call.appendChild(callSpan);
    call.appendChild(
      createTextNode(strings._as_default || defaultStrings._as_default)
    );

    modalContent.appendChild(call);

    // copy
    copyTel = createElement(aHTMLTag) as HTMLLinkElement;
    copyTel.id = "m-tel-copy";
    copyTel.href = "#mailgo-copy";
    copyTel.classList.add("m-copy");
    copyTel.classList.add("w-500");
    copyTel.appendChild(createTextNode(strings.copy || defaultStrings.copy));

    modalContent.appendChild(copyTel);

    // hide mailgo.dev in footer only if showFooter is defined and equal to false
    if (typeof config?.showFooter !== "undefined") {
      showFooterConfig = config.showFooter;
    }

    if (showFooterConfig) {
      modalContent.appendChild(byElement());
    }

    // add the modal at the end of the body
    document.body.appendChild(modalTel);

    // every click outside the modal will hide the modal
    modalBackground.addEventListener("click", hideMailgo);
  }

  // event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered
  document.addEventListener("click", mailgoClickListener);
};

/**
 * mailgoClickListener
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
function mailgoClickListener(event: Event): boolean {
  // check if the mailgo HTML exists in the body
  if (
    !document.body.contains(modalMailto) &&
    !document.body.contains(modalTel)
  ) {
    return false;
  }

  // if a mailgo is already showing do nothing
  if (mailgoIsShowing()) {
    return false;
  }

  // the path of the event
  let path =
    (event.composedPath && event.composedPath()) ||
    composedPath(event.target as HTMLElement);

  if (path) {
    path.forEach((element: HTMLElement) => {
      if (element instanceof HTMLDocument || element instanceof Window) {
        return false;
      }

      // go here only if one of the mailgo modals are enabled
      if (mailtoEnabled || telEnabled || smsEnabled) {
        let localMailgoType = getMailgoTypeByElement(element);

        // go on if the localMailgoType is not null
        if (localMailgoType) {
          // set the active mailgo type
          activeMailgoType = localMailgoType;

          let activeMailgoModalType = activeMailgoType?.type;

          if (activeMailgoModalType) {
            // check if the setting is enabled and if so go with pre-render
            if (
              (mailtoEnabled && activeMailgoModalType === MAILGO_MAIL) ||
              (telEnabled && activeMailgoModalType === MAILGO_TEL) ||
              (smsEnabled && activeMailgoModalType === MAILGO_SMS)
            ) {
              // stop the normal execution of the element click
              event.preventDefault();

              // render mailgo
              mailgoPreRender(element as HTMLLinkElement);

              return true;
            }
          }
        }
      }
    });
  }

  return false;
}

/**
 * mailgoPreRender
 * function to pre-render a mailgo, it helps populating elements needed by modal
 */
function mailgoPreRender(
  mailgoElementOrUrl: HTMLLinkElement | string
): boolean {
  let mailgoElement: HTMLLinkElement;

  // get the type and installation from current mailgo type
  let type: MailgoModalType = activeMailgoType?.type;
  let installation: MailgoInstallationType = activeMailgoType?.installation;

  // if type is not defined return
  if (!type) return false;

  if (typeof mailgoElementOrUrl === "string") {
    // if the parameter is a string it is the url
    href = mailgoElementOrUrl as string;
  } else {
    // if the paramenter is an HTMLLinkElement get the href attribute and the element
    href = mailgoElementOrUrl.getAttribute("href") as string;
    mailgoElement = mailgoElementOrUrl as HTMLLinkElement;
  }

  // mailgo mail
  if (type === MAILGO_MAIL) {
    // if the installation is classic
    if (installation === CLASSIC) {
      if (validateUrl(href, MAILTO)) {
        mail = decodeURIComponent(href.split("?")[0].split(MAILTO)[1].trim());
      } else if (validateUrl(href, MAILGO)) {
        mail = decodeURIComponent(href.split("?")[0].split(MAILGO)[1].trim());
      }

      try {
        url = new URL(href);

        let urlParams: URLSearchParams = url.searchParams;
        // optional parameters for the email
        cc = urlParams.get("cc");
        bcc = urlParams.get("bcc");
        subject = urlParams.get("subject");
        bodyMail = urlParams.get("body");
      } catch (error) {
        console.log(error);
      }
    } else if (installation === LESS_SPAM) {
      // if the installation is less-spam
      // mail = data-address + @ + data-domain
      mail =
        mailgoElement.getAttribute("data-address") &&
        mailgoElement.getAttribute("data-domain")
          ? mailgoElement.getAttribute("data-address") +
            "@" +
            mailgoElement.getAttribute("data-domain")
          : null;

      try {
        url = new URL(MAILTO + encodeURIComponent(mail));
      } catch (error) {
        console.log(error);
      }

      let parameters: string[] = [];

      // cc = data-cc-address + @ + data-cc-domain
      cc = mailgoElement.getAttribute("data-cc-address")
        ? mailgoElement.getAttribute("data-cc-address") +
          "@" +
          mailgoElement.getAttribute("data-cc-domain")
        : null;

      // if cc is defined add it to parameters
      if (cc) parameters.push("cc=" + cc);

      // bcc = data-bcc-address + @ + data-bcc-domain
      bcc = mailgoElement.getAttribute("data-bcc-address")
        ? mailgoElement.getAttribute("data-bcc-address") +
          "@" +
          mailgoElement.getAttribute("data-bcc-domain")
        : null;

      // if bcc is defined add it to parameters
      if (bcc) parameters.push("bcc=" + bcc);

      // subject = data-subject
      subject = mailgoElement.getAttribute("data-subject");

      // if subject is defined add it to parameters
      if (subject) parameters.push("subject=" + subject);

      // body = data-body
      bodyMail = mailgoElement.getAttribute("data-body");

      // if body is defined add it to parameters
      if (bodyMail) parameters.push("body=" + bodyMail);

      // set the lessSpamHref
      lessSpamHref = buildLessSpamHref(
        MAILTO + encodeURIComponent(mail),
        parameters
      );
    }

    // if is in config use it
    if (typeof config?.validateEmail !== "undefined") {
      validateEmailConfig = config.validateEmail;
    }

    if (validateEmailConfig) {
      // validate the email address
      if (!validateEmails(mail.split(","))) {
        return false;
      }

      // if cc, bcc are not valid cc, bcc = ""
      if (cc && !validateEmails(cc.split(","))) cc = "";
      if (bcc && !validateEmails(bcc.split(","))) bcc = "";
    }
  }
  // mailgo tel
  else if (type === MAILGO_TEL) {
    if (installation === CLASSIC) {
      if (validateUrl(href, TEL)) {
        tel = decodeURIComponent(href.split("?")[0].split(TEL)[1].trim());
      } else if (validateUrl(href, CALLTO)) {
        tel = decodeURIComponent(href.split("?")[0].split(CALLTO)[1].trim());
      } else if (validateUrl(href, SMS)) {
        tel = decodeURIComponent(href.split("?")[0].split(SMS)[1].trim());
      }

      try {
        url = new URL(href);
        let urlParams: URLSearchParams = url.searchParams;

        // optional parameters for the phone number
        msg = urlParams.get("body");
      } catch (error) {
        console.log(error);
      }
    } else if (installation == LESS_SPAM) {
      tel = mailgoElement.getAttribute("data-tel");
      msg = mailgoElement.getAttribute("data-msg");

      try {
        url = new URL(TEL + encodeURIComponent(tel));
      } catch (error) {
        console.log(error);
      }

      let parameters: string[] = [];

      // if msg is defined add it to parameters
      if (msg) parameters.push("body=" + msg);

      // set the lessSpamHref
      lessSpamHref = buildLessSpamHref(
        TEL + encodeURIComponent(tel),
        parameters
      );
    }

    // if is in config use it
    if (typeof config?.validateTel !== "undefined") {
      validateTelConfig = config.validateTel;
    }

    // validate the phone number
    if (validateTelConfig) {
      if (!validateTel(tel)) return;
    }

    // Telegram username
    if (mailgoElement && mailgoElement.hasAttribute("data-telegram")) {
      telegramUsername = mailgoElement.getAttribute("data-telegram");
    } else {
      telegramUsername = null;
    }

    // Telegram username
    if (mailgoElement && mailgoElement.hasAttribute("data-skype")) {
      skypeUsername = mailgoElement.getAttribute("data-skype");
    } else {
      skypeUsername = null;
    }
  }

  // if dark is in config or contained in the element
  if (
    mailgoElement &&
    (config?.dark || mailgoElement.classList.contains("dark"))
  ) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // render mailgo
  mailgoRender();

  return true;
}

/**
 * mailgoDirectRender
 * function to render a mailgo directly from a URL
 */
function mailgoDirectRender(directUrl: string): boolean {
  // start mailgo
  mailgo();

  if (validateUrl(directUrl, MAILTO) || validateUrl(directUrl, MAILGO)) {
    activeMailgoType = {
      type: MAILGO_MAIL,
      installation: CLASSIC,
    };
    mailgoPreRender(directUrl);
    return true;
  } else if (
    validateUrl(directUrl, TEL) ||
    validateUrl(directUrl, CALLTO) ||
    validateUrl(directUrl, SMS)
  ) {
    activeMailgoType = {
      type: MAILGO_TEL,
      installation: CLASSIC,
    };
    mailgoPreRender(directUrl);
    return true;
  }
  return false;
}

/**
 * mailgoRender
 * function to render a mailgo (mail or tel)
 */
function mailgoRender(): boolean {
  // get the type from current mailgo type
  let type: MailgoModalType = activeMailgoType?.type;

  // if type is not defined return
  if (!type) return false;

  // mailgo mail
  if (type === MAILGO_MAIL) {
    // the title of the modal (email address)
    title.textContent = mail.split(",").join("\n");

    // add the details if provided
    if (mailgoConfigAttributeEnabled("detail", "cc") && cc) {
      detailCc.style.display = "block";
      ccValue.textContent = cc.split(",").join("\n");
    } else {
      detailCc.style.display = "none";
    }

    if (mailgoConfigAttributeEnabled("detail", "bcc") && bcc) {
      detailBcc.style.display = "block";
      bccValue.textContent = bcc.split(",").join("\n");
    } else {
      detailBcc.style.display = "none";
    }

    if (mailgoConfigAttributeEnabled("detail", "subject") && subject) {
      detailSubject.style.display = "block";
      subjectValue.textContent = subject;
    } else {
      detailSubject.style.display = "none";
    }

    if (mailgoConfigAttributeEnabled("detail", "body") && bodyMail) {
      detailBody.style.display = "block";
      bodyValue.textContent = bodyMail;
    } else {
      detailBody.style.display = "none";
    }

    // add the actions
    gmail.addEventListener("click", openGmail);

    outlook.addEventListener("click", openOutlook);

    yahoo.addEventListener("click", openYahooMail);

    open.addEventListener("click", openDefault);

    copyMail.addEventListener("click", copy);
  }
  // mailgo tel
  else if (type === MAILGO_TEL) {
    // the title of the modal (tel)
    titleTel.textContent = tel;

    if (mailgoConfigAttributeEnabled("detail", "msg") && msg) {
      detailMsg.style.display = "block";
      msgValue.textContent = msg;
    } else {
      detailMsg.style.display = "none";
    }

    // add the actions to buttons
    wa.addEventListener("click", openWhatsApp);

    // telegram must be shown only if data-telegram is provided
    if (telegramUsername) {
      document.getElementById("m-tg").style.display = "block";
      telegram.addEventListener("click", openTelegram);
    } else {
      document.getElementById("m-tg").style.display = "none";
    }

    skype.addEventListener("click", openSkype);

    call.addEventListener("click", openDefault);

    copyTel.addEventListener("click", copy);
  }

  // show the mailgo
  showMailgo(type);

  // add listener keyDown
  document.addEventListener("keydown", mailgoKeydown);

  return true;
}

// actions
const openGmail = (event?: Event): void => {
  event.preventDefault();

  let urlString: string;
  let installation: MailgoInstallationType = activeMailgoType?.installation;

  if (installation === CLASSIC) {
    try {
      urlString = url.toString();
    } catch (e) {
      urlString = href;
    }
  } else if (installation === LESS_SPAM) {
    urlString = lessSpamHref;
  }

  // Gmail url
  let gmailUrl: string =
    "https://mail.google.com/mail/?extsrc=mailto&url=" +
    encodeURIComponent(urlString);

  // open the link
  window.open(gmailUrl, "_blank", "noopener, noreferrer");

  // hide the modal
  hideMailgo();
};

const openOutlook = (event?: Event): void => {
  event.preventDefault();

  // Outlook starting url
  let startingOutlookUrl: string =
    "https://outlook.live.com/owa/?path=/mail/action/compose&to=";

  // let the user to decide to open Office365 Outlook instead of the classic outlook.live.com
  if (config?.office365) {
    startingOutlookUrl =
      "https://outlook.office365.com/owa/?path=/mail/action/compose&to=";
  }

  // Outlook url
  let outlookUrl: string = startingOutlookUrl + encodeURIComponent(mail);

  // the details if provided
  if (subject) {
    outlookUrl = outlookUrl.concat("&subject=" + encodeURIComponent(subject));
  }

  if (bodyMail) {
    outlookUrl = outlookUrl.concat("&body=" + encodeURIComponent(bodyMail));
  }

  // open the link
  window.open(outlookUrl, "_blank", "noopener, noreferrer");

  // hide the modal
  hideMailgo();
};

const openYahooMail = (event?: Event): void => {
  event.preventDefault();

  // Yahoo url
  let yahooUrl: string = "https://compose.mail.yahoo.com/?to=" + mail;

  // the details if provided
  if (subject) {
    yahooUrl = yahooUrl.concat("&subject=" + encodeURIComponent(subject));
  }
  if (bodyMail) {
    yahooUrl = yahooUrl.concat("&body=" + encodeURIComponent(bodyMail));
  }

  // open the link
  window.open(yahooUrl, "_blank", "noopener, noreferrer");

  // hide the modal
  hideMailgo();
};

const openTelegram = (event?: Event): void => {
  event.preventDefault();

  // check if telegramUsername exists
  if (telegramUsername) {
    // Telegram url
    let tgUrl: string = "https://t.me/" + encodeURIComponent(telegramUsername);

    // open the url
    window.open(tgUrl, "_blank", "noopener, noreferrer");

    // hide the modal
    hideMailgo();
  }
};

const openSkype = (event?: Event): void => {
  event.preventDefault();

  let skype: string = skypeUsername || tel;

  // Telegram url
  let skypeUrl: string = "skype:" + encodeURIComponent(skype);

  // open the url
  window.open(skypeUrl, "_blank", "noopener, noreferrer");

  // hide the modal
  hideMailgo();
};

const openWhatsApp = (event?: Event): void => {
  event.preventDefault();

  // WhatsApp API doesn't work with non number digits and leading 0s: https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/
  let whatappTel = tel.replace(notNumber, "").replace(leadingZeros, "");

  // WhatsApp url
  let waUrl: string = "https://wa.me/" + encodeURIComponent(whatappTel);

  // the details if provided
  if (msg) {
    waUrl = waUrl.concat("?text=" + encodeURIComponent(msg));
  }

  // open the url
  window.open(waUrl, "_blank", "noopener, noreferrer");

  // hide the modal
  hideMailgo();
};

const openDefault = (event?: Event): void => {
  event.preventDefault();

  let installation: MailgoInstallationType = activeMailgoType?.installation;

  // if the installation is classic the browser can follow the default behaviour
  if (installation === CLASSIC) {
    window.location.href = href;
  } else if (installation === LESS_SPAM) {
    // if the installation is less-spam use the built less-spam href
    window.location.href = lessSpamHref;
  }

  hideMailgo();
};

const copy = (event?: Event): void => {
  event.preventDefault();

  // the correct copyButton (mail or tel)
  if (mailgoIsShowing()) {
    let activeCopy: HTMLElement;

    let type: MailgoModalType = activeMailgoType?.type;

    if (type === MAILGO_MAIL) {
      // in case it is showing mail modal copy email address
      copyToClipboard(mail);
      activeCopy = copyMail;
    } else {
      // in case it is showing tel modal copy phone number
      copyToClipboard(tel);
      activeCopy = copyTel;
    }

    activeCopy.textContent = strings.copied || defaultStrings.copied;
    setTimeout(() => {
      activeCopy.textContent = strings.copy || defaultStrings.copy;
      // hide after the timeout
      hideMailgo();
    }, 999);
  }
};

// function to find if a link is a mailto, tel, callto or sms
const validateUrl = (url: string, type: string = MAILTO) => {
  let regexValidate = new RegExp("^" + type + "((.)+)", "gi");
  return regexValidate.test(url);
};

// function that returns if an element is a mailgo
function getMailgoTypeByElement(element: HTMLElement): MailgoType | null {
  let elementHref: string = (element as HTMLLinkElement).getAttribute("href");

  // return null if there is no-mailgo in class
  if (element.classList?.contains(NO_MAILGO)) {
    return null;
  }

  // the case of classic type of mailgo, like a href=mailto:... or a href=tel:... and the class=mailgo with a useful href
  if (elementHref || element.classList?.contains("mailgo")) {
    if (validateUrl(elementHref, MAILTO) || validateUrl(elementHref, MAILGO)) {
      // a mailto: or mailgo:
      return {
        type: MAILGO_MAIL,
        installation: CLASSIC,
      };
    } else if (
      validateUrl(elementHref, TEL) ||
      validateUrl(elementHref, CALLTO)
    ) {
      // a tel: or callto:
      return {
        type: MAILGO_TEL,
        installation: CLASSIC,
      };
    } else if (validateUrl(elementHref, SMS)) {
      // a sms:
      return {
        type: MAILGO_SMS,
        installation: CLASSIC,
      };
    }
  }

  if (elementHref === "#mailgo" || element.classList?.contains("mailgo")) {
    // less-spam installation of mailgo, check to the attributes
    if (
      element.hasAttribute("data-address") &&
      element.hasAttribute("data-domain")
    ) {
      // less-spam mailto with data-address and data-domain
      return {
        type: MAILGO_MAIL,
        installation: LESS_SPAM,
      };
    } else if (element.hasAttribute("data-tel")) {
      // less-spam tel with data-tel
      return {
        type: MAILGO_TEL,
        installation: LESS_SPAM,
      };
    } else if (element.hasAttribute("data-msg")) {
      // less-spam sms with data-msd
      return {
        type: MAILGO_SMS,
        installation: LESS_SPAM,
      };
    }
  }

  return null;
}

/**
 * mailgoKeydown
 * function to manage the keydown event when the modal is showing, return a boolean that represents if a useful key has been pressed
 */
const mailgoKeydown = (keyboardEvent: KeyboardEvent): boolean => {
  // if mailgo is showing
  if (mailgoIsShowing()) {
    let type: MailgoModalType = activeMailgoType?.type;

    if (type === MAILGO_MAIL) {
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
          copy();
          return true;
        default:
          return false;
      }
    } else if (type === MAILGO_TEL) {
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
          // spacebar or enter -> open default
          openDefault();
          return true;
        case 67:
          // c -> copy
          copy();
          return true;
        default:
          return false;
      }
    }
  }
  return false;
};

// show the modal
const showMailgo = (type: MailgoModalType): void => {
  // show the correct modal
  setModalDisplay(type, "flex");
};

// hide the modal
const hideMailgo = (): void => {
  // hide all the modals
  setModalDisplay(MAILGO_MAIL, "none");
  setModalDisplay(MAILGO_TEL, "none");

  // remove listener keyDown
  document.removeEventListener("keydown", mailgoKeydown);
};

// is the mailgo modal hidden?
const mailgoIsShowing = (): boolean => {
  return (
    (mailtoEnabled && getModalDisplay(MAILGO_MAIL) === "flex") ||
    ((telEnabled || smsEnabled) && getModalDisplay(MAILGO_TEL) === "flex")
  );
};

const byElement = (): HTMLLinkElement => {
  // by element in the footer
  let by: HTMLLinkElement = createElement(aHTMLTag) as HTMLLinkElement;
  by.href = "https://mailgo.dev?ref=mailgo-modal";
  by.className = "m-by";
  by.target = "_blank";
  by.rel = "noopener noreferrer";
  by.appendChild(createTextNode("mailgo.dev"));

  return by;
};

// create element
const createElement = (element: string = "div"): HTMLElement =>
  document.createElement(element);

// create text node
const createTextNode = (element: string): Text =>
  document.createTextNode(element);

// get the correct HTMLElement from a type
const getModalHTMLElement = (type: MailgoModalType = MAILGO_MAIL) => {
  if (type === MAILGO_TEL) {
    return modalTel;
  } else {
    return modalMailto;
  }
};

// get display value
const getModalDisplay = (ref: MailgoModalType = MAILGO_MAIL): string =>
  getModalHTMLElement(ref).style.display;

// set display value
const setModalDisplay = (
  ref: MailgoModalType = MAILGO_MAIL,
  value: string
): void => {
  let modal = getModalHTMLElement(ref);

  if (modal) {
    modal.style.display = value;

    if (value === "flex") {
      // "save" the activated link.
      activatedLink = document.activeElement as HTMLElement;
      modal.setAttribute("aria-hidden", "false");

      // Focus on the modal container.
      modal.setAttribute("tabindex", "0");
      modal.focus();
      setFocusLoop(modal);
    } else {
      modal.setAttribute("aria-hidden", "true");

      // focus back the activated link for getting back to the context.
      modal.setAttribute("tabindex", "-1");
      activatedLink.focus();
    }
  }
};

// enable dark mode
const enableDarkMode = () => {
  // get the type from current mailgo type
  let type: MailgoModalType = activeMailgoType?.type;
  if (type) {
    getModalHTMLElement(type).classList.add("m-dark");
  }
};

// disable dark mode
const disableDarkMode = () => {
  // get the type from current mailgo type
  let type: MailgoModalType = activeMailgoType?.type;
  if (type) {
    getModalHTMLElement(type).classList.remove("m-dark");
  }
};

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

// function to recreate a mailto: or tel: href from less-spam
const buildLessSpamHref = (type: string, parameters: string[]): string => {
  lessSpamHref = type;
  if (parameters && parameters.length > 0) {
    let joinedParams = parameters.join("&");
    lessSpamHref = lessSpamHref.concat("?" + joinedParams);
  }
  return lessSpamHref;
};

// function to check an attribute is enabled or not, by default considering it enabled
const mailgoConfigAttributeEnabled = (
  type: "action" | "detail",
  attribute: MailgoAction | MailgoDetail
): boolean => {
  // by default all the actions and attribute are enabled
  if (!config) {
    return true;
  }

  // if the attribute type is action consider the actions config attribute
  if (type === "action") {
    if (config && !config?.actions) {
      return true;
    }

    if (
      config &&
      config.actions &&
      config?.actions[attribute as MailgoAction] === false
    ) {
      return false;
    }
  } else if (type === "detail") {
    // else consider the details attribute

    if (config && !config?.details) {
      return true;
    }

    if (
      config &&
      config.details &&
      config?.details[attribute as MailgoDetail] === false
    ) {
      return false;
    }
  }

  return true;
};

// manage the language of mailgo
const mailgoSetLanguage = (): string => {
  let languageType = "default lang";

  // if a language is defined in configuration use it
  if (
    config?.lang &&
    (languages as MailgoLanguages).indexOf(config.lang) !== -1
  ) {
    lang = config.lang;
    languageType = "config lang";
  } else {
    // else if is defined <html lang=""> use it!
    // keep the lang from html
    let htmlLang: string = document.documentElement.lang;

    // find the correct language using the lang attribute, not just a === because there a are cases like fr-FR or fr_FR in html lang attribute
    (languages as MailgoLanguages).forEach((language: any) => {
      if (new RegExp("^" + language, "gi").test(htmlLang)) {
        lang = language;
        languageType = "html lang";
      }
    });
  }

  // strings
  strings = (translations as MailgoTranslations)[lang];

  return languageType;
};

const mailgoStyle = (): void => {
  if (!document.getElementById("mailgo-style")) {
    // mailgo style
    let mailgoCSSElement: HTMLStyleElement = createElement(
      "style"
    ) as HTMLStyleElement;
    mailgoCSSElement.id = "mailgo-style";
    mailgoCSSElement.type = "text/css";
    mailgoCSSElement.appendChild(createTextNode(mailgoCSS));
    document.head.appendChild(mailgoCSSElement);
  }
};

// mailgo
function mailgo(mailgoConfig?: MailgoConfig): boolean {
  try {
    // polyfill mailgo
    // mailgoPolyfill();

    // set the global config merging window mailgConfig and mailgoConfig passed as a parameter
    config = { ...mailgoConfig, ...((window as any)?.mailgoConfig || null) };

    // if the window is defined...
    if (typeof window !== "undefined") {
      // if is set in config use it (load the mailgo CSS)
      if (typeof config?.loadCSS !== "undefined") {
        loadCSSConfig = config.loadCSS;
      }

      // if is set in config use it (enable mailto)
      if (typeof config?.mailto !== "undefined") {
        mailtoEnabled = config.mailto;
      }

      // if is set in config use it (enable tel)
      if (typeof config?.tel !== "undefined") {
        telEnabled = config.tel;
      }

      // if is set in config use it (enable sms)
      if (typeof config?.sms !== "undefined") {
        smsEnabled = config.sms;
      }

      // if load css enabled load it!
      if (loadCSSConfig) {
        // add the style for mailgo
        mailgoStyle();
      }

      // if is set an initEvent add the listener
      if (config?.initEvent) {
        if (config?.listenerOptions) {
          // listener options specified
          document.addEventListener(
            config.initEvent,
            mailgoInit,
            config.listenerOptions
          );
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
    console.log(error);
  }
  return false;
}

// define the methods also for window element
if (typeof window !== "undefined") {
  (window as any).getMailgoTypeByElement = getMailgoTypeByElement;
  (window as any).mailgoClickListener = mailgoClickListener;
  (window as any).mailgoCheckRender = mailgoClickListener; // for compatibility with old version of mailgo
  (window as any).mailgoPreRender = mailgoPreRender;
  (window as any).mailgoDirectRender = mailgoDirectRender;
  (window as any).mailgoRender = mailgoRender;
  (window as any).mailgo = mailgo;
}

export {
  getMailgoTypeByElement,
  mailgoClickListener,
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
};

export default mailgo;
