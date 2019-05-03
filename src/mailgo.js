// ottengo tutti i mailto contenuti nella pagina
let mailgos = document.querySelectorAll('a[href^="mailto:"]:not(.no-mailgo)');

let styles = `
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
    }
    .mailgo-modal.is-active {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mailgo-modal-content {
      z-index: 1000;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
      color: #4a4a4a;
      display: block;
      padding: 1.25rem;
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
  let modal = document.createElement("div");
  modal.className = "mailgo-modal";
  modal.setAttribute("data-index", index);

  let modalBackground = document.createElement("div");
  modalBackground.className = "mailgo-modal-background";
  modal.appendChild(modalBackground);

  let modalContent = document.createElement("div");
  modalContent.className = "mailgo-modal-content";
  modal.appendChild(modalContent);

  let text = document.createTextNode("mailgo");
  modalContent.appendChild(text);

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
