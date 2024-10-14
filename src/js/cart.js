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
  <div class="box boxx"></div>
  <br />
  <div class="item" data-id="${korzina.arr[i].id}">
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
  <del class="discount">${korzina.arr[i].total2} сум</del>
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
    const discount = counterWrapper.querySelector(".discount");
    counter.innerHTML++;
    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");
    let total = 0;
    let total2 = 0;
    for (let item of a) {
      if (item.id == counterWrapper.dataset.id) {
        let p = parseInt(item.discount);
        let d = parseInt(item.price);
        total = p * counter.innerHTML;
        total2 = d * counter.innerHTML;
        price.innerHTML = `${total} сум`;
        discount.innerHTML = `${total2} сум`;
        minus.style.color = "#000";
        item.total = total;
        item.total2 = total2;
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
    const discount = counterWrapper.querySelector(".discount");
    counter.innerHTML--;

    if (counter.innerHTML <= 0) {
      counter.innerHTML = 0;
      minus.style.color = "#ccc";
    }

    if (counter.innerHTML <= 1) {
      minus.style.color = "#ccc";
    }

    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");

    for (let item of a) {
      if (item.id == counterWrapper.dataset.id) {
        let total = item.total;
        let total2 = item.total2;
        let p = parseInt(item.discount);
        let d = parseInt(item.price);
        total = total - p;
        total2 = total2 - d;
        price.innerHTML = `${total} сум`;
        discount.innerHTML = `${total2} сум`;
        minus.style.color = "#000";
        item.total = total;
        item.total2 = total2;
        item.count = counter.innerHTML;
      }
    }

    localStorage.setItem("korzina2", JSON.stringify(a));

    localStorage.setItem("korzina2", JSON.stringify(a));

    totalPrice();
  }

  
  if (event.target.closest("#deleteBox")) {
    // let box = document.querySelectorAll(".boxx")
    // box.forEach((item) => {
    //   item.remove()
    // })

    let deleteBox = event.target.closest("#deleteBox");

    let item = deleteBox.closest(".item").remove();
    let item2 = deleteBox.closest(".item");

    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");

    let delet = a.filter((i) => i.id !== parseInt(item2.dataset.id));
    localStorage.setItem("korzina2", JSON.stringify(delet));

    totalPrice();
  }
});

let date = document.querySelectorAll(".date2");

for (let i = 0; i < date.length; i++) {
  date[i].innerHTML = new Date().getDate() + 1;
}
let item = document.querySelectorAll(".item");
let tovar = document.querySelector(".tovar");
let tovar2 = document.querySelector(".tovar2");

tovar.innerHTML = item.length;
tovar2.innerHTML = item.length;

let conteiner = document.querySelector(".conteiner");
let price = conteiner.querySelectorAll(".price");
let itogo = conteiner.querySelector(".itogo");
let ekonom = conteiner.querySelector(".ekonom");

function totalPrice() {
  // let itogo = conteiner.querySelector(".itogo");
  // let ekonom = conteiner.querySelector(".ekonom");
  // let totalPrice2 = conteiner.querySelector(".total-price2");
  let products = JSON.parse(localStorage.getItem("korzina2") || "[]");

  let total = 0;
  // let total2 = 0;

  for (let i = 0; i < products.length; i++) {
    // console.log(products[i]);

    let price = parseFloat(products[i].discount);
    let count = parseFloat(products[i].count);

    let t = price * count;

    total += t;

    // let discount = parseFloat(products[i].price);

    // let d = discount * count

    // total2 += d
  }

  itogo.innerHTML = `${total} сум`;
  // totalPrice2.innerHTML = total2;
  // let ek = parseFloat((total2 -= total));

  // ekonom.innerHTML = ek;
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

let count2 = document.querySelectorAll(".count");

const of = document.querySelector(".of");
const of2 = document.querySelector(".of2");

for (let i = 0; i < count2.length; i++) {
  if (count2[i].innerHTML <= 1) {
    of.style.backgroundColor = "#7000ff";
    of2.style.color = "#fff";
  }
}
