let korzina = {
  arr: [],
  id: 0,
};

korzina.arr = JSON.parse(localStorage.getItem("korzina2") || "[]");
korzina.id = JSON.parse(localStorage.getItem("id") || "0");
let count = JSON.parse(localStorage.getItem("count") || "0");

let y = [];

const left = document.querySelector(".left");

for (let i = 0; i < korzina.arr.length; i++) {
  let todoHtml = `
  <br />
  <div class="box"></div>
  <br />
  <div class="item" id="${korzina.arr[i].id}">
  <input type="checkbox" />
  <div class="salesman">
  <img
  src="${korzina.arr[i].img}"
  alt=""
  />
  <p class="name">
  ${korzina.arr[i].name}
  </p>
  <div class="k">
  <div class="kol">
  <button class="minus" data-action="minus">-</button>
  <p class="count" data-counter>${korzina.arr[i].count}</p>
  <button class="plyus" data-action="plus">+</button>
  </div>
  </div>
  </div>
  <div class="delete">
  <div class="flex" id="deleteBox">
  <i class='bx bxs-trash' style='color:#'  ></i>
  <p class="delet">Удалить</p>
  </div>
  <div class="katta">
  <p class="price">${korzina.arr[i].total} сум</p>
  <del class="discount">${korzina.arr[i].price}</del>
  </div>
  </div>
  </div>
  <br />
  <br />
  `;

  left.insertAdjacentHTML("beforeend", todoHtml);
}

window.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.closest(".plyus")) {
    const counterWrapper = event.target.closest(".item");
    const counter = counterWrapper.querySelector(".count");
    const price = counterWrapper.querySelector(".price");
    const minus = counterWrapper.querySelector(".minus");
    counter.innerHTML++;

    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");

    let total = 0;
    for (let item of a) {
      if (item.id == counterWrapper.id) {
        let p = parseInt(item.discount);
        total = p * counter.innerHTML;
        price.innerHTML = `${total} сум`;
        minus.style.color = "#000";
        item.total = total;
        item.count = counter.innerHTML;
      }
    }

    localStorage.setItem("korzina2", JSON.stringify(a));

    totalPrice();
  }

  if (event.target.closest(".minus")) {
    const counterWrapper = event.target.closest(".item");
    const counter = counterWrapper.querySelector(".count");
    const price = counterWrapper.querySelector(".price");
    const minus = counterWrapper.querySelector(".minus");
    counter.innerHTML--;

    if (counter.innerHTML <= 1) {
      counter.innerHTML = 1;
      minus.style.color = "#ccc";
    }

    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");

    for (let item of a) {
      if (item.id == counterWrapper.id) {
        let total = item.total;
        let p = parseInt(item.discount);
        total = total - p;
        price.innerHTML = `${total} сум`;
        minus.style.color = "#000";
        item.total = total;
        item.count = counter.innerHTML;
      }
    }

    localStorage.setItem("korzina2", JSON.stringify(a));


    localStorage.setItem("korzina2", JSON.stringify(a));

    totalPrice();
  }
});

let date = document.querySelectorAll(".date2");

for (let i = 0; i < date.length; i++) {
  date[i].innerHTML = new Date().getDate() + 1;
}
let item = document.querySelectorAll(".item");
let tovar = document.querySelector(".tovar");

tovar.innerHTML = item.length;

let conteiner = document.querySelector(".conteiner");
let price = conteiner.querySelectorAll(".price");
let itogo = conteiner.querySelector(".itogo");

function totalPrice() {
  let itogo = conteiner.querySelector(".itogo");
  let products = JSON.parse(localStorage.getItem("korzina2") || "[]");

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    // console.log(products[i]);

    let price = parseFloat(products[i].discount);
    let count = parseFloat(products[i].count);

    let t = price * count;

    total += t;
  }

  itogo.innerHTML = `${total} сум`;
}

totalPrice();

const logo = document.querySelector("svg");

logo.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/src/html/index.html";
  logo.style.cursor = "pointer";
});

logo.addEventListener("mouseenter", () => {
  logo.style.cursor = "pointer";
});
