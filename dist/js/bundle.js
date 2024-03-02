/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Installment.js":
/*!*******************************!*\
  !*** ./src/js/Installment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   rasrochka: () => (/* binding */ rasrochka),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/Installment");

  return (state.products = response.data);
};

getTodo();

// console.log(state);

let interval;

const rasrochka = document.querySelector(".rasrochka2");
// console.log(rasrochka);

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      // console.log(item);
      let todoHtml = `
            <div class="item" id="${item.id}">
            <div class="img">
            <div class="heart">
              <svg
                data-v-ff0a7354=""
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="like"
                class="ui-icon"
              >
                <path
                  d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                  fill="white"
                  fill-opacity="0.8"
                ></path>
                <path
                  d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                  fill="#15151A"
                ></path>
              </svg>
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

      rasrochka.insertAdjacentHTML("beforeend", todoHtml);
    });

    window.addEventListener("click", (e) => {
      e.preventDefault();

      if (e.target.closest(".item")) {
        let item = e.target.closest(".item");

        let obj = {
          img: item.querySelector('img').getAttribute('src'),
          name: item.querySelector('.name').innerHTML,
          grade: item.querySelector('.grade').innerHTML,
          kredit: item.querySelector('.kredit').innerHTML,
          price: item.querySelector('.price').innerHTML,
          review: item.querySelector('.otziv').innerHTML,
          discount: item.querySelector('.price2').innerHTML
        };

        localStorage.setItem("item", JSON.stringify(obj));
        console.log(obj);
        location.href = 'http://127.0.0.1:5500/src/html/categories.html'
      }
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/air.js":
/*!***********************!*\
  !*** ./src/js/air.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   vozdux: () => (/* binding */ vozdux)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/Air");

  return (state.products = response.data);
};

getTodo();

let interval;

const vozdux = document.querySelector(".vozdux");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                    <div class="item">
                    <div class="img">
                    <div class="heart">
                      <svg
                        data-v-ff0a7354=""
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="like"
                        class="ui-icon"
                      >
                        <path
                          d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                          fill="white"
                          fill-opacity="0.8"
                        ></path>
                        <path
                          d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                          fill="#15151A"
                        ></path>
                      </svg>
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


    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest(".item")) {
        // location.href = 'http://127.0.0.1:5500/src/html/categories.html'
        // let item = [];
        // item.push(state.products);

        // console.log(item);
        // localStorage.setItem("item", JSON.stringify());
        
      }
    });
  }, 1000);
}




/***/ }),

/***/ "./src/js/beauty.js":
/*!**************************!*\
  !*** ./src/js/beauty.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   uxod: () => (/* binding */ uxod)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/beauty");

  return (state.products = response.data);
};

getTodo();

let interval;

const uxod = document.querySelector(".uxod");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                      <div class="item">
                      <div class="img">
                      <div class="heart">
                        <svg
                          data-v-ff0a7354=""
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          alt="like"
                          class="ui-icon"
                        >
                          <path
                            d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                            fill="white"
                            fill-opacity="0.8"
                          ></path>
                          <path
                            d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                            fill="#15151A"
                          ></path>
                        </svg>
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

    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest(".item")) {
        location.href = 'http://127.0.0.1:5500/src/html/categories.html'
        // let item = [];
        // item.push(state.products);

        // console.log(item);
        // localStorage.setItem("item", JSON.stringify());
        
      }
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/categories.js":
/*!******************************!*\
  !*** ./src/js/categories.js ***!
  \******************************/
/***/ (() => {

let item;

item = JSON.parse(localStorage.getItem("item") || "{}");

let content = document.querySelector(".content");

let interval;

interval = setInterval(() => {
  if ((item.length = 1)) {
    clearInterval(interval);
  }

  let todoHtml = `
<div class="kategori">
<div class="left">
  <div class="item">
    <img
      src="${item.img}"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="${item.img}"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="${item.img}"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="${item.img}"
      alt=""
    />
  </div>
</div>
<div class="right">
  <div class="item">
    <img
      src="${item.img}"
      alt=""
    />
  </div>
</div>
</div>
<div class="kategori2">
<div class="flex">
  <div class="grade">
    <i class="bx bxs-star" style="color: yellow"></i>
    <span class="grade2" style=" color: #9c9c9c;">4.7</span>
  </div>
  <p class="otziv">
     <span class="otziv2" style=" color: #9c9c9c;">(${item.review} отзыв)</span>
  </p>
</div>
<br>
<p class="name" style="font-size: 25px; font-family: sans-serif;">${item.name}</p>
<br>
<div class="flex">
  <p style="font-style: 16px;">Продавец:</p>
  <a href="" style="font-style: 14px; color: #000;">Device.uz</a>
</div>
<br>
<div class="flex">
  <p style="font-style: 16px;">Доставка:</p>
  <p class="grade2" style=" color: #9c9c9c; font-size: 15px;">1 день, бесплатно</p>
</div>
<br>
<br>
<div class="box"></div>
<br>
<br>
<p>Количество:</p>
<br>
<div class="kattta">
  <div class="kol">
    <button class="minus"  data-action="minus">-</button>
    <p class="count"  data-counter>1</p>
    <button class="plyus"  data-action="plus">+</button>
  </div>
  <p class="nal">В наличии 30</p>
</div>
<br>              
<p>Цена:</p>
<div class="katta2">
  <p class="price2">${item.discount}</p>
  <del class="price">${item.price}</del>
</div>
<br>
<div class="katta">
  <p class="kredit">От${item.kredit}</p>
  <p> в рассрочку</p>
  <i class='bx bx-chevron-right'></i>
</div>
<br>
<div class="dob">
  <button class="korzina">Добавить в корзину</button>
  <button class="klik">Купить в 1 клик</button>
</div>
<br>
<br>
<div class="buy">
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5C12.2402 4.5 11 5.88779 11 7.5H17C17 5.88779 15.7598 4.5 14 4.5ZM9.5 11.5V9H7.5V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33578 15 6 14.6642 6 14.25V8.25V7.5H6.75H9.5C9.5 5.11221 11.3598 3 14 3C16.6402 3 18.5 5.11221 18.5 7.5H21.25H22V8.25V21.75C22 22.9926 20.9926 24 19.75 24H15.25C14.8358 24 14.5 23.6642 14.5 23.25C14.5 22.8358 14.8358 22.5 15.25 22.5H19.75C20.1642 22.5 20.5 22.1642 20.5 21.75V9H18.5V11.5H17V9H11V11.5H9.5ZM14.2738 18.0323C14.5667 17.7395 14.5667 17.2646 14.2738 16.9717C13.9809 16.6788 13.506 16.6788 13.2131 16.9717L7.99548 22.1893L5.78034 19.9742C5.48744 19.6813 5.01257 19.6813 4.71967 19.9741C4.42678 20.267 4.42677 20.7419 4.71966 21.0348L7.46513 23.7803C7.60579 23.921 7.79655 24 7.99547 24C8.19438 24 8.38515 23.921 8.5258 23.7803L14.2738 18.0323Z" fill="#141415"></path></svg>
  <p>18745 человек купили на этой неделе</p>
</div>
<br>
<br>
<br>
<div class="tovar">
  <p>Кратко о товаре:</p>
  <ul>
    <li><p>900 мл</p></li>
    <li><p>Произведено в Узбекистане</p></li>
    <li><p>Рафинированное и дезодорированное</p></li>
  </ul>
</div>
</div>
`;
  content.insertAdjacentHTML("beforeend", todoHtml);
}, 100);

window.addEventListener("click", (event) => {
  let price = document.querySelector(".price2");
  event.preventDefault();

  
  if (event.target.dataset.action === "plus") {
    console.log(price);

    let minus = document.querySelector(".minus");

    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML++;
    // price.innerHTML *= 2;
    
    var totalPrice = price * 2;

    price + totalPrice

    minus.style.color = "#000";
  }

  // if (event.target.dataset.action === "minus") {
  //   const counterWrapper = event.target.closest(".kol");
  //   const counter = counterWrapper.querySelector(".count");
  //   counter.innerHTML--;
  //   price.innerHTML /= 2;

  //   // totalCalc();
  //   if (counter.innerHTML <= 1) {
  //     counter.innerHTML = "1";
  //     minus.style.color = "#ccc";
  //   }

  //   // if (counter.innerHTML == 0) {
  //   //   price.innerHTML = price.innerHTML *2
  //   // }
  // }
});


/***/ }),

/***/ "./src/js/electronics.js":
/*!*******************************!*\
  !*** ./src/js/electronics.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elektronika: () => (/* binding */ elektronika),
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/Electronics");

  return (state.products = response.data);
};

getTodo();

let interval;

const elektronika = document.querySelector(".elektronika");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                  <div class="item">
                  <div class="img">
                  <div class="heart">
                    <svg
                      data-v-ff0a7354=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      alt="like"
                      class="ui-icon"
                    >
                      <path
                        d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                        fill="white"
                        fill-opacity="0.8"
                      ></path>
                      <path
                        d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                        fill="#15151A"
                      ></path>
                    </svg>
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


    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest(".item")) {
        location.href = 'http://127.0.0.1:5500/src/html/categories.html'
        // let item = [];
        // item.push(state.products);

        // console.log(item);
        // localStorage.setItem("item", JSON.stringify());
        
      }
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/family.js":
/*!**************************!*\
  !*** ./src/js/family.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   family: () => (/* binding */ family),
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/family");

  return (state.products = response.data);
};

getTodo();

let interval;

const family = document.querySelector(".family");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                        <div class="item">
                        <div class="img">
                        <div class="heart">
                          <svg
                            data-v-ff0a7354=""
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            alt="like"
                            class="ui-icon"
                          >
                            <path
                              d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                              fill="white"
                              fill-opacity="0.8"
                            ></path>
                            <path
                              d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                              fill="#15151A"
                            ></path>
                          </svg>
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

    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest(".item")) {
        // location.href = ''
        // let item = [];
        // item.push(state.products);

        // console.log(item);
        // localStorage.setItem("item", JSON.stringify());
        
      }
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/flo.js":
/*!***********************!*\
  !*** ./src/js/flo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flo: () => (/* binding */ flo),
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/Shoes");

  return (state.products = response.data);
};

getTodo();

let interval;

const flo = document.querySelector(".flo");

function getProducts() {
    interval = setInterval(() => {
        state.products.forEach((item) => {
          if ((item.length = 1)) {
            clearInterval(interval);
          }
          //   console.log(item);
          let todoHtml = `
              <div class="item">
              <div class="img">
              <div class="heart">
                <svg
                  data-v-ff0a7354=""
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="like"
                  class="ui-icon"
                >
                  <path
                    d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                    fill="white"
                    fill-opacity="0.8"
                  ></path>
                  <path
                    d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                    fill="#15151A"
                  ></path>
                </svg>
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
        
        // window.addEventListener("click", (e) => {
        //   e.preventDefault();
        //   if (e.target.closest(".item")) {
        //     // let item = [];
        //     // item.push(state.products);
    
        //     // console.log(item);
        //     // localStorage.setItem("item", JSON.stringify());
            
        //   }
        // });
      });
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   skidka: () => (/* binding */ skidka),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/products");

  return (state.products = response.data);
};

getTodo();

// console.log(state.products);

let interval;

const skidka = document.querySelector(".skidka");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
          <div class="item" data-item>
          <div class="img">
          <div class="heart">
            <svg
              data-v-ff0a7354=""
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="like"
              class="ui-icon"
            >
            <path
                d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                fill="white"
                fill-opacity="0.8"
                ></path>
                <path
                d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                fill="#15151A"
                ></path>
            </svg>
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
      skidka.insertAdjacentHTML("beforeend", todoHtml);
    });

    window.addEventListener("click", (e) => {
      e.preventDefault();

      console.log(e.target);
      // if (e.target.closest(".item")) {

      //   console.log('click');
      //   let item = e.target.closest(".item")

      //   console.log(item);
      //   localStorage.setItem("item", JSON.stringify(item));

      // location.href = "http://127.0.0.1:5500/src/html/categories.html";
      //   // let item = [];
      //   // item.push(state.products);

      //   // console.log(item);
      // }
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/market.js":
/*!**************************!*\
  !*** ./src/js/market.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bozor: () => (/* binding */ bozor),
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/market");

  return (state.products = response.data);
};

getTodo();

let interval;

const bozor = document.querySelector(".bozor");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                  <div class="item">
                  <div class="img">
                  <div class="heart">
                    <svg
                      data-v-ff0a7354=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      alt="like"
                      class="ui-icon"
                    >
                      <path
                        d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                        fill="white"
                        fill-opacity="0.8"
                      ></path>
                      <path
                        d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                        fill="#15151A"
                      ></path>
                    </svg>
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

    window.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.closest(".item"));
      // if (e.target.closest(".item")) {
        // location.href = 'http://127.0.0.1:5500/src/html/categories.html'
      //   // let item = [];
      //   // item.push(state.products);

      //   // console.log(item);
      //   // localStorage.setItem("item", JSON.stringify());
        
      // }
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/rekomenduyem.js":
/*!********************************!*\
  !*** ./src/js/rekomenduyem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   rekomenduyem: () => (/* binding */ rekomenduyem),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/Recommendations");

  return (state.products = response.data);
};

getTodo();

let interval;

const rekomenduyem = document.querySelector(".rekomenduyem");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                <div class="item">
                <div class="img">
                <div class="heart">
                  <svg
                    data-v-ff0a7354=""
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    alt="like"
                    class="ui-icon"
                  >
                    <path
                      d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                      fill="white"
                      fill-opacity="0.8"
                    ></path>
                    <path
                      d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                      fill="#15151A"
                    ></path>
                  </svg>
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

    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest(".item")) {
        // location.href = 'http://127.0.0.1:5500/src/html/categories.html'
        // let item = [];
        // item.push(state.products);

        // console.log(item);
        // localStorage.setItem("item", JSON.stringify());
        
      }
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/repair.js":
/*!**************************!*\
  !*** ./src/js/repair.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   beauty: () => (/* binding */ beauty),
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/repair");

  return (state.products = response.data);
};

getTodo();

let interval;

const beauty = document.querySelector(".beauty");

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      //   console.log(item);
      let todoHtml = `
                        <div class="item">
                        <div class="img">
                        <div class="heart">
                          <svg
                            data-v-ff0a7354=""
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            alt="like"
                            class="ui-icon"
                          >
                            <path
                              d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                              fill="white"
                              fill-opacity="0.8"
                            ></path>
                            <path
                              d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                              fill="#15151A"
                            ></path>
                          </svg>
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


    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest(".item")) {
        // location.href = 'http://127.0.0.1:5500/src/html/categories.html'
        // let item = [];
        // item.push(state.products);

        // console.log(item);
        // localStorage.setItem("item", JSON.stringify());
        
      }
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/technique.js":
/*!*****************************!*\
  !*** ./src/js/technique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts),
/* harmony export */   getTodo: () => (/* binding */ getTodo),
/* harmony export */   interval: () => (/* binding */ interval),
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   texnika: () => (/* binding */ texnika)
/* harmony export */ });
let state = {
  products: [],
};

const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/technique");

  return (state.products = response.data);
};

getTodo();

// console.log(state);

let interval;

const texnika = document.querySelector(".texnika");
// console.log(rasrochka);

function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      // console.log(item);
      let todoHtml = `
              <div class="item">
              <div class="img">
              <div class="heart">
                <svg
                  data-v-ff0a7354=""
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="like"
                  class="ui-icon"
                >
                  <path
                    d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                    fill="white"
                    fill-opacity="0.8"
                  ></path>
                  <path
                    d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                    fill="#15151A"
                  ></path>
                </svg>
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


    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest(".item")) {
        // location.href = 'http://127.0.0.1:5500/src/html/categories.html'
        // let item = [];
        // item.push(state.products);

        // console.log(item);
        // localStorage.setItem("item", JSON.stringify());
        
      }
    });
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
/* harmony import */ var _flo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flo */ "./src/js/flo.js");
/* harmony import */ var _rekomenduyem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rekomenduyem */ "./src/js/rekomenduyem.js");
/* harmony import */ var _electronics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./electronics */ "./src/js/electronics.js");
/* harmony import */ var _Installment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Installment */ "./src/js/Installment.js");
/* harmony import */ var _technique__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./technique */ "./src/js/technique.js");
/* harmony import */ var _market__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market */ "./src/js/market.js");
/* harmony import */ var _air__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./air */ "./src/js/air.js");
/* harmony import */ var _beauty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beauty */ "./src/js/beauty.js");
/* harmony import */ var _family__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./family */ "./src/js/family.js");
/* harmony import */ var _repair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./repair */ "./src/js/repair.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categories */ "./src/js/categories.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_categories__WEBPACK_IMPORTED_MODULE_11__);


_main__WEBPACK_IMPORTED_MODULE_0__.getTodo()
_main__WEBPACK_IMPORTED_MODULE_0__.interval
_main__WEBPACK_IMPORTED_MODULE_0__.skidka
_main__WEBPACK_IMPORTED_MODULE_0__.state
_main__WEBPACK_IMPORTED_MODULE_0__.getProducts()
// data.clickGet()


;

_flo__WEBPACK_IMPORTED_MODULE_1__.getTodo()
_flo__WEBPACK_IMPORTED_MODULE_1__.state
_flo__WEBPACK_IMPORTED_MODULE_1__.flo
_flo__WEBPACK_IMPORTED_MODULE_1__.interval
_flo__WEBPACK_IMPORTED_MODULE_1__.getProducts()


;

_rekomenduyem__WEBPACK_IMPORTED_MODULE_2__.getProducts()
_rekomenduyem__WEBPACK_IMPORTED_MODULE_2__.getTodo()
_rekomenduyem__WEBPACK_IMPORTED_MODULE_2__.interval
_rekomenduyem__WEBPACK_IMPORTED_MODULE_2__.rekomenduyem
_rekomenduyem__WEBPACK_IMPORTED_MODULE_2__.state

;

_electronics__WEBPACK_IMPORTED_MODULE_3__.getProducts()
_electronics__WEBPACK_IMPORTED_MODULE_3__.getTodo()
_electronics__WEBPACK_IMPORTED_MODULE_3__.interval
_electronics__WEBPACK_IMPORTED_MODULE_3__.elektronika
_electronics__WEBPACK_IMPORTED_MODULE_3__.state

;

_Installment__WEBPACK_IMPORTED_MODULE_4__.getProducts()
_Installment__WEBPACK_IMPORTED_MODULE_4__.getTodo()
_Installment__WEBPACK_IMPORTED_MODULE_4__.interval
_Installment__WEBPACK_IMPORTED_MODULE_4__.rasrochka
_Installment__WEBPACK_IMPORTED_MODULE_4__.state

;

_technique__WEBPACK_IMPORTED_MODULE_5__.getProducts()
_technique__WEBPACK_IMPORTED_MODULE_5__.getTodo()
_technique__WEBPACK_IMPORTED_MODULE_5__.interval
_technique__WEBPACK_IMPORTED_MODULE_5__.texnika
_technique__WEBPACK_IMPORTED_MODULE_5__.state

;

_market__WEBPACK_IMPORTED_MODULE_6__.getProducts()
_market__WEBPACK_IMPORTED_MODULE_6__.getTodo()
_market__WEBPACK_IMPORTED_MODULE_6__.interval
_market__WEBPACK_IMPORTED_MODULE_6__.bozor
_market__WEBPACK_IMPORTED_MODULE_6__.state


;

_air__WEBPACK_IMPORTED_MODULE_7__.getProducts()
_air__WEBPACK_IMPORTED_MODULE_7__.getTodo()
_air__WEBPACK_IMPORTED_MODULE_7__.interval
_air__WEBPACK_IMPORTED_MODULE_7__.bozor
_air__WEBPACK_IMPORTED_MODULE_7__.state


;

_beauty__WEBPACK_IMPORTED_MODULE_8__.getProducts()
_beauty__WEBPACK_IMPORTED_MODULE_8__.getTodo()
_beauty__WEBPACK_IMPORTED_MODULE_8__.interval
_beauty__WEBPACK_IMPORTED_MODULE_8__.uxod
_beauty__WEBPACK_IMPORTED_MODULE_8__.state

;

_family__WEBPACK_IMPORTED_MODULE_9__.getProducts()
_family__WEBPACK_IMPORTED_MODULE_9__.getTodo()
_family__WEBPACK_IMPORTED_MODULE_9__.interval
_family__WEBPACK_IMPORTED_MODULE_9__.family
_family__WEBPACK_IMPORTED_MODULE_9__.state

;

_repair__WEBPACK_IMPORTED_MODULE_10__.getProducts()
_repair__WEBPACK_IMPORTED_MODULE_10__.getTodo()
_repair__WEBPACK_IMPORTED_MODULE_10__.interval
_repair__WEBPACK_IMPORTED_MODULE_10__.beauty
_repair__WEBPACK_IMPORTED_MODULE_10__.state

;

_categories__WEBPACK_IMPORTED_MODULE_11__
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map