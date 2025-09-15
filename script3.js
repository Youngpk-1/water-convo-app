onEvent("spanish", "click", toSpanish);

onEvent("english", "click", toEnglish);

onEvent("hellobtn", "click", textColor);

onEvent("shower-duck", "click", function () {
  setImageURL("shower-duck", "rubber-duck.jpeg");
  console.log("shower");
});

onEvent("timer", "click", function () {
  setImageURL("timer", "countdown-timer.jpeg");
  setImageURL("shower-duck", "rubber-duck.jpeg");
  playSound("alarm.mp3", "false");
});

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
