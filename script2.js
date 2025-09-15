setProperty("waterbottle", "right", 0);

onEvent("waterbottle", "click", function () {
  setImageURL("waterbottle", "no-sign.gif");
  setProperty("waterbottle", "water-bottle.png");
  playSound("error.mp3");
});

onEvent("emptybottle", "click", function () {
  setProperty("emptybottle", "background-color", "lightblue");
  playSound("rightanswer.mp3");
});

setProperty("waterAppheader", "color", "blue");
onEvent("spanish", "click", toSpanish);

onEvent("english", "click", toEnglish);

function toEnglish() {
  setText("waterAppheader", "Water Conservation Tips");
  setText(
    "text1",
    "Instead of buying disposable water bottles, use a refillable bottle. Used water bottles fill our land fills and trap valuable water."
  );
  setText(
    "text2",
    "Choose the correct water bottle. Then click the faucet to fill."
  );
  setText("next", "Next");
}

function toSpanish() {
  setText("waterAppheader", "Consejos para la conservación del agua");
  setText(
    "text1",
    "En lugar de comprar botellas de agua desechables, usa una botella rellenable. Las botellas usadas llenan los vertederos y retienen agua valiosa."
  );
  setText(
    "text2",
    "Elige la botella de agua correcta. Luego, haz clic en el grifo para llenarla."
  );
  setText("next", "Próximo");
}
