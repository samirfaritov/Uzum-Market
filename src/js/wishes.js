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

const wishes = document.querySelector(".skidka");

function kashtan() {
  let arr = JSON.parse(localStorage.getItem("arr") || "[]");
  for (let i = 0; i < arr.length; i++) {
    let todoHtml = `
      <div class="item" data-id="${arr[i].id}">
      <div class="img">
        <div class="heart">
          <svg
            data-v-ff0a7354=""
            width="20"
            height="20"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="like"
            class="ui-icon"
          >
            <path
              d="M5.45 0.169434C8.01792 0.169434 9.5 2.32178 9.5 2.32178C9.5 2.32178 10.985 0.169434 13.55 0.169434C16.205 0.169434 18.5 2.23943 18.5 5.11943C18.5 9.34995 12.0604 13.7892 9.86509 15.7297C9.65819 15.9126 9.34179 15.9126 9.13488 15.7297C6.94056 13.7903 0.5 9.34976 0.5 5.11943C0.5 2.23943 2.795 0.169434 5.45 0.169434Z"
              fill="#8967F0"
            ></path>
          </svg>
        </div>
        <img src="${arr[i].img[0]}" alt="" class="img2" />
        <div class="flex">
          <div class="aks"></div>
          <div class="aks2"></div>
        </div>
      </div>
      <p class="name">${arr[i].name}</p>
      <div class="flex">
        <div class="grade">
          <i class="bx bxs-star" style="color: yellow"></i>
          <span class="grade2">${arr[i].grade}</span>
        </div>
        <p class="otziv">
          (${arr[i].review} <span class="otziv2">отзыв</span>)
        </p>
      </div>
      <div class="katta">
        <p class="kredit">${arr[i].kredit} сум/мес</p>
      </div>
      <div class="katta2">
        <del class="price">${arr[i].discount} сум</del>
      </div>
      <p class="price2">${arr[i].price} сум</p>
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
    wishes.insertAdjacentHTML("beforeend", todoHtml);
  }
}
kashtan();

window.addEventListener("click", (e) => {
  e.preventDefault();

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
  }

  if (e.target.closest(".heart")) {
    let heart = JSON.parse(localStorage.getItem("arr") || "[]");

    // console.log(heart);

    let item = e.target.closest(".item");

    let id = item.dataset.id;

    let a = heart.filter((item) => item.id !== id);

    console.log(a);

    localStorage.setItem("arr", JSON.stringify(a));
    console.log(wishes.children);

    for (let i = 0; i < wishes.children.length; i++) {
      wishes.children[i].remove(a);
    }
    kashtan()
  }
});