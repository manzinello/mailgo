// ottengo tutti i mailto contenuti nella pagina
let mailtos = document.querySelectorAll('a[href^="mailto:"]');

// attivo mailgo su tutti gli elementi
mailtos.forEach(mailto => {
  mailto.addEventListener(
    "click",
    event => {
      event.preventDefault();
      // alert("Clicked");
    },
    false
  );
});
