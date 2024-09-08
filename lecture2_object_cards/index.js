// შევქმნათ პროდუცტის ობიექტი,რომელსაც ექნება მეთოდი რომელიც დათვლის არის თუ
// არა მარაგშიპროდუქტი.თუ რაოდენობა უდრის 0ს -მარაგი ამოიწურა თუ 0ზე მეტია გამოვიტანოთ რაოდენობა;
// ეს ინფორმაცია გამოგვაქვს ბუტსტრაფის ქარდში

let img = document.getElementById("productImg");
let productName = document.getElementById("productName");
let weight = document.getElementById("weight");
let stockInfo = document.getElementById("stockInfo");
let price = document.getElementById("price");

let productObject = {
  productNameis: "Glass",
  weight: 50,
  stock: 0,
  price: 35,
  img: "https://m.media-amazon.com/images/I/71+tPqPzSXL.jpg",

  checkingStock() {
    if (productObject.stock > 0) {
      stockInfo.innerHTML = productObject.stock;
    } else {
      stockInfo.innerHTML = "Out of stock";
    }
  },
};
productObject.checkingStock();

img.src = productObject.img;
productName.innerHTML = productObject.productNameis;
weight.innerHTML = `weight: ${productObject.weight}`;
price.innerHTML = `price: ${productObject.price}`;
