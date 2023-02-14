const diceButton = document.querySelector(".dice-button");
const adviceText = document.querySelector(".advice-text");
const slipNumber = document.querySelector(".slip-number");

async function getAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  console.log(data);
  slipNumber.innerHTML = await data.slip.id;
  adviceText.innerHTML = await data.slip.advice;
}
