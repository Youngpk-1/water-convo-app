setProperty("waterAppheader", "color", "blue");
onEvent("spanish", "click", toSpanish);

onEvent("english", "click", toEnglish);

function toEnglish() {
  setText("waterAppheader", "Water Conservation App");
}

function toSpanish() {
  setText("waterAppheader", "Aplicación de conservación del agua");
}
