// ottengo tutti i mailto contenuti nella pagina
let mailtos = document.querySelectorAll('a[href^="mailto:"]');

console.log("mailgo is WIP");

// attivo mailgo su tutti gli elementi
mailtos.forEach(mailto => {
  mailto.addEventListener(
    "click",
    event => {
      event.preventDefault();
      alert("clicked");
    },
    false
  );
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWlsZ28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gb3R0ZW5nbyB0dXR0aSBpIG1haWx0byBjb250ZW51dGkgbmVsbGEgcGFnaW5hXG5sZXQgbWFpbHRvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCJtYWlsdG86XCJdJyk7XG5cbmNvbnNvbGUubG9nKFwibWFpbGdvIGlzIFdJUFwiKTtcblxuLy8gYXR0aXZvIG1haWxnbyBzdSB0dXR0aSBnbGkgZWxlbWVudGlcbm1haWx0b3MuZm9yRWFjaChtYWlsdG8gPT4ge1xuICBtYWlsdG8uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGFsZXJ0KFwiY2xpY2tlZFwiKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59KTtcbiJdLCJmaWxlIjoibWFpbGdvLmpzIn0=
