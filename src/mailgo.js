// ottengo tutti i mailto contenuti nella pagina
let mailgos = document.querySelectorAll('a[href^="mailto:"]:not(.no-mailgo)');

console.log("mailgo is WIP");

// attivo mailgo su tutti gli elementi
mailgos.forEach(mailgo => {
  let modalDiv = document.createElement("div");
  let modalContent = document.createTextNode("hi!");
  modalDiv.appendChild(modalContent);

  mailgo.parentNode.insertBefore(newDiv, mailto.nextSibling);

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
