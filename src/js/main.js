export let state = {
  products: [],
  add: [],
};

export let floo = {
  products: [],
  add: [],
};

export let rek = {
  products: [],
  add: [],
};

export let elec = {
  products: [],
  add: [],
};

export let tech = {
  products: [],
};

export let mar = {
  products: [],
  add: [],
};

export let air = {
  products: [],
  add: [],
};

export let bea = {
  products: [],
  add: [],
};
export let fam = {
  products: [],
  add: [],
};

export let rep = {
  products: [],
  add: [],
};

export let inst = {
  products: [],
  add: [],
};

export const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/products");

  return (state.products = response.data);
};

getTodo();

export const getTodo2 = async () => {
  let response = await axios.get("http://localhost:5055/Shoes");

  return (floo.products = response.data);
};

getTodo2();

export const getTodo3 = async () => {
  let response = await axios.get("http://localhost:5055/Recommendations");

  return (rek.products = response.data);
};

getTodo3();

export const getTodo4 = async () => {
  let response = await axios.get("http://localhost:5055/Electronics");

  return (elec.products = response.data);
};

getTodo4();

export const getTodo5 = async () => {
  let response = await axios.get("http://localhost:5055/technique");

  return (tech.products = response.data);
};

getTodo5();

export const getTodo6 = async () => {
  let response = await axios.get("http://localhost:5055/market");

  return (mar.products = response.data);
};

getTodo6();

export const getTodo7 = async () => {
  let response = await axios.get("http://localhost:5055/Air");

  return (air.products = response.data);
};

getTodo7();

export const getTodo8 = async () => {
  let response = await axios.get("http://localhost:5055/beauty");

  return (bea.products = response.data);
};

getTodo8();

export const getTodo9 = async () => {
  let response = await axios.get("http://localhost:5055/family");

  return (fam.products = response.data);
};

getTodo9();

export const getTodo10 = async () => {
  let response = await axios.get("http://localhost:5055/repair");

  return (rep.products = response.data);
};

getTodo10();

export const getTodo11 = async () => {
  let response = await axios.get("http://localhost:5055/Installment");

  return (inst.products = response.data);
};

getTodo11();

// console.log(state.products);

export let interval;

export const skidka = document.querySelector(".skidka");
export const flo = document.querySelector(".flo");
export const rekomenduyem = document.querySelector(".rekomenduyem");
export const elektronika = document.querySelector(".elektronika");
export const texnika = document.querySelector(".texnika");
export const bozor = document.querySelector(".bozor");
export const vozdux = document.querySelector(".vozdux");
export const uxod = document.querySelector(".uxod");
export const family = document.querySelector(".family");
export const beauty = document.querySelector(".beauty");
export const rasrochka = document.querySelector(".rasrochka2");

export function getProducts() {
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
          <div class="item" data-id="${item.id}"  data-count="${item.count1}">
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

      flo.insertAdjacentHTML("beforeend", todoHtml);
    });
    rek.products.forEach((item) => {
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

      rekomenduyem.insertAdjacentHTML("beforeend", todoHtml);
    });
    elec.products.forEach((item) => {
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

      elektronika.insertAdjacentHTML("beforeend", todoHtml);
    });
    tech.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      // console.log(item);
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

      texnika.insertAdjacentHTML("beforeend", todoHtml);
    });
    mar.products.forEach((item) => {
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

      bozor.insertAdjacentHTML("beforeend", todoHtml);
    });
    air.products.forEach((item) => {
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

      vozdux.insertAdjacentHTML("beforeend", todoHtml);
    });
    bea.products.forEach((item) => {
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

      uxod.insertAdjacentHTML("beforeend", todoHtml);
    });
    fam.products.forEach((item) => {
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

      family.insertAdjacentHTML("beforeend", todoHtml);
    });
    rep.products.forEach((item) => {
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

      beauty.insertAdjacentHTML("beforeend", todoHtml);
    });
    inst.products.forEach((item) => {
      if ((item.length = 1)) {
        clearInterval(interval);
      }
      // console.log(item);
      let todoHtml = `
            <div class="item" data-id="${item.id}" data-count="${item.count1}">
            <div class="img">
            <div class="heart">
            <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
            </div>
            <img src="${item.img[0]}" alt="" class="img2" />
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

        let a = massive.filter((item2) => {
          if (item2.id == item.dataset.id) {
            return item2.img;
          }
        });
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
      }

      if (e.target.closest(".basket")) {
        let item = e.target.closest(".item");
        let obj = {
          id: item.dataset.id,
          img: item.querySelector("img").getAttribute("src"),
          name: item.querySelector(".name").innerHTML,
        };
        localStorage.setItem("korzina", JSON.stringify(obj));

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

  let elec2 = document.querySelector(".elec");
  let bit = document.querySelector(".bit");

  let rax = document.querySelector(".rax");
  elec2.addEventListener("mouseenter", () => {
    rax.style.positionAbsolute;

    rax.style.width = "90px";
  });

  let rax2 = document.querySelector(".rax2");
  bit.addEventListener("mouseenter", () => {
    rax2.style.positionAbsolute;

    rax2.style.width = "112px";
  });
}
