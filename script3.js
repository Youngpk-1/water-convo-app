onEvent("spanish", "click", toSpanish);

onEvent("english", "click", toEnglish);

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
