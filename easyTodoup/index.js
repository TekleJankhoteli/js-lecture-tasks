let container = document.querySelector(".container");
let mainButton = document.querySelector("#mainButton");

mainButton.addEventListener("click", () => {
  let inputContainer = document.createElement("div");
  //   input
  let inputs = document.createElement("input");
  //   deleteButton
  let deleteButton = document.createElement("button");
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.color = "white";
  deleteButton.style.border = "none";

  deleteButton.innerHTML = "Delete";

  deleteButton.addEventListener("click", () => {
    inputContainer.remove();
  });
  //   append
  container.appendChild(inputContainer);
  inputContainer.appendChild(inputs);
  inputContainer.appendChild(deleteButton);
});
