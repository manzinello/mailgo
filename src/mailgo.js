// ottengo tutti i mailto contenuti nella pagina
let mailtos = document.querySelectorAll('a[href^="mailto:"]:not(.no-mailgo)');

console.log("mailgo is WIP");

// attivo mailgo su tutti gli elementi
mailtos.forEach(mailto => {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("hi!");
  newDiv.appendChild(newContent);

  mailto.parentNode.insertBefore(newDiv, mailto.nextSibling);

  mailto.addEventListener(
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
