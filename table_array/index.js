// სიაში შეტანილი რიცხვებიდან დააბრუნეთ ლუწი რიცხვების ჯამი და კენტი რიცხვების
// ნამრავლი.
// let arr = [1, 2, 3, 4, 5, 6];
// let jami = 0;
// let namravli = 1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     jami = jami + arr[i];
//   }
// }
// console.log(jami);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     namravli = namravli * arr[i];
//   }
// }
// console.log(namravli);

// ცხრილში დააგენერირეთ რიცხვები 1 დან 9 მდე თანმიმდევრობით.

let container = document.querySelector(".container");
let table = document.createElement("table");

let number = 1;

for (let i = 0; i < 3; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < 3; j++) {
    let cell = document.createElement("td");
    cell.textContent = number;
    row.appendChild(cell);
    number++;
  }

  table.appendChild(row);
}

container.appendChild(table);
