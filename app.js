let shopBtn = document.getElementById("cartBtn");
let cart = document.getElementById("cart-container");
let shopImgs = document.querySelectorAll("img");

window.addEventListener('load', function () {
    console.log("It's loaded!");
  })
  

function openShop() {
    console.log("merge clicku");
    console.log(cart.classList.toggle("none"));
}

