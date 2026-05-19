let randomNum;
let min = 1;
let max = 100;
randomNum = Math.floor(Math.random() * max - min + 1) + min;
// ----------------------
let guess = "";
while (guess === "" || guess === null || guess > max || guess < min) {
  guess = window.prompt(`enter number between ${min} to ${max}`);
}
guess = Number(guess);
// ----------------------
switch (true) {
  case guess < randomNum:
    alert(`too low random num is ${randomNum}`);
    break;

  case guess > randomNum:
    alert(`too high random num is ${randomNum}`);
    break;

  case guess === randomNum:
    alert(`you win ${randomNum}`);
    break;
}
