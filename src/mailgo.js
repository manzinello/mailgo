const VERSION = "MAILGO_VERSION";
const MAILTO = "mailto:";

// style of mailgo
const styleSheet = document.createElement("link");
styleSheet.rel = "stylesheet";
styleSheet.type = "text/css";
styleSheet.href =
  "https://unpkg.com/mailgo@" + VERSION + "/dist/mailgo.min.css";
document.head.appendChild(styleSheet);

mailgoInit = () => {
  // all mailgos in the document
  const mailgos = document.querySelectorAll(
    'a[href^="mailto:" i]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
  );

  // modal
  let modal = document.createElement("div");
  modal.id = "mailgo";
  modal.classList.add("mailgo-modal");
  modal.style.display = "none";

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
  let subjectContent = document.createTextNode("subject");
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
  outlook.id = "mailgo-outlook";
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
  open.id = "mailgo-open";
  open.href = "#mailgo-open";
  open.classList.add("mailgo-open");
  open.classList.add("mailgo-weight-500");
  let openContent = document.createTextNode("open");
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
  by.href = "https://mailgo.js.org";
  by.className = "mailgo-by";
  by.target = "_blank";
  let textBy = document.createTextNode("mailgo.js.org");
  by.appendChild(textBy);
  modalContent.appendChild(by);

  document.body.appendChild(modal);

  // allow the escape key to hide the modal
  mailgo.addEventListener(
    "keydown",
    event => {
      if (event.keyCode === 27) {
        hideMailgo();
      }
    },
    false
  );

  // every click outside the modal will hide the modal
  modalBackground.addEventListener(
    "click",
    event => {
      hideMailgo();
    },
    false
  );
};

mailgoRender = mailgo => {
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
        .trim()
    );

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

  titleEl = document.getElementById("mailgo-title");
  detailsEl = document.getElementById("mailgo-details");
  ccEl = document.getElementById("mailgo-cc");
  ccValueEl = document.getElementById("mailgo-cc-value");
  bccEl = document.getElementById("mailgo-bcc");
  bccValueEl = document.getElementById("mailgo-bcc-value");
  subjectEl = document.getElementById("mailgo-subject");
  subjectValueEl = document.getElementById("mailgo-subject-value");
  bodyEl = document.getElementById("mailgo-body");
  bodyValueEl = document.getElementById("mailgo-body-value");

  gmailButton = document.getElementById("mailgo-gmail");
  outlookButton = document.getElementById("mailgo-outlook");
  openButton = document.getElementById("mailgo-open");
  copyButton = document.getElementById("mailgo-copy");

  titleEl.textContent = mail;

  cc ? (ccValueEl.textContent = cc) : (ccEl.style.display = "none");
  bcc ? (bccValueEl.textContent = bcc) : (bccEl.style.display = "none");
  subject
    ? (subjectValueEl.textContent = subject)
    : (subjectEl.style.display = "none");
  bodyMail
    ? (bodyValueEl.textContent = bodyMail)
    : (bodyEl.style.display = "none");

  gmailButton.href =
    "https://mail.google.com/mail?extsrc=mailto&url=" +
    encodeURIComponent(mailtoHref);

  outlookButton.href =
    "https://outlook.office.com/owa/?rru=compose&to=" +
    encodeURIComponent(mail) +
    url.search.replace(/^[$]/, "&");

  let encEmail = encodeEmail(mail);
  openButton.addEventListener(
    "click",
    () => {
      mailToEncoded(encEmail);
    },
    false
  );

  copyButton.addEventListener(
    "click",
    event => {
      copyToClipboard(mail);
      copyButton.textContent = "copied";
      setTimeout(() => {
        copyButton.textContent = "copy";
      }, 999);
    },
    false
  );

  showMailgo();
};

// DOMContentLoaded -> mailgoInit (creates the modal)
document.addEventListener("DOMContentLoaded", mailgoInit, false);

document.addEventListener(
  "click",
  event => {
    // TODO add all the possibilities
    if (event.target.href && event.target.href.startsWith("mailto:")) {
      event.preventDefault();
      mailgoRender(event.target);
    }
  },
  false
);

// validate the email with regex
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

// show the modal
showMailgo = () => (document.getElementById("mailgo").style.display = "flex");

// hide the modal
hideMailgo = () => (document.getElementById("mailgo").style.display = "none");

// decrypt email
mailToEncoded = encoded => (window.location.href = MAILTO + atob(encoded));

// encode email
encodeEmail = email => btoa(email);
