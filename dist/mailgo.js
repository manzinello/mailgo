function mailgoInit() {
  // style di mailgo
  const styles = `
    .mailgo-title {
      display: block;
      margin-bottom: 5px;
    }
    .mailgo-details {
      margin-bottom: 10px;
    }
    .mailgo-details p {
      font-size: 12px;
      margin-top: 3px;
      margin-bottom: 3px;
    }
    .mailgo-modal-background {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(10,10,10,.86);
      opacity: 0.8;
    }
    .mailgo-modal {
      position: fixed;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      z-index: 100000;
    }
    .mailgo-modal.is-active {
      display: flex;
    }
    .mailgo-modal-content {
      z-index: 1000;
      text-align: center;
      width: 200px;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
      color: #4a4a4a;
      display: block;
      overflow: auto;
      padding: 1.25rem;
    }
    .mailgo-modal-content a {
      display: block;
      color: #4a4a4a;
      border-radius: 4px;
      text-decoration: none;
    }
    .mailgo-modal-content a {
      padding: 10px;
    }
    .mailgo-modal-content a.mailgo-open:hover, .mailgo-modal-content a.mailgo-copy:hover  {
      background-color: rgba(0, 0, 0, 0.08);
    }
    .mailgo-modal-content a.outlook {
      color: #0072C6;
    }
    .mailgo-modal-content a.gmail {
      color: #D44638;
    }
    .mailgo-modal-content a.outlook:hover {
      background-color: rgba(0, 114, 198, 0.08);
    }
    .mailgo-modal-content a.gmail:hover {
      background-color: rgba(212, 70, 56, 0.08);
    }
    .mailgo-modal-content a.mailgo-copy {
      padding: 16px 10px;
    }
    .mailgo-modal-content a.mailgo-by {
      display: block;
      font-size: 8px;
      margin-top: 1rem;
      padding: 0px;
      font-style: italic;
    }
    .mailgo-weight-500 {
      font-weight: 500;
    }`;

  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // ottengo tutti i mailto contenuti nella pagina
  const mailgos = document.querySelectorAll(
    'a[href^="mailto:"]:not(.no-mailgo), a[href="#mailgo"], a.mailgo'
  );

  // attivo mailgo su tutti gli elementi
  mailgos.forEach(function(mailgo, index) {
    let mail = "",
      mailtoHref = "",
      cc = "",
      bcc = "",
      subject = "",
      bodyMail = "";

    // caso in cui applico mailgo ad un <a> con mailto:
    if (mailgo.href && mailgo.href.includes("mailto:")) {
      mail = mailgo.href
        .split("?")[0]
        .split("mailto:")[1]
        .trim();

      mailtoHref = mailgo.href;
      url = new URL(mailtoHref);
      let urlParams = new URLSearchParams(url.search);

      // ottengo i parametri aggiuntivi
      cc = urlParams.get("cc");
      bcc = urlParams.get("bcc");
      subject = urlParams.get("subject");
      bodyMail = urlParams.get("body");
    } else {
      // caso in cui applico mailgo ad <a> con class="mailgo" o href=#mailgo
      // compongo l'email con data-address e data-domain passati nell'elemento
      mail =
        mailgo.getAttribute("data-address") +
        "@" +
        mailgo.getAttribute("data-domain");
      mailtoHref = "mailto:" + mail;
      url = new URL(mailtoHref);
    }

    // valido l'email, se non valida non abilito mailgo per il singolo elemento
    if (!validateEmail(mail)) return;

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

    // titolo (l'email)
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
    gmail.href = "https://mail.google.com/mail?extsrc=mailto&url=" + mailtoHref;
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
      "https://outlook.office.com/owa/?rru=compose&to=" + mail + url.search;
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
    open.href = mailtoHref;
    open.classList.add("mailgo-open");
    open.classList.add("mailgo-weight-500");
    let openContent = document.createTextNode("open");
    open.appendChild(openContent);
    modalContent.appendChild(open);

    // copia l'email
    let copy = document.createElement("a");
    copy.href = "#mailgo-copy";
    copy.classList.add("mailgo-copy");
    copy.classList.add("mailgo-weight-500");
    let copyContent = document.createTextNode("copy");
    copy.appendChild(copyContent);
    copy.addEventListener(
      "click",
      function(event) {
        copyToClipboard(mail);
        copy.innerHTML = "copied";
        let timeout = setTimeout(() => {
          copy.innerHTML = "copy";
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

    // aggiungo il modal dopo l'elemento
    mailgo.parentNode.insertBefore(modal, mailgo.nextSibling);

    // se clicco sull'elemento appare il modal
    mailgo.addEventListener(
      "click",
      function(event) {
        // blocco l'esecuzione normale del mailto:
        event.preventDefault();

        // setto il modal come attivo
        mailgo.nextElementSibling.classList.add("is-active");
      },
      false
    );

    // se clicco fuori scompare
    modalBackground.addEventListener(
      "click",
      function(event) {
        mailgo.nextElementSibling.classList.remove("is-active");
      },
      false
    );
  });
}

// aggiungo l'init di mailgo al DOMContentLoaded
document.addEventListener("DOMContentLoaded", mailgoInit, false);

// funzionalità di validazione dell'email con regex
function validateEmail(email) {
  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// funzionalità di copia di una stringa
function copyToClipboard(str) {
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
}
