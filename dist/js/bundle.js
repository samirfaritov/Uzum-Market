/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Installment.js":
/*!*******************************!*\
  !*** ./src/js/Installment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

      rasrochka.insertAdjacentHTML("beforeend", todoHtml);
    });
  }, 1000);
}


/***/ }),

/***/ "./src/js/air.js":
/*!***********************!*\
  !*** ./src/js/air.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, 1000);
}


/***/ }),

/***/ "./src/js/beauty.js":
/*!**************************!*\
  !*** ./src/js/beauty.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, 1000);
}


/***/ }),

/***/ "./src/js/electronics.js":
/*!*******************************!*\
  !*** ./src/js/electronics.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, 1000);
}


/***/ }),

/***/ "./src/js/family.js":
/*!**************************!*\
  !*** ./src/js/family.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, 1000);
}


/***/ }),

/***/ "./src/js/flo.js":
/*!***********************!*\
  !*** ./src/js/flo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      }, 1000);
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  
      skidka.insertAdjacentHTML("beforeend", todoHtml);
    });
  }, 1000);
    
} 


/***/ }),

/***/ "./src/js/market.js":
/*!**************************!*\
  !*** ./src/js/market.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, 1000);
}


/***/ }),

/***/ "./src/js/rekomenduyem.js":
/*!********************************!*\
  !*** ./src/js/rekomenduyem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, 1000);
}


/***/ }),

/***/ "./src/js/repair.js":
/*!**************************!*\
  !*** ./src/js/repair.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, 1000);
}


/***/ }),

/***/ "./src/js/technique.js":
/*!*****************************!*\
  !*** ./src/js/technique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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


_main__WEBPACK_IMPORTED_MODULE_0__.getTodo()
_main__WEBPACK_IMPORTED_MODULE_0__.interval
_main__WEBPACK_IMPORTED_MODULE_0__.skidka
_main__WEBPACK_IMPORTED_MODULE_0__.state
_main__WEBPACK_IMPORTED_MODULE_0__.getProducts()


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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map