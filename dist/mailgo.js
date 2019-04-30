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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWlsZ28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gb3R0ZW5nbyB0dXR0aSBpIG1haWx0byBjb250ZW51dGkgbmVsbGEgcGFnaW5hXG5sZXQgbWFpbHRvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCJtYWlsdG86XCJdJyk7XG5cbmNvbnNvbGUubG9nKFwibWFpbGdvIGlzIFdJUFwiKTtcblxuLy8gYXR0aXZvIG1haWxnbyBzdSB0dXR0aSBnbGkgZWxlbWVudGlcbm1haWx0b3MuZm9yRWFjaChtYWlsdG8gPT4ge1xuICAvKlxuICB2YXIgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmFyIG5ld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcImhpIVwiKTtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld0NvbnRlbnQpO1xuXG4gIG1haWx0by5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdEaXYsIG1haWx0by5uZXh0U2libGluZyk7XG4gICovXG5cbiAgbWFpbHRvLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGV2ZW50ID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgciA9IGNvbmZpcm0oXCJZb3UgaGF2ZSBjbGlja2VkIG1haWx0bzogXCIgKyBtYWlsdG8uaHJlZik7XG4gICAgICBpZiAociA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gbWFpbHRvLmhyZWY7XG4gICAgICB9XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xufSk7XG4iXSwiZmlsZSI6Im1haWxnby5qcyJ9
