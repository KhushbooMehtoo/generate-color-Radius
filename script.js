function genrate(r, g, b, x) {
  let myElement = document.getElementById("main").style;

  myElement.backgroundColor = `rgb(${r},${g}, ${b})`;

  myElement.borderRadius = `${x}%`;
}
