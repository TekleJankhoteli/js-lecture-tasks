let info = document.querySelector("h1");
let name_en = "სახელი en";
let name_ka = "სახელი ka";
let name_es = "სახელი es";
let lang = "en";

if (lang === "en") {
  info.innerHTML = name_en;
} else if (lang === "ka") {
  info.innerHTML = name_ka;
} else if (lang === "es") {
  info.innerHTML = name_es;
} else {
  info.innerHTML = "error";
}

//    შევქმნათ  პროდუქტის  მასივი  რომელშიც იქნება შეყვანილი 5 პროდუქტის ინფორმაცია ობიექტის სახით
//   მოცემული მასივი დავბეჭდოთ forech გამოყენებით გამოვიტანოთ html შემდეგი პირობებით
// let productImg = document.getElementById("img");
// let productName = document.getElementById("productName");
// let price = document.getElementById("price");
// let salePrice = document.getElementById("salePrice");
// let distribution = document.getElementById("distribution");
// let sale = document.getElementById("sale");
// let gift = document.getElementById("gift");

let main = document.querySelector("main");

let productArray = [
  {
    productName: "glass",
    productImgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JGNS8EFFjk-pKPErjs5UvPXvMU4scU5cDA&s",

    price: 100,
    salePrice: 20,
    distribution: true,
    sale: true,
    gift: false,
    salePercentage: true,
  },

  {
    productName: "plate",
    productImgUrl:
      "https://kaunteya.co/cdn/shop/products/01-7_3167a2c3-7006-4a12-8b6f-b127877c2d78.jpg?v=1642073797",

    price: 50,
    salePrice: 20,
    distribution: true,
    sale: true,
    gift: true,
    salePercentage: true,
  },

  {
    productName: "fork",
    productImgUrl:
      "https://m.media-amazon.com/images/I/715os5RL+jL._AC_UF894,1000_QL80_.jpg",

    price: 10,
    salePrice: 10,
    distribution: true,
    sale: false,
    gift: false,
    salePercentage: false,
  },

  {
    productName: "spoon",
    productImgUrl:
      "https://ptal.in/cdn/shop/products/brassservingspoon-01.jpg?v=1721915714&width=1080",

    price: 10,
    salePrice: 10,
    distribution: false,
    sale: false,
    gift: false,
    salePercentage: false,
  },

  {
    productName: "kettle",
    productImgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2F-FPSzSKt9R-zr7q4MjBzJHVEuhKML9qsw&s",
    price: 80,
    salePrice: 60,
    distribution: true,
    sale: true,
    gift: true,
    salePercentage: true,
  },
];

productArray.forEach((product) => {
  let cards = document.createElement("div");
  cards.classList = "cards";
  let productName = document.createElement("h2");
  productName.innerHTML = product.productName;
  productName.style.color = "darkGreen";

  let productImg = document.createElement("img");
  productImg.src = product.productImgUrl;
  productImg.style.width = "200px";

  let price = document.createElement("p");
  price.innerHTML = `Price: ${product.price} $`;

  let salePrice = document.createElement("p");
  salePrice.style.color = "red";
  if (product.sale) {
    salePrice.innerHTML = `Sale price:${product.salePrice} $`;
  }

  let gift = document.createElement("img");
  gift.classList = "giftSvg";

  if (product.gift) {
    gift.src = "./assets/giftIcon.svg";
  }

  let salePercentage = document.createElement("p");

  if (product.salePercentage) {
    let discount = ((product.price - product.salePrice) / product.price) * 100;
    salePercentage.innerHTML = `total sale is: ${discount}%`;
  }
  main.appendChild(cards);
  cards.appendChild(productName);
  cards.appendChild(productImg);
  cards.appendChild(price);
  cards.appendChild(salePrice);
  cards.appendChild(gift);
  cards.appendChild(salePercentage);
});
