    inner.classList.add("tile-inner");
    switch (tile.value) {
    case 2:
      inner.textContent = "H";
      break;
    case 4:
      inner.textContent = "He";
      break;
    case 8:
      inner.textContent = "Li";
      break;
    case 16:
      inner.textContent = "Be";
      break;
    case 32:
      inner.textContent = "B";
      break;
    case 64:
      inner.textContent = "C";
      break;
    case 128:
      inner.textContent = "N";
      break;
    case 256:
      inner.textContent = "O";
      break;
    case 512:
      inner.textContent = "F";
      break;
    case 1024:
      inner.textContent = "Ne";
      break;
    case 2048:
      inner.textContent = "Na";
      break;
    case 4096:
      inner.textContent = "Mg";
      break;
    }
