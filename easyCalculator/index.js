// ააგეთ მარტივი კალკულატორი შესაბამისი ფორმების საშუალებით. რომლის საშუალებითაც შესაძლებელი იქნება გამრავლების, გაყოფის, მიმატების, გამოკლების, ახარისხების, ფესვის ამოღების ოპერაცია.
const display = document.getElementById("display");

function appandTodisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}
