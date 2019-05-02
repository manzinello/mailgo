import "./mailgo.css";

// ottengo tutti i mailto contenuti nella pagina
let mailgos = document.querySelectorAll('a[href^="mailto:"]:not(.no-mailgo)');

console.log("mailgo is WIP");

// attivo mailgo su tutti gli elementi
mailgos.forEach(mailgo => {
  let modalContainer = document.createElement("div");
  modalContainer.className = "mailgo-modal-container";
  let modal = document.createElement("div");
  modal.className = "mailgo-modal";

  modalContainer.appendChild(modal);

  let modalContent = document.createTextNode("mailgo");
  modal.appendChild(modalContent);

  mailgo.parentNode.insertBefore(modalContainer, mailgo.nextSibling);

  mailgo.addEventListener(
    "click",
    event => {
      // blocco l'esecuzione normale del mailto:
      event.preventDefault();

      // mostro un alert
      /*
      let r = confirm("You have clicked mailto: " + mailto.href);
      if (r === true) {
        location.href = mailto.href;
      }
      */
    },
    false
  );
});
