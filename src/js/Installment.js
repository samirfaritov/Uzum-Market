export let state = {
  products: [],
  add: []
};

export const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/Installment");

  return (state.products = response.data);
};

getTodo();

// console.log(state);

export let interval;

export const rasrochka = document.querySelector(".rasrochka2");
// console.log(rasrochka);

export function getProducts() {
  interval = setInterval(() => {
    state.products.forEach((item) => {
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
      JSON.parse(localStorage.getItem("korzina2") || "{}");

      e.preventDefault();
      if (e.target.closest("img")) {
        let item = e.target.closest(".item");
        let obj = {
          id: item.dataset.id,
          img: item.querySelector("img").getAttribute("src"),
          name: item.querySelector(".name").innerHTML,
          grade: item.querySelector(".grade").innerHTML,
          kredit: item.querySelector(".kredit").innerHTML,
          price: item.querySelector(".price").innerHTML,
          review: item.querySelector(".otziv").innerHTML,
          discount: item.querySelector(".price2").innerHTML,
        };

        console.log(item);
        console.log(obj);

        localStorage.setItem("item", JSON.stringify(obj));
        location.href = "http://127.0.0.1:5500/src/html/categories.html";

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
        console.log(text);
        let item = e.target.closest(".item");
        let obj = {
          id: item.dataset.id,
        };

        let clicked = state.products.filter((item) => item.id == obj.id);
        text.classList.toggle("added");
        if (text.classList.contains("added")) {
          state.add.push(clicked[0]);
          localStorage.setItem("arr", JSON.stringify(state.add));
        } else {
          state.add = state.add.filter((item) => item.id !== clicked[0].id)
          localStorage.setItem("arr", JSON.stringify(state.add));
        }
      }
    });
    let basket = document.querySelectorAll(".basket");

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

let skidka = document.querySelector(".skidka");

skidka.addEventListener("mouseenter", () => {
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
