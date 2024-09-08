// სტრინგი
// -- გამოვიტანთ მის შუაში არსებულ სიტყვას
// let string = "i love you";
// let splitedString = string.split(" ");
// console.log(splitedString[1]);

// if (splitedString.length > 1) {
//   let middleString = Math.floor(splitedString.length / 2);
//   console.log(splitedString[middleString]);
// }

// -- ჩავანაცვლებთ მასში არსებულ  სიტყვას სხვა სიტყვით
// let string = "tekle jankhoteli";
// let splitedString = string.split(" ");
// splitedString[0] = "tamar";
// console.log(splitedString);

// -- შევქმნით სტრინგში არსებული სიტყვებისგან მასივს
// let string = "tekle jankhoteli";
// let splitedString = string.split(" ");
// console.log(splitedString);
// -- გავამოწმებთ თუ არის სტრინგში რაიმე სიმბოლო ან სიტყვა
// let string = "tekle jankhoteli";
// console.log(string.includes("tekle"));
// -- გადავამოწმებთ თუ იწყება სტრინგი რაიმე სიტყვით ან სიმბოლოთი
// let string = "tekle";
// if (string[0] === "k") {
//   console.log("includes");
// } else {
//   console.log("does not include");
// }

// -- გავადიდოთ სტრინგში არსებული ყველა სიმბოლო
// let string = "tekle";
// console.log(string.toUpperCase());
// -- წავშალოთ სტრინგშ არსებული  სიცარიელე მარცხენივ და მარჯვნივ
// let string = " tekle jankhoteli ";
// console.log(string.trim());
// რთული

// შევქმნათ სტრინგი რომელიც უნდა  აკმაყოფილებდეს შემდეგ პირობებს

// -- უნდა შეიცავდეს დიდ და პატარა ასოებს
// -- უნდა შეიცავდეს რიცხვს
// -- უნდა იყოს 8 სიმბოლოზე მეტი
// -- უნდა შეიცავდეს სიმბოლოებს (!@%$&*()_-=+)

// ყველა პირობა უნდა გადამოწმდეს ⦁ Regexp  გამოყენებით
// let string = "Tekle5@jankhoteli";
// let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@%$&*()_=+-]).{8,}$/; // რეგულარული გამოხატულება

// console.log(regex.test(string));

// 5. დავწეროთ ფუნქცია, რომელიც გამოიტანს კვირის რომელიმე შემთხვევით დღეს.

// let weekDays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// function random(x) {
//   let randomDay = Math.floor(Math.random() * x.length);
//   return x[randomDay];
// }
// console.log(random(weekDays));
