// ottengo tutti i mailto contenuti nella pagina
let mailtos = document.querySelectorAll('a[href^="mailto:"]');

mailtos.forEach(mailto => {
  mailto.addEventListener(
    "click",
    event => {
      event.preventDefault();
      alert("Clicked");
    },
    false
  );
});
