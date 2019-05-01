// ottengo tutti i mailto contenuti nella pagina
let mailtos = document.querySelectorAll('a[href^="mailto:"]');

console.log("mailgo is WIP");

// attivo mailgo su tutti gli elementi
mailtos.forEach(mailto => {
  /*
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("hi!");
  newDiv.appendChild(newContent);

  mailto.parentNode.insertBefore(newDiv, mailto.nextSibling);
  */

  mailto.addEventListener(
    "click",
    event => {
      event.preventDefault();
      let r = confirm("You have clicked mailto: " + mailto.href);
      if (r === true) {
        location.href = mailto.href;
      }
    },
    false
  );
});
