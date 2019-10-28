(() => {
  const V = "MAILGO_VERSION";

  // links
  const MAILTO = "mailto:";
  const TEL = "tel:";
  const CALLTO = "callto:";

  // mailgo types
  const MAIL_TYPE = "mail";
  const TEL_TYPE = "tel";

  // default href for links
  const DEFAULT_BTN_HREF = "javascript:void(0);";

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
    msg = "",
    telegramUsername = "",
    skypeUsername = "";

  // the DOM elements
  let title,
    titleTel,
    detailCc,
    detailBcc,
    detailSubject,
    detailBody,
    ccValue,
    bccValue,
    subjectValue,
    bodyValue;

  // mailgo buttons
  let gmail, outlook, open, telegram, wa, skype, call, copyMail, copyTel;

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
      title = document.createElement("strong");
      title.id = "mailgo-title";
      title.className = "mailgo-title";
      modalContent.appendChild(title);

      // details
      let details = document.createElement("div");
      details.id = "mailgo-details";
      details.className = "mailgo-details";

      detailCc = document.createElement("p");
      detailCc.id = "mailgo-cc";
      let ccSpan = document.createElement("span");
      ccSpan.className = "mailgo-weight-500";
      let ccContent = document.createTextNode("cc ");
      ccSpan.appendChild(ccContent);
      ccValue = document.createElement("span");
      ccValue.id = "mailgo-cc-value";
      detailCc.appendChild(ccSpan);
      detailCc.appendChild(ccValue);
      details.appendChild(detailCc);

      detailBcc = document.createElement("p");
      detailBcc.id = "mailgo-bcc";
      let bccSpan = document.createElement("span");
      bccSpan.className = "mailgo-weight-500";
      let bccContent = document.createTextNode("bcc ");
      bccSpan.appendChild(bccContent);
      bccValue = document.createElement("span");
      bccValue.id = "mailgo-bcc-value";
      detailBcc.appendChild(bccSpan);
      detailBcc.appendChild(bccValue);
      details.appendChild(detailBcc);

      detailSubject = document.createElement("p");
      detailSubject.id = "mailgo-subject";
      let subjectSpan = document.createElement("span");
      subjectSpan.className = "mailgo-weight-500";
      let subjectContent = document.createTextNode("subject ");
      subjectSpan.appendChild(subjectContent);
      subjectValue = document.createElement("span");
      subjectValue.id = "mailgo-subject-value";
      detailSubject.appendChild(subjectSpan);
      detailSubject.appendChild(subjectValue);
      details.appendChild(detailSubject);

      detailBody = document.createElement("p");
      detailBody.id = "mailgo-body";
      let bodySpan = document.createElement("span");
      bodySpan.className = "mailgo-weight-500";
      let bodyContent = document.createTextNode("body ");
      bodySpan.appendChild(bodyContent);
      bodyValue = document.createElement("span");
      bodyValue.id = "mailgo-body-value";
      detailBody.appendChild(bodySpan);
      detailBody.appendChild(bodyValue);
      details.appendChild(detailBody);

      modalContent.appendChild(details);

      // Gmail
      gmail = document.createElement("a");
      gmail.id = "mailgo-gmail";
      gmail.href = DEFAULT_BTN_HREF;
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
      outlook = document.createElement("a");
      outlook.id = "mailgo-outlook";
      outlook.href = DEFAULT_BTN_HREF;
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
      open = document.createElement("a");
      open.id = "mailgo-open";
      open.href = DEFAULT_BTN_HREF;
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
      copyMail = document.createElement("a");
      copyMail.id = "mailgo-copy";
      copyMail.href = DEFAULT_BTN_HREF;
      copyMail.classList.add("mailgo-copy");
      copyMail.classList.add("mailgo-weight-500");
      let copyContent = document.createTextNode("copy");
      copyMail.appendChild(copyContent);

      modalContent.appendChild(copyMail);

      // by
      let by = document.createElement("a");
      by.id = "mailgo.js.org";
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

      // title (telephone number)
      titleTel = document.createElement("strong");
      titleTel.id = "mailgo-tel-title";
      titleTel.className = "mailgo-title";
      modalContent.appendChild(titleTel);

      // Telegram
      telegram = document.createElement("a");
      telegram.id = "mailgo-telegram";
      telegram.href = DEFAULT_BTN_HREF;
      telegram.classList.add("mailgo-open");
      telegram.classList.add("mailgo-telegram");

      // by default not display
      telegram.style.display = "none";

      let telegramContent = document.createTextNode("open in ");
      telegram.appendChild(telegramContent);
      let telegramSpan = document.createElement("span");
      telegramSpan.className = "mailgo-weight-500";
      let telegramSpanContent = document.createTextNode("Telegram");
      telegramSpan.appendChild(telegramSpanContent);
      telegram.appendChild(telegramSpan);

      modalContent.appendChild(telegram);

      // WhatsApp
      wa = document.createElement("a");
      wa.id = "mailgo-wa";
      wa.href = DEFAULT_BTN_HREF;
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

      // Skype
      skype = document.createElement("a");
      skype.id = "mailgo-skype";
      skype.href = DEFAULT_BTN_HREF;
      skype.classList.add("mailgo-open");
      skype.classList.add("mailgo-skype");
      let skypeContent = document.createTextNode("open in ");
      skype.appendChild(skypeContent);
      let skypeSpan = document.createElement("span");
      skypeSpan.className = "mailgo-weight-500";
      let skypeSpanContent = document.createTextNode("Skype");
      skypeSpan.appendChild(skypeSpanContent);
      skype.appendChild(skypeSpan);

      modalContent.appendChild(skype);

      // call default
      call = document.createElement("a");
      call.id = "mailgo-call";
      call.href = DEFAULT_BTN_HREF;
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
      copyTel = document.createElement("a");
      copyTel.id = "mailgo-tel-copy";
      copyTel.href = DEFAULT_BTN_HREF;
      copyTel.classList.add("mailgo-copy");
      copyTel.classList.add("mailgo-weight-500");
      let copyContent = document.createTextNode("copy");
      copyTel.appendChild(copyContent);

      modalContent.appendChild(copyTel);

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
   * function to render a mailgo (mail or tel)
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
      // let titleEl = getE("mailgo-tel-title");

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
        setDisplay("mailgo-telegram", "block");
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
  const openGmail = () => {
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

  const openOutlook = () => {
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

  const openDefault = () => {
    mailToEncoded(encEmail);
    hideMailgo();
  };

  const openTelegram = () => {
    // Telegram url
    let tgUrl = "https://t.me/" + telegramUsername;

    // open the url
    window.open(tgUrl, "_blank");

    // hide the modal
    hideMailgo();
  };

  const openSkype = () => {
    let skype = skypeUsername !== "" ? skypeUsername : tel;

    // Telegram url
    let skypeUrl = "skype:" + skype;

    // open the url
    window.open(skypeUrl, "_blank");

    // hide the modal
    hideMailgo();
  };

  const openWhatsApp = () => {
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

  const copy = content => {
    copyToClipboard(content);
    let activeCopy;
    // the correct copyButton (mail or tel)
    mailgoIsShowing(MAIL_TYPE)
      ? (activeCopy = copyMail)
      : (activeCopy = copyTel);
    activeCopy.textContent = "copied";
    setTimeout(() => {
      activeCopy.textContent = "copy";
      // hide after the timeout
      hideMailgo();
    }, 999);
  };

  // function that returns if an element is a mailgo
  const isMailgo = (element, type = MAIL_TYPE) => {
    // mailgo type mail
    if (type === MAIL_TYPE) {
      return (
        // first case: it is an <a> element with "mailto:..." in href and no no-mailgo in classList
        (element.href &&
          element.href.toLowerCase().startsWith(MAILTO) &&
          !element.classList.contains("no-mailgo")) ||
        (element.hasAttribute("data-address") &&
          // second case: the href=#mailgo
          ((element.href &&
            element.getAttribute("href").toLowerCase() === "#mailgo") ||
            // third case: the classList contains mailgo
            (element.classList && element.classList.contains("mailgo"))))
      );
    }

    // mailgo type tel
    if (type === TEL_TYPE) {
      return (
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
          (element.classList && element.classList.contains("mailgo")))
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
        if (element instanceof HTMLDocument || element instanceof Window)
          return;

        // go in the event.path to find if the user has clicked on a mailgo element
        if (isMailgo(element, MAIL_TYPE)) {
          // stop the normal execution of the element click
          event.preventDefault();

          // render mailgo
          mailgoRender(MAIL_TYPE, element);

          return;
        }
        if (isMailgo(element, TEL_TYPE)) {
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
  const showMailgo = (type = MAIL_TYPE) => {
    // show mailgo type mail
    if (type === MAIL_TYPE) {
      setDisplay("mailgo", "flex");
      return;
    }
    // show mailgo type tel
    if (type === TEL_TYPE) {
      setDisplay("mailgo-tel", "flex");
      return;
    }
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
    return type === MAIL_TYPE
      ? getDisplay("mailgo") === "flex"
      : type === TEL_TYPE
      ? getDisplay("mailgo-tel") === "flex"
      : false;
  };

  // window exists
  const windowExists = () => window && typeof window !== "undefined";

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
  const validateEmail = email =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  // validate an array of emails
  const validateEmails = arr => arr.every(validateEmail);

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

  // start mailgo
  (() => {
    // if the window object exists...
    if (windowExists()) {
      // mailgo style (gulp)
      let mailgoCSS = document.createElement("style");
      mailgoCSS.id = "mailgo-style";
      mailgoCSS.type = "text/css";
      let mailgoCSSContent = document.createTextNode(`MAILGO_STYLE`);
      mailgoCSS.appendChild(mailgoCSSContent);
      document.head.appendChild(mailgoCSS);

      // DOMContentLoaded -> mailgoInit (creates the modals)
      document.addEventListener("DOMContentLoaded", mailgoInit);

      // event listener on body, if the element is mailgo-compatible the mailgo modal will be rendered
      document.addEventListener("click", mailgoCheckRender);
    }
  })();
})();
