/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/katalog.js":
/*!***************************!*\
  !*** ./src/js/katalog.js ***!
  \***************************/
/***/ (() => {

function katalog() {
  let item;

  const korzina = document.querySelector(".korzina");

  item = JSON.parse(localStorage.getItem("korzina") || "{}");

  let todoHtml = `
<i class='bx bx-x close' style='color:#6f6f6f' ></i>
<div class="img">
  <img src="${item.img}" alt="img">
</div>
<div class="p">
  <p class="tovar">Товар добавлен в корзину</p>
  <p class="name">${item.name}</p>
</div>
<p class="pere">ПЕРЕЙТИ В КОРЗИНУ</p>
`;

  korzina.insertAdjacentHTML("beforeend", todoHtml);

  let close = document.querySelector(".close");

  close.addEventListener("click", () => {
    korzina.style.display = "none";
  });

  let pere = document.querySelector(".pere");

  pere.addEventListener("click", () => {
    location.href = "http://127.0.0.1:5500/src/html/cart.html";
  });

  let skroll = document.querySelector(".skroll");

  skroll.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "";
  });

  let skidka2 = document.querySelector(".skidka");

  skidka2.addEventListener("mouseenter", () => {
    skroll.style.display = "flex";
  });

  let reklama = document.querySelector(".reklama");

  reklama.addEventListener("mouseenter", () => {
    skroll.style.display = "none";
  });

  const kar = document.querySelector(".kar");

  kar.addEventListener("click", () => {
    location.href = "http://127.0.0.1:5500/src/html/cart.html";
  });

  let katalog = document.querySelector(".kat");
  let k = document.querySelector("#k");
  let clear = document.querySelector("#clear");
  const katalog2 = document.querySelector(".katalog2");

  katalog.addEventListener("click", () => {
    katalog2.classList.toggle("none");
    clear.classList.toggle("none");
    k.classList.toggle("block");
  });

  var voyti = document.querySelector(".voyti");

  voyti.addEventListener("click", () => {
    console.log("click");
  });

  var izb = document.querySelector(".izb");

  izb.addEventListener("click", () => {
    console.log("click", "izb");
    location.href = "http://127.0.0.1:5500/src/html/wishes.html";
  });
}

katalog();


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   air: () => (/* binding */ air),
/* harmony export */   bea: () => (/* binding */ bea),
/* harmony export */   beauty: () => (/* binding */ beauty),
/* harmony export */   bozor: () => (/* binding */ bozor),
/* harmony export */   elec: () => (/* binding */ elec),
/* harmony export */   elektronika: () => (/* binding */ elektronika),
/* harmony export */   fam: () => (/* binding */ fam),
/* harmony export */   family: () => (/* binding */ family),
/* harmony export */   flo: () => (/* binding */ flo),
/* harmony export */   floo: () => (/* binding */ floo),
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   getTodo10: () => (/* binding */ getTodo10),
/* harmony export */   getTodo11: () => (/* binding */ getTodo11),
/* harmony export */   getTodo2: () => (/* binding */ getTodo2),
/* harmony export */   getTodo3: () => (/* binding */ getTodo3),
/* harmony export */   getTodo4: () => (/* binding */ getTodo4),
/* harmony export */   getTodo5: () => (/* binding */ getTodo5),
/* harmony export */   getTodo6: () => (/* binding */ getTodo6),
/* harmony export */   getTodo7: () => (/* binding */ getTodo7),
/* harmony export */   getTodo8: () => (/* binding */ getTodo8),
/* harmony export */   getTodo9: () => (/* binding */ getTodo9),
/* harmony export */   inst: () => (/* binding */ inst),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   mar: () => (/* binding */ mar),
/* harmony export */   rasrochka: () => (/* binding */ rasrochka),
/* harmony export */   rek: () => (/* binding */ rek),
/* harmony export */   rekomenduyem: () => (/* binding */ rekomenduyem),
/* harmony export */   rep: () => (/* binding */ rep),
/* harmony export */   skidka: () => (/* binding */ skidka),
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   tech: () => (/* binding */ tech),
/* harmony export */   texnika: () => (/* binding */ texnika),
/* harmony export */   uxod: () => (/* binding */ uxod),
/* harmony export */   vozdux: () => (/* binding */ vozdux)
/* harmony export */ });
let state = {
  products: [],
  add: [],
};

let floo = {
  products: [],
  add: [],
};

let rek = {
  products: [],
  add: [],
};

let elec = {
  products: [],
  add: [],
};

let tech = {
  products: [],
};

let mar = {
  products: [],
  add: [],
};

let air = {
  products: [],
  add: [],
};

let bea = {
  products: [],
  add: [],
};
let fam = {
  products: [],
  add: [],
};

let rep = {
  products: [],
  add: [],
};

let inst = {
  products: [],
  add: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/products");

  return (state.products = response.data);
};

getTodo();

const getTodo2 = async () => {
  let response = await axios.get("http://localhost:5055/Shoes");

  return (floo.products = response.data);
};

getTodo2();

const getTodo3 = async () => {
  let response = await axios.get("http://localhost:5055/Recommendations");

  return (rek.products = response.data);
};

getTodo3();

const getTodo4 = async () => {
  let response = await axios.get("http://localhost:5055/Electronics");

  return (elec.products = response.data);
};

getTodo4();

const getTodo5 = async () => {
  let response = await axios.get("http://localhost:5055/technique");

  return (tech.products = response.data);
};

getTodo5();

const getTodo6 = async () => {
  let response = await axios.get("http://localhost:5055/market");

  return (mar.products = response.data);
};

getTodo6();

const getTodo7 = async () => {
  let response = await axios.get("http://localhost:5055/Air");

  return (air.products = response.data);
};

getTodo7();

const getTodo8 = async () => {
  let response = await axios.get("http://localhost:5055/beauty");

  return (bea.products = response.data);
};

getTodo8();

const getTodo9 = async () => {
  let response = await axios.get("http://localhost:5055/family");

  return (fam.products = response.data);
};

getTodo9();

const getTodo10 = async () => {
  let response = await axios.get("http://localhost:5055/repair");

  return (rep.products = response.data);
};

getTodo10();

const getTodo11 = async () => {
  let response = await axios.get("http://localhost:5055/Installment");

  return (inst.products = response.data);
};

getTodo11();

// console.log(state.products);

let interval;

const skidka = document.querySelector(".skidka");
const flo = document.querySelector(".flo");
const rekomenduyem = document.querySelector(".rekomenduyem");
const elektronika = document.querySelector(".elektronika");
const texnika = document.querySelector(".texnika");
const bozor = document.querySelector(".bozor");
const vozdux = document.querySelector(".vozdux");
const uxod = document.querySelector(".uxod");
const family = document.querySelector(".family");
const beauty = document.querySelector(".beauty");
const rasrochka = document.querySelector(".rasrochka2");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
          <div class="item" data-id="${item.id}" data-count="${item.count1}">
          <div class="img">
          <div class="heart">
          <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
          </div>
          <img src="${item.img[0]}" alt="" />
          <div class="flex">
          <div class="aks"></div>
            <div class="aks2"></div>
          </div>
        </div>
        <p class="name">${item.name}</p>
        <div class="flex">
          <div class="grade">
            <i class="bx bxs-star" style="color: yellow"></i>
            <span class="grade2">${item.grade}</span>
          </div>
          <p class="otziv">
          (${item.review} <span class="otziv2">отзыв</span>)
          </p>
          </div>
          <div class="katta">
          <p class="kredit">${item.kredit} сум/мес</p>
          </div>
        <div class="katta2">
          <del class="price">${item.discount} сум</del>
        </div>
        <p class="price2">${item.price} сум</p>
        <div class="basket">
        <svg
        data-v-40da8b10=""
        width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ui-icon add-cart-icon"
          >
          <path
              d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
              fill="black"
              ></path>
              <path
              d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
              fill="black"
            ></path>
            </svg>
        </div>
        </div>
            `;
      skidka.insertAdjacentHTML("beforeend", todoHtml);
    });
    floo.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
          <div class="item" data-id="${item.id}">
          <div class="img">
          <div class="heart">
          <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
          </div>
          <img src="${item.img}" alt="" />
          <div class="flex">
            <div class="aks"></div>
            <div class="aks2"></div>
          </div>
        </div>
        <p class="name">${item.name}</p>
        <div class="flex">
          <div class="grade">
            <i class="bx bxs-star" style="color: yellow"></i>
            <span class="grade2">${item.grade}</span>
          </div>
          <p class="otziv">
            (${item.review} <span class="otziv2">отзыв</span>)
          </p>
        </div>
        <div class="katta">
          <p class="kredit">${item.kredit} сум/мес</p>
        </div>
        <div class="katta2">
          <del class="price">${item.discount} сум</del>
        </div>
        <p class="price2">${item.price} сум</p>
        <div class="basket">
          <svg
            data-v-40da8b10=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ui-icon add-cart-icon"
          >
            <path
              d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
              fill="black"
            ></path>
            <path
              d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
              fill="black"
            ></path>
          </svg>
        </div>
        </div>
            `;

      flo.insertAdjacentHTML("beforeend", todoHtml);
    });
    rek.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                <div class="item" data-id="${item.id}">
                <div class="img">
                <div class="heart">
                <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
                </div>
                <img src="${item.img}" alt="" />
                <div class="flex">
                  <div class="aks"></div>
                  <div class="aks2"></div>
                </div>
              </div>
              <p class="name">${item.name}</p>
              <div class="flex">
                <div class="grade">
                  <i class="bx bxs-star" style="color: yellow"></i>
                  <span class="grade2">${item.grade}</span>
                </div>
                <p class="otziv">
                  (${item.review} <span class="otziv2">отзыв</span>)
                </p>
              </div>
              <div class="katta">
                <p class="kredit">${item.kredit} сум/мес</p>
              </div>
              <div class="katta2">
                <del class="price">${item.discount} сум</del>
              </div>
              <p class="price2">${item.price} сум</p>
              <div class="basket">
                <svg
                  data-v-40da8b10=""
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ui-icon add-cart-icon"
                >
                  <path
                    d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                    fill="black"
                  ></path>
                  <path
                    d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              </div>
                  `;

      rekomenduyem.insertAdjacentHTML("beforeend", todoHtml);
    });
    elec.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                  <div class="item" data-id="${item.id}">
                  <div class="img">
                  <div class="heart">
                  <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
                  </div>
                  <img src="${item.img}" alt="" />
                  <div class="flex">
                    <div class="aks"></div>
                    <div class="aks2"></div>
                  </div>
                </div>
                <p class="name">${item.name}</p>
                <div class="flex">
                  <div class="grade">
                    <i class="bx bxs-star" style="color: yellow"></i>
                    <span class="grade2">${item.grade}</span>
                  </div>
                  <p class="otziv">
                    (${item.review} <span class="otziv2">отзыв</span>)
                  </p>
                </div>
                <div class="katta">
                  <p class="kredit">${item.kredit} сум/мес</p>
                </div>
                <div class="katta2">
                  <del class="price">${item.discount} сум</del>
                </div>
                <p class="price2">${item.price} сум</p>
                <div class="basket">
                  <svg
                    data-v-40da8b10=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ui-icon add-cart-icon"
                  >
                    <path
                      d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                </div>
                    `;

      elektronika.insertAdjacentHTML("beforeend", todoHtml);
    });
    tech.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      // console.log(item);
      let todoHtml = `
              <div class="item" data-id="${item.id}">
              <div class="img">
              <div class="heart">
              <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
              </div>
              <img src="${item.img}" alt="" />
              <div class="flex">
                <div class="aks"></div>
                <div class="aks2"></div>
              </div>
            </div>
            <p class="name">${item.name}</p>
            <div class="flex">
              <div class="grade">
                <i class="bx bxs-star" style="color: yellow"></i>
                <span class="grade2">${item.grade}</span>
              </div>
              <p class="otziv">
                (${item.review} <span class="otziv2">отзыв</span>)
              </p>
            </div>
            <div class="katta">
              <p class="kredit">${item.kredit} сум/мес</p>
            </div>
            <div class="katta2">
              <del class="price">${item.discount} сум</del>
            </div>
            <p class="price2">${item.price} сум</p>
            <div class="basket">
              <svg
                data-v-40da8b10=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ui-icon add-cart-icon"
              >
                <path
                  d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                  fill="black"
                ></path>
                <path
                  d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            </div>
                `;

      texnika.insertAdjacentHTML("beforeend", todoHtml);
    });
    mar.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                  <div class="item" data-id="${item.id}">
                  <div class="img">
                  <div class="heart">
                  <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
                  </div>
                  <img src="${item.img}" alt="" />
                  <div class="flex">
                    <div class="aks"></div>
                    <div class="aks2"></div>
                  </div>
                </div>
                <p class="name">${item.name}</p>
                <div class="flex">
                  <div class="grade">
                    <i class="bx bxs-star" style="color: yellow"></i>
                    <span class="grade2">${item.grade}</span>
                  </div>
                  <p class="otziv">
                    (${item.review} <span class="otziv2">отзыв</span>)
                  </p>
                </div>
                <div class="katta">
                  <p class="kredit">${item.kredit} сум/мес</p>
                </div>
                <div class="katta2">
                  <del class="price">${item.discount} сум</del>
                </div>
                <p class="price2">${item.price} сум</p>
                <div class="basket">
                  <svg
                    data-v-40da8b10=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ui-icon add-cart-icon"
                  >
                    <path
                      d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                </div>
                    `;

      bozor.insertAdjacentHTML("beforeend", todoHtml);
    });
    air.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                    <div class="item" data-id="${item.id}">
                    <div class="img">
                    <div class="heart">
                    <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
                    </div>
                    <img src="${item.img}" alt="" />
                    <div class="flex">
                      <div class="aks"></div>
                      <div class="aks2"></div>
                    </div>
                  </div>
                  <p class="name">${item.name}</p>
                  <div class="flex">
                    <div class="grade">
                      <i class="bx bxs-star" style="color: yellow"></i>
                      <span class="grade2">${item.grade}</span>
                    </div>
                    <p class="otziv">
                      (${item.review} <span class="otziv2">отзыв</span>)
                    </p>
                  </div>
                  <div class="katta">
                    <p class="kredit">${item.kredit} сум/мес</p>
                  </div>
                  <div class="katta2">
                    <del class="price">${item.discount} сум</del>
                  </div>
                  <p class="price2">${item.price} сум</p>
                  <div class="basket">
                    <svg
                      data-v-40da8b10=""
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="ui-icon add-cart-icon"
                    >
                      <path
                        d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                        fill="black"
                      ></path>
                      <path
                        d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                  </div>
                      `;

      vozdux.insertAdjacentHTML("beforeend", todoHtml);
    });
    bea.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                      <div class="item" data-id="${item.id}">
                      <div class="img">
                      <div class="heart">
                      <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
                      </div>
                      <img src="${item.img}" alt="" />
                      <div class="flex">
                        <div class="aks"></div>
                        <div class="aks2"></div>
                      </div>
                    </div>
                    <p class="name">${item.name}</p>
                    <div class="flex">
                      <div class="grade">
                        <i class="bx bxs-star" style="color: yellow"></i>
                        <span class="grade2">${item.grade}</span>
                      </div>
                      <p class="otziv">
                        (${item.review} <span class="otziv2">отзыв</span>)
                      </p>
                    </div>
                    <div class="katta">
                      <p class="kredit">${item.kredit} сум/мес</p>
                    </div>
                    <div class="katta2">
                      <del class="price">${item.discount} сум</del>
                    </div>
                    <p class="price2">${item.price} сум</p>
                    <div class="basket">
                      <svg
                        data-v-40da8b10=""
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ui-icon add-cart-icon"
                      >
                        <path
                          d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                          fill="black"
                        ></path>
                        <path
                          d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                    </div>
                        `;

      uxod.insertAdjacentHTML("beforeend", todoHtml);
    });
    fam.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                        <div class="item" data-id="${item.id}">
                        <div class="img">
                        <div class="heart">
                        <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
                        </div>
                        <img src="${item.img}" alt="" />
                        <div class="flex">
                          <div class="aks"></div>
                          <div class="aks2"></div>
                        </div>
                      </div>
                      <p class="name">${item.name}</p>
                      <div class="flex">
                        <div class="grade">
                          <i class="bx bxs-star" style="color: yellow"></i>
                          <span class="grade2">${item.grade}</span>
                        </div>
                        <p class="otziv">
                          (${item.review} <span class="otziv2">отзыв</span>)
                        </p>
                      </div>
                      <div class="katta">
                        <p class="kredit">${item.kredit} сум/мес</p>
                      </div>
                      <div class="katta2">
                        <del class="price">${item.discount} сум</del>
                      </div>
                      <p class="price2">${item.price} сум</p>
                      <div class="basket">
                        <svg
                          data-v-40da8b10=""
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="ui-icon add-cart-icon"
                        >
                          <path
                            d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                            fill="black"
                          ></path>
                          <path
                            d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                      </div>
                          `;

      family.insertAdjacentHTML("beforeend", todoHtml);
    });
    rep.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                        <div class="item" data-id="${item.id}">
                        <div class="img">
                        <div class="heart">
                        <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
                        </div>
                        <img src="${item.img}" alt="" />
                        <div class="flex">
                          <div class="aks"></div>
                          <div class="aks2"></div>
                        </div>
                      </div>
                      <p class="name">${item.name}</p>
                      <div class="flex">
                        <div class="grade">
                          <i class="bx bxs-star" style="color: yellow"></i>
                          <span class="grade2">${item.grade}</span>
                        </div>
                        <p class="otziv">
                          (${item.review} <span class="otziv2">отзыв</span>)
                        </p>
                      </div>
                      <div class="katta">
                        <p class="kredit">${item.kredit} сум/мес</p>
                      </div>
                      <div class="katta2">
                        <del class="price">${item.discount} сум</del>
                      </div>
                      <p class="price2">${item.price} сум</p>
                      <div class="basket">
                        <svg
                          data-v-40da8b10=""
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="ui-icon add-cart-icon"
                        >
                          <path
                            d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                            fill="black"
                          ></path>
                          <path
                            d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                      </div>
                          `;

      beauty.insertAdjacentHTML("beforeend", todoHtml);
    });
    inst.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      // console.log(item);
      let todoHtml = `
            <div class="item" data-id="${item.id}">
            <div class="img">
            <div class="heart">
            <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
            </div>
            <img src="${item.img}" alt="" class="img2" />
            <div class="flex">
              <div class="aks"></div>
              <div class="aks2"></div>
            </div>
          </div>
          <p class="name">${item.name}</p>
          <div class="flex">
            <div class="grade">
              <i class="bx bxs-star" style="color: yellow"></i>
              <span class="grade2">${item.grade}</span>
            </div>
            <p class="otziv">
              (${item.review} <span class="otziv2">отзыв</span>)
            </p>
          </div>
          <div class="katta">
            <p class="kredit">${item.kredit} сум/мес</p>
          </div>
          <div class="katta2">
            <del class="price">${item.discount} сум</del>
          </div>
          <p class="price2">${item.price} сум</p>
          <div class="basket">
            <svg
              data-v-40da8b10=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ui-icon add-cart-icon"
              id="add-cart-icon"
            >
              <path
                d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                fill="black"
              ></path>
              <path
                d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                fill="black"
              ></path>
            </svg>
          </div>
          </div>
              `;

      rasrochka.insertAdjacentHTML("beforeend", todoHtml);
    });
    window.addEventListener("click", async (e) => {
      let massive = state.products.concat(
        floo.products,
        rek.products,
        elec.products,
        tech.products,
        mar.products,
        air.products,
        bea.products,
        fam.products,
        rep.products,
        inst.products
      );

      JSON.parse(localStorage.getItem("korzina2") || "{}");

      e.preventDefault();
      if (e.target.closest("img")) {
        let item = e.target.closest(".item");

        let a = massive.filter(item2 => {
          if (item2.id == item.dataset.id) {
            return item2.img
          }
        })
        let obj = {
          id: parseInt(item.dataset.id),
          img: a[0].img,
          name: item.querySelector(".name").innerHTML,
          grade: item.querySelector(".grade").innerHTML,
          kredit: item.querySelector(".kredit").innerHTML,
          price: item.querySelector(".price").innerHTML,
          review: item.querySelector(".otziv").innerHTML,
          discount: item.querySelector(".price2").innerHTML,
          count1: parseInt(item.dataset.count),
        };

        localStorage.setItem("item", JSON.stringify(obj));
        location.href = "http://127.0.0.1:5500/src/html/categories.html";

        console.log(obj);

        // let response = await axios.post(`http://localhost:5055/korzina`, {
        //   img: item.querySelector("img").getAttribute("src"),
        //   name: item.querySelector(".name").innerHTML,
        //   discount: item.querySelector(".price2").innerHTML,
        //   price:  item.querySelector(".price").innerHTML
        // });
      }

      if (e.target.closest(".basket")) {
        let item = e.target.closest(".item");
        let obj = {
          id: item.dataset.id,
          img: item.querySelector("img").getAttribute("src"),
          name: item.querySelector(".name").innerHTML,
        };
        localStorage.setItem("korzina", JSON.stringify(obj));

        // let state = {
        //   products: [],
        // };

        // interval = setInterval(() => {
        //   const getTodo = async () => {
        //     let response = await axios.get("http://localhost:5055/korzina");

        //     return (state.products = response.data);
        //   };

        //   getTodo();

        // })

        // console.log(state);

        let a = JSON.parse(localStorage.getItem("korzina2") || "[]");

        // let b =  a.filter(item => {
        //   item.id !== id
        // })

        let item2 = e.target.closest(".item");
        let obj2 = {
          count: 1,
          id: item2.dataset.id,
          img: item2.querySelector("img").getAttribute("src"),
          name: item2.querySelector(".name").innerHTML,
          price: item2.querySelector(".price").innerHTML,
          discount: item2.querySelector(".price2").innerHTML,
        };

        a.push(obj2);

        localStorage.setItem("korzina2", JSON.stringify(a));
      }

      if (e.target.closest(".heart")) {
        const text = e.target.closest("#heart");
        let item = e.target.closest(".item");
        let obj = {
          id: item.dataset.id,
        };
        
        let clicked = massive.filter((item) => item.id == obj.id);
        text.classList.toggle("added");
        let h = {
          heart: "#7000ff",
          //  heart: item.querySelector(".heart")
        };

        localStorage.setItem("heart", JSON.stringify(h));
        
        if (text.classList.contains("added")) {
          state.add.push(clicked[0]);
          localStorage.setItem("arr", JSON.stringify(state.add));
          let getHeart = JSON.parse(localStorage.getItem("heart") || "{}");
          text.style.color = getHeart.heart;
        } else {
          state.add = state.add.filter((item) => item.id !== clicked[0].id);
          localStorage.setItem("arr", JSON.stringify(state.add));
          text.style.color = "#fff";
        }

        // console.log(item.querySelector(".heart").style);
      }
    });
    let basket = document.querySelectorAll(".basket");
    let korzina = document.querySelector("#add-cart-icon");

    for (let i = 0; i < basket.length; i++) {
      basket[i].onclick = function () {
        korzina.style.display = "flex";
      };
    }

    interval = setInterval(() => {
      korzina.style.display = "none";
    }, 6000);
  }, 1000);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _katalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./katalog */ "./src/js/katalog.js");
/* harmony import */ var _katalog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_katalog__WEBPACK_IMPORTED_MODULE_1__);


_main__WEBPACK_IMPORTED_MODULE_0__.getTodo()
_main__WEBPACK_IMPORTED_MODULE_0__.interval
_main__WEBPACK_IMPORTED_MODULE_0__.skidka
_main__WEBPACK_IMPORTED_MODULE_0__.state
_main__WEBPACK_IMPORTED_MODULE_0__.getProducts()
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo2()
_main__WEBPACK_IMPORTED_MODULE_0__.floo
_main__WEBPACK_IMPORTED_MODULE_0__.flo
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo3()
_main__WEBPACK_IMPORTED_MODULE_0__.rek
_main__WEBPACK_IMPORTED_MODULE_0__.rekomenduyem
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo4()
_main__WEBPACK_IMPORTED_MODULE_0__.elec
_main__WEBPACK_IMPORTED_MODULE_0__.elektronika
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo5()
_main__WEBPACK_IMPORTED_MODULE_0__.tech
_main__WEBPACK_IMPORTED_MODULE_0__.texnika
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo6()
_main__WEBPACK_IMPORTED_MODULE_0__.bozor
_main__WEBPACK_IMPORTED_MODULE_0__.mar
_main__WEBPACK_IMPORTED_MODULE_0__.air
_main__WEBPACK_IMPORTED_MODULE_0__.vozdux
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo7()
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo8()
_main__WEBPACK_IMPORTED_MODULE_0__.bea
_main__WEBPACK_IMPORTED_MODULE_0__.vozdux
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo9()
_main__WEBPACK_IMPORTED_MODULE_0__.fam
_main__WEBPACK_IMPORTED_MODULE_0__.family
_main__WEBPACK_IMPORTED_MODULE_0__.rep
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo10()
_main__WEBPACK_IMPORTED_MODULE_0__.beauty
_main__WEBPACK_IMPORTED_MODULE_0__.getTodo11()
_main__WEBPACK_IMPORTED_MODULE_0__.inst
_main__WEBPACK_IMPORTED_MODULE_0__.rasrochka

;

_katalog__WEBPACK_IMPORTED_MODULE_1__.katalog
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map