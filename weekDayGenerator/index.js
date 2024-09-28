const container = document.querySelector(".container");
const weekDay = document.querySelector("p");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function createButtons() {
  for (let i = 1; i <= 7; i++) {
    let button = document.createElement("button");
    button.innerHTML = i;
    button.classList = "buttonStyles";
    container.appendChild(button);

    button.addEventListener("click", function () {
      weekDay.innerHTML = days[i - 1];
    });
  }
}
createButtons();
