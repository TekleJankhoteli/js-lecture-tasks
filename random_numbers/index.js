const container = document.querySelector(".container");
const numbers = document.querySelector(".numbers");

function generateRandomNumbers() {
  const a = parseInt(document.getElementById("a").value);
  const b = parseInt(document.getElementById("b").value);
  if (isNaN(a) || isNaN(b) || a >= b) {
    numbers.innerHTML = "please enter corect numbers";
    return;
  }
  let randomNumbs = [];
  for (let i = 0; i < 30; i++) {
    let randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
    randomNumbs.push(randomNumber);
  }
  numbers.innerHTML = randomNumbs;
}

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// random numbers from array

// function randomNumbs(numbers) {
//     let randomnumbContainer = [];
//   for (let i = 0; i < numbers.length; i++) {
//      randomnumbContainer = Math.floor(Math.random() * numbers[i]);
//   }
//   return randomnumbContainer;
// }
// console.log(randomNumbs(numbers));

// five random numbers from array

// function fiveRandomNumb(numbers) {
//   let randomNumers = [];

//   while (randomNumers.length < 5) {
//     let randomIndex = Math.floor(Math.random() * numbers.length);
//     let randomNumber = numbers[randomIndex];

//     if (!randomNumers.includes(randomNumber)) {
//       randomNumers.push(randomNumber);
//     }
//   }
//   container.innerHTML = randomNumers;
//   return randomNumers;
// }
// console.log(fiveRandomNumb(numbers));
