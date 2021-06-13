const line = document.getElementById("font-size-control");
const textSize = document.getElementById("text");

line.addEventListener("input", function (even) {
  const size = line.value;
  textSize.style.fontSize = size + "px";
});