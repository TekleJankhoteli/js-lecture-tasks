// შევქმნათ პროდუცტის ობიექტი,რომელსაც ექნება მეთოდი რომელიც დათვლის არის თუ
// არა მარაგშიპროდუქტი.თუ რაოდენობა უდრის 0ს -მარაგი ამოიწურა თუ 0ზე მეტია გამოვიტანოთ რაოდენობა;
// ეს ინფორმაცია გამოგვაქვს ბუტსტრაფის ქარდში

let img = document.getElementById("productImg");
let productName = document.getElementById("productName");
let weight = document.getElementById("weight");
let stockInfo = document.getElementById("stockInfo");
let price = document.getElementById("price");

function ObjectConstructor(name, weight, stock, price, img) {
  this.productNameis = name;
  this.weight = weight;
  this.stock = stock;
  this.price = price;
  this.imgUrl = img;
  this.checkingStock = function () {
    if (this.stock > 0) {
      stockInfo.innerHTML = this.stock;
    } else {
      stockInfo.innerHTML = "Out of stock";
    }
  };
}

const productObject = new ObjectConstructor(
  "Glass",
  20,
  50,
  35,
  "https://m.media-amazon.com/images/I/71+tPqPzSXL.jpg"
);

img.src = productObject.imgUrl;
productName.innerHTML = productObject.productNameis;
weight.innerHTML = `weight: ${productObject.weight}`;
price.innerHTML = `price: ${productObject.price}`;
productObject.checkingStock();
