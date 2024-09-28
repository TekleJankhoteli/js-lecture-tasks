let number = document.getElementById("numeber");
let percent = document.getElementById("percent");
let calculatePercentButton = document.getElementById("calculatePercent");
let output = document.getElementById("output");

function calculate(numb, percentNumb) {
  return (numb * percentNumb) / 100;
}

calculatePercentButton.addEventListener("click", () => {
  let numValue = parseFloat(number.value);
  let percentValue = parseFloat(percent.value);

  if (!isNaN(numValue) && !isNaN(percentValue)) {
    let result = calculate(numValue, percentValue);
    output.innerHTML = `output:${result}`;
  } else {
    output.innerHTML = "please enter corect numbers";
  }
});
