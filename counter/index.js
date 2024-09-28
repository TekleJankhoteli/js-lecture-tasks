const numberValue = document.getElementById("countNumber");
const increaseButton = document.getElementById("increase");
const dicreaseButton = document.getElementById("decrease");

let counterVariable = 0;
function counter() {
  increaseButton.addEventListener("click", () => {
    numberValue.innerHTML = counterVariable++;
    checkColor();
  });

  dicreaseButton.addEventListener("click", () => {
    numberValue.innerHTML = counterVariable--;
    checkColor();
  });
}
counter();
function checkColor() {
  if (counterVariable == 0) {
    numberValue.style.color = "gray";
  } else if (counterVariable > 0) {
    numberValue.style.color = "green";
  } else {
    numberValue.style.color = "red";
  }
}
