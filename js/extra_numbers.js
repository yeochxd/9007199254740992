window.requestAnimationFrame(function () {
  var game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
  game.actuator.addTile = function (tile) {
    var self = this;
    var wrapper   = document.createElement("div");
    var inner     = document.createElement("div");
    var position  = tile.previousPosition || { x: tile.x, y: tile.y };
    positionClass = this.positionClass(position);
    var classes = ["tile", "tile-" + tile.value, positionClass];
    this.applyClasses(wrapper, classes);
    inner.classList.add("tile-inner");
    switch (tile.value) {
    case 1:
      inner.textContent = "H";
      break;
    case 2:
      inner.textContent = "He";
      break;
    case 3:
      inner.textContent = "Li";
      break;
    case 4:
      inner.textContent = "Be";
      break;
    case 5:
      inner.textContent = "B";
      break;
    case 6:
      inner.textContent = "C";
      break;
    case 7:
      inner.textContent = "N";
      break;
    case 8:
      inner.textContent = "O";
      break;
    case 9:
      inner.textContent = "F";
      break;
    case 10:
      inner.textContent = "Ne";
      break;
    case 11:
      inner.textContent = "Na";
      break;
    case 12:
      inner.textContent = "Mg";
      break;
    }
   
