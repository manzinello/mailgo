// ottengo tutti i mailto contenuti nella pagina
let mailgos = document.querySelectorAll('a[href^="mailto:"]:not(.no-mailgo)');

let styles = `
    .mailgo-modal-container {
      background: white;
    }
`;

let styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

console.log("mailgo is WIP!");

// attivo mailgo su tutti gli elementi
mailgos.forEach(mailgo => {
  let modalContainer = document.createElement("div");
  modalContainer.className = "mailgo-modal-container";
  let modal = document.createElement("div");
  modal.className = "mailgo-modal";

  modalContainer.appendChild(modal);

  let modalContent = document.createTextNode("mailgo");

  modal.appendChild(modalContent);

  modalContainer.style.display = "none";
  mailgo.parentNode.insertBefore(modalContainer, mailgo.nextSibling);

  mailgo.addEventListener(
    "click",
    event => {
      // blocco l'esecuzione normale del mailto:
      event.preventDefault();
      mailgo.nextElementSibling.style.display = "block";
    },
    false
  );
});
