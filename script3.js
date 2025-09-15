onEvent("spanish", "click", toSpanish);

onEvent("english", "click", toEnglish);

onEvent("hellobtn", "click", textColor);

onEvent("shower-duck", "click", function () {
  console.log(shower);
  setImageURL("shower-duck", "shower-duck.jpg");
  setImageURL("rubber-duck", "rubber-duck.jpeg");
});
// var showerDuck = document.getElementById("showerDuck");
// showerDuck.addEventListener("click", function () {
//   console.log(showerDuck);
//    {
//     showerDuck.src = "rubber-duck.jpg";
//   } else {
//     showerDuck.src = "showerDuck.jpg";
//   }
// });

function toEnglish() {
  setText(
    "text3",
    "Another way to conserve water is to take shorter sowers. Try setting a timer to five minutes!"
  );
  setText("next", "Done");
}

function toSpanish() {
  setText(
    "text3",
    "Otra forma de ahorrar agua es usar sembradoras más cortas. ¡Prueba a programar un temporizador de cinco minutos!"
  );
  setText("next", "terminado");
}

function textColor() {
  console.log("hello");
  setText("text3", "All clean");
  setProperty("text3", "color", "red");
}
