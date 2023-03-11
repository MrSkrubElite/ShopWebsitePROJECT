let shopBtn = document.getElementById("cartBtn");
let cart = document.getElementById("cart-container");
let shopImgs = document.querySelectorAll("img");
let cartList = document.getElementById("cart-list");
let xboxBtn = document.getElementById("x-box");

window.addEventListener('load', function () {
    console.log("It's loaded!");
    if (cart.style.backgroundColor = "none") {
      cart.classList.add("none");
    }
  })
  

  shopBtn.addEventListener("click", openShop);
  xboxBtn.addEventListener("click", closeShop);

function openShop() {
  cart.classList.remove("none");
  cartList.style.translate = "0px";
  cartList.style.transition = "all 1s";
  cart.style.backgroundColor = "rgba(0, 0, 0, 0.434)";
  cart.style.transition = "all 1s";
}

function closeShop() {
  
  cartList.style.translate = "300px";
  cartList.style.transition = "all 1s";
  cart.style.backgroundColor = "rgba(0, 0, 0, 0)";
  cart.style.transition = "all 1s";
  if (cart.style.transition = "all 1s") {
    setTimeout(function() {
      cart.classList.add("none");
    }, 1000);
  }
  
}
