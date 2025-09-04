setProperty("waterAppheader", "color", "blue");
onEvent("spanish", "click", toSpanish);

onEvent("english", "click", toEnglish);

function toEnglish() {
  setText("waterAppheader", "Water Conservation App");
  setText(
    "text",
    "It's important that we all do our part to use less water. Click through this app for tips for conservation tips.."
  );
  setText("next", "Next");
}

function toSpanish() {
  setText("waterAppheader", "Aplicación de conservación del agua");
  setText(
    "text",
    "Es importante que todos contribuyamos a usar menos agua. Haz clic en esta aplicación para obtener consejos de conservación."
  );
  setText("next", "Próximo");
}
