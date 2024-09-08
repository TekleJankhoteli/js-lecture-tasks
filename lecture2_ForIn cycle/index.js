let userArray = [
  {
    role: "Admin",
    isActive: true,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gukc7EnLg2lXrV35IoDl3SrhFbupHeJhuw&s",
    createdAt: Date,
    confirmed: true,
  },
  {
    role: "user",
    isActive: true,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gukc7EnLg2lXrV35IoDl3SrhFbupHeJhuw&s",
    createdAt: Date,
    confirmed: true,
  },

  {
    role: "visitor",
    isActive: true,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gukc7EnLg2lXrV35IoDl3SrhFbupHeJhuw&s",
    createdAt: Date,
    confirmed: true,
  },
];
let newArray = [];
for (let role in userArray) {
  if (userArray[role].role === "Admin") {
    newArray.push(userArray[role]);
  }
}
console.log(newArray);
