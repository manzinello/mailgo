const VERSION = "0.2.7";
const MAILTO = "mailto:";

mailgoInit = () => {
  const styleSheet = document.createElement("link");
  styleSheet.rel = "stylesheet";
  styleSheet.type = "text/css";
  styleSheet.href =
    "https://unpkg.com/mailgo@" + VERSION + "/dist/mailgo.min.css";
  document.head.appendChild(styleSheet);

  // all mailgos in the document
  const mailgos = document.querySelectorAll(
    'a[href^="mailto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
  );

  // mailgo on every element
  mailgos.forEach((mailgo, index) => {
    let mail = "",
      mailtoHref = "",
      cc = "",
      bcc = "",
      subject = "",
      bodyMail = "";

    // mailgo all the element with href=^"mailto:"
    if (mailgo.href && mailgo.href.toLowerCase().startsWith(MAILTO)) {
      mail = decodeURIComponent(
        mailgo.href
          .split("?")[0]
          .split(MAILTO)[1]
          .trim());

      mailtoHref = mailgo.href;
      url = new URL(mailtoHref);
      let urlParams = new URLSearchParams(url.search);

      // optional parameters for the email
      cc = urlParams.get("cc");
      bcc = urlParams.get("bcc");
      subject = urlParams.get("subject");
      bodyMail = urlParams.get("body");
    } else {
      // mailgo all the element with href="#mailgo" or class="mailgo"
      // email = data-address + @ + data-domain
      mail =
        mailgo.getAttribute("data-address") +
        "@" +
        mailgo.getAttribute("data-domain");
      mailtoHref = MAILTO + encodeURIComponent(mail);
      url = new URL(mailtoHref);
    }

    // validate the email address
    if (!validateEmail(mail)) return;

    // modal
    let modal = document.createElement("div");
    modal.classList.add("mailgo-modal");
    modal.setAttribute("data-index", index);

    // background
    let modalBackground = document.createElement("div");
    modalBackground.className = "mailgo-modal-background";
    modal.appendChild(modalBackground);

    // modal content
    let modalContent = document.createElement("div");
    modalContent.className = "mailgo-modal-content";
    modal.appendChild(modalContent);

    // title (email address)
    let strong = document.createElement("strong");
    strong.className = "mailgo-title";
    let strongContent = document.createTextNode(mail);
    strong.appendChild(strongContent);
    modalContent.appendChild(strong);

    // details
    let details = document.createElement("div");
    details.className = "mailgo-details";

    if (cc && cc != "") {
      let detailCC = document.createElement("p");
      let ccSpan = document.createElement("span");
      ccSpan.className = "mailgo-weight-500";
      let ccContent = document.createTextNode("cc");
      ccSpan.appendChild(ccContent);
      let ccValue = document.createTextNode(": " + cc);
      detailCC.appendChild(ccSpan);
      detailCC.appendChild(ccValue);
      details.appendChild(detailCC);
    }

    if (bcc && bcc != "") {
      let detailBCC = document.createElement("p");
      let bccSpan = document.createElement("span");
      bccSpan.className = "mailgo-weight-500";
      let bccContent = document.createTextNode("bcc");
      bccSpan.appendChild(bccContent);
      let bccValue = document.createTextNode(": " + bcc);
      detailBCC.appendChild(bccSpan);
      detailBCC.appendChild(bccValue);
      details.appendChild(detailBCC);
    }

    if (subject && subject != "") {
      let detailSUBJECT = document.createElement("p");
      let subjectSpan = document.createElement("span");
      subjectSpan.className = "mailgo-weight-500";
      let subjectContent = document.createTextNode("cc");
      subjectSpan.appendChild(subjectContent);
      let subjectValue = document.createTextNode(": " + subject);
      detailSUBJECT.appendChild(subjectSpan);
      detailSUBJECT.appendChild(subjectValue);
      details.appendChild(detailSUBJECT);
    }

    if (bodyMail && bodyMail != "") {
      let detailBODY = document.createElement("p");
      let bodySpan = document.createElement("span");
      bodySpan.className = "mailgo-weight-500";
      let bodyContent = document.createTextNode("cc");
      bodySpan.appendChild(bodyContent);
      let bodyValue = document.createTextNode(": " + bodyMail);
      detailBODY.appendChild(bodySpan);
      detailBODY.appendChild(bodyValue);
      details.appendChild(detailBODY);
    }

    modalContent.appendChild(details);

    // Gmail
    let gmail = document.createElement("a");
    gmail.href = "https://mail.google.com/mail?extsrc=mailto&url="
      + encodeURIComponent(mailtoHref);
    gmail.classList.add("mailgo-open");
    gmail.classList.add("gmail");
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
    outlook.href =
      "https://outlook.office.com/owa/?rru=compose&to="
      + encodeURIComponent(mail) + url.search.replace(/^[$]/, '&');
    outlook.classList.add("mailgo-open");
    outlook.classList.add("outlook");
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

    open.href = "#mailgo-open";
    let encEmail = encodeEmail(mail);
    open.addEventListener(
      "click",
      () => {
        mailToEncoded(encEmail);
      },
      false
    );

    open.classList.add("mailgo-open");
    open.classList.add("mailgo-weight-500");
    let openContent = document.createTextNode("open");
    open.appendChild(openContent);
    modalContent.appendChild(open);

    // copy
    let copy = document.createElement("a");
    copy.href = "#mailgo-copy";
    copy.classList.add("mailgo-copy");
    copy.classList.add("mailgo-weight-500");
    let copyContent = document.createTextNode("copy");
    copy.appendChild(copyContent);
    copy.addEventListener(
      "click",
      event => {
        copyToClipboard(mail);
        copy.textContent = "copied";
        setTimeout(() => {
          copy.textContent = "copy";
        }, 999);
      },
      false
    );
    modalContent.appendChild(copy);

    // by
    let by = document.createElement("a");
    by.href = "https://mailgo.js.org";
    by.className = "mailgo-by";
    by.target = "_blank";
    let textBy = document.createTextNode("mailgo.js.org");
    by.appendChild(textBy);
    modalContent.appendChild(by);

    // add the modal after the element
    mailgo.parentNode.insertBefore(modal, mailgo.nextSibling);

    // show the modal on every element click
    mailgo.addEventListener(
      "click",
      event => {
        // clock the mailto: classic behaviour
        event.preventDefault();

        // modal is now active (showing)
        mailgo.nextElementSibling.classList.add("is-active");
      },
      false
    );

    // every click outside the modal will hide the modal
    modalBackground.addEventListener(
      "click",
      event => {
        mailgo.nextElementSibling.classList.remove("is-active");
      },
      false
    );
  });
};

// DOMContentLoaded -> mailgoInit
document.addEventListener("DOMContentLoaded", mailgoInit, false);

// validate the email with refgex
validateEmail = email => {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// copy of a string
copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
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

// decrypt email
mailToEncoded = encoded => (window.location.href = MAILTO + atob(encoded));

// encode email
encodeEmail = email => btoa(email);
