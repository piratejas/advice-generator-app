const diceButton = document.getElementById("dice-button");
const adviceText = document.querySelector(".advice-text");
const slipNumber = document.querySelector(".slip-number");

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data = await response.json();
  console.log(data);
  slipNumber.innerHTML = await data.slip.id;
  adviceText.innerHTML = await data.slip.advice;
}

window.onload = getAdvice();

diceButton.addEventListener("click", getAdvice);
