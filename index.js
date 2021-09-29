let refreshButton = document.querySelector(".roll-dice");

function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let dice1 = document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");

  let dice2 = document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "🚩 It's a draw! 🚩";
  }
}

refreshButton.addEventListener("click", rollDice);

// if (performance.getEntriesByType("navigation")[0].type === "reload") {
//   rollDice();
// }
