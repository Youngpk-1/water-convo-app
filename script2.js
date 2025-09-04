setProperty("waterbottle", "right", 0);
onEvent("waterbottle", "click", function () {
  setProperty("waterbottle", "background-color", "red");
});
onEvent("emptybottle", "click", function () {
  setProperty("emptybottle", "background-color", "lightblue");
});
