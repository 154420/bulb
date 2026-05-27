// 1 this is the first one
var a = document.querySelector("#bulb");
var b = document.querySelector("button");

var c = 0;

b.addEventListener("click", function () {
  if (c == 0) {
    a.style.backgroundColor = "yellow";
    c = 1;
  } else {
    a.style.backgroundColor = "transparent";
    c = 0;
  }
});
