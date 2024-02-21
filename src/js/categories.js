  // function totalCalc() {
  //   const cartItem = document.querySelectorAll(".content");
  //   const totalPrice = document.querySelector(".price2");

  //   let total = 0;
  //   cartItem.forEach((item) => {
  //     let count = item.querySelector(".count").innerText;
  //     let price = item.querySelector(".price2").innerText;
  //     let totalP = parseInt(count) * parseInt(price);
  //     total += totalP;
  //   });
  //   totalPrice.innerHTML = total;
  // }

  // totalCalc();

let minus = document.querySelector(".minus");


window.addEventListener("click", (event) => {
  event.preventDefault();
  let price = document.querySelector('.price2')
  
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML++;
    minus.style.color = "#000";
    price.innerHTML *= 2
    
    // totalCalc();
  }
  
  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML--;
    price.innerHTML /= 2
    

    // totalCalc();
    if (counter.innerHTML <= 1) {
      counter.innerHTML = "1";
      minus.style.color = "#ccc";
    }
    
    if (counter.innerHTML == 1) {
      price.innerHTML = price.innerHTML
    }
  }
});
