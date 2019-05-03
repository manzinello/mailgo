// ottengo tutti i mailto contenuti nella pagina
let mailgos = document.querySelectorAll('a[href^="mailto:"]:not(.no-mailgo)');

let styles = `

    .mailgo-modal {
      all: initial;
      * {
        all: unset;
      }
    }

    .mailgo-title {
      display: block;
      margin-bottom: 16px;
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
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    .mailgo-modal.is-active {
      display: flex;
      justify-content: center;
      align-items: center;
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
      padding: 1.25rem;
    }
    .mailgo-modal-content a {
      display: block;
      color: #4a4a4a;
      padding: 10px;
      border-radius: 4px;
      text-decoration: none;
    }
    .mailgo-modal-content a:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    .mailgo-modal-content a.outlook {
      color: rgba(0, 114, 198);
    }
    .mailgo-modal-content a.gmail {
      color: rgba(212, 70, 56);
    }
    .mailgo-modal-content a.outlook:hover {
      background-color: rgba(0, 114, 198, 0.08);
    }
    .mailgo-modal-content a.gmail:hover {
      background-color: rgba(212, 70, 56, 0.08);
    }
    a.mailgo-copy {
      margin-top: 10px;
      padding: 16px 10px;
    }
`;

// CSS
let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

console.log("mailgo is WIP!");

// attivo mailgo su tutti gli elementi
mailgos.forEach((mailgo, index) => {
  let mail = mailgo.href
    .split("?")[0]
    .split("mailto:")[1]
    .trim();

  if (!validateEmail(mail)) return;

  let url = new URL(mailgo.href);
  let urlParams = new URLSearchParams(url.search);

  let subject = urlParams.get("subject");
  let body = urlParams.get("body");
  let cc = urlParams.get("cc");
  let bcc = urlParams.get("bcc");

  let modal = document.createElement("div");
  modal.className = "mailgo-modal";
  modal.setAttribute("data-index", index);

  let modalBackground = document.createElement("div");
  modalBackground.className = "mailgo-modal-background";
  modal.appendChild(modalBackground);

  let modalContent = document.createElement("div");
  modalContent.className = "mailgo-modal-content";
  modal.appendChild(modalContent);

  // titolo (l'email)
  let strong = document.createElement("strong");
  strong.className = "mailgo-title";
  let strongContent = document.createTextNode(mail);
  strong.appendChild(strongContent);
  modalContent.appendChild(strong);

  // Gmail
  let gmail = document.createElement("a");
  gmail.href = "https://mail.google.com/mail?extsrc=mailto&url=" + mailgo.href;
  gmail.classList.add("mailgo-open");
  gmail.classList.add("gmail");
  let gmailContent = document.createTextNode("open in Gmail");
  gmail.appendChild(gmailContent);
  modalContent.appendChild(gmail);

  // Outlook
  let outlook = document.createElement("a");
  outlook.href =
    "https://outlook.office.com/owa/?rru=compose&to=" + mail + url.search;
  outlook.classList.add("mailgo-open");
  outlook.classList.add("outlook");
  let outlookContent = document.createTextNode("open in Outlook");
  outlook.appendChild(outlookContent);
  modalContent.appendChild(outlook);

  // default
  let open = document.createElement("a");
  open.href = mailgo.href;
  open.className = "mailgo-open";
  let openContent = document.createTextNode("open");
  open.appendChild(openContent);
  modalContent.appendChild(open);

  // copia l'email
  let copy = document.createElement("a");
  copy.className = "mailgo-copy";
  let copyContent = document.createTextNode("copy");
  copy.appendChild(copyContent);
  modalContent.appendChild(copy);

  mailgo.parentNode.insertBefore(modal, mailgo.nextSibling);

  mailgo.addEventListener(
    "click",
    event => {
      // blocco l'esecuzione normale del mailto:
      event.preventDefault();

      // setto il modal come attivo
      mailgo.nextElementSibling.classList.add("is-active");
    },
    false
  );

  modalBackground.addEventListener(
    "click",
    event => {
      mailgo.nextElementSibling.classList.remove("is-active");
    },
    false
  );
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
