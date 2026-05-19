let result;
let min = 1;
let max = 6;

document.getElementById("roll").onclick = function () {
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("result").textContent = result;
};
