let korzina = {
  arr: [],
  id: 0,
};

korzina.arr = JSON.parse(localStorage.getItem("korzina2") || "[]");
korzina.id = JSON.parse(localStorage.getItem("id") || "0");
let  count = JSON.parse(localStorage.getItem("count") || "0");




let y = [];

const left = document.querySelector(".left");




for (let i = 0; i < korzina.arr.length; i++) {

  let todoHtml = `
  <br />
  <div class="box"></div>
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
  <p class="price">${korzina.arr[i].discount}</p>
  <del class="discount">${korzina.arr[i].price}</del>
  </div>
  </div>
  </div>
  <br />
  <br />
  `;

  left.insertAdjacentHTML("beforeend", todoHtml);
  
}



// const itemBox = document.querySelector(".item")

// const tovar = document.querySelector('.tovar')

// // tovar.innerHTML = itemBox.innerHTML.length

// console.log(itemBox.length);

window.addEventListener("click", (event) => {
  event.preventDefault();
  let minus = document.querySelector(".minus");
  // let price = document.querySelectorAll(".price");
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML++;
    let a = JSON.parse(localStorage.getItem("item") || "[]");

    let p = parseInt(a.discount);

    let total = p * counter.innerHTML;

    // console.log(event.target.closest('.price'));

    // let r = parseInt(event.target.contains('.price'))

    // if (event.target.closest('.price')) {
    //   console.log('click');
    // }

    // for (let i = 0; i < price.length; i++) {
    //   price[i].innerHTML = `${total} сум`;
    // }

    price.innerHTML = `${total} сум`;

    minus.style.color = "#000";
  }

  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML--;

    let a = JSON.parse(localStorage.getItem("item") || "[]");

    let p = parseInt(a.discount);

    let total = p * parseInt(counter.innerHTML);
    price.innerHTML = `${total} сум`;

    if (counter.innerHTML <= 1) {
      counter.innerHTML = "1";
      minus.style.color = "#ccc";
    }

    // if (counter.innerHTML == 1) {
    //   price.innerHTML = total
    // }
  }

  // const counterWrapper = event.target.closest(".kol");
  // const counter = counterWrapper.querySelector("[data-counter]");

  // if (event.target.closest("#deleteBox")) {
  //   // let a = JSON.parse(localStorage.getItem("korzina2") || "[]");
  //   // for (let i = 0; i < a.length; i++) {
  //   //   console.log(a[i].id);
  //   // }
  //   // let item = event.target.closest(".item");
  //   // let id = item.dataset.id;
  //   // console.log(id);
  //   // if () {
  //   // }
  // }

  // console.log(id);
  // console.log(counter);

  // if (id == id) {
  //   console.log(counter++);
  // }

  // const itemCart = item.querySelector(`[data-id="${item.id}"]`)

  // if (itemCart) {
  //   let counterElem = itemCart.querySelector('[data-counter]')
  //   counterElem.innerText = parseInt(counterElem.innerText) + parseInt(item.dataset.counter)
  // }

  // let local = {
  //   id: item.dataset.id,
  //   img: item.querySelector("img").getAttribute("src"),
  //   name: item.querySelector(".name").innerHTML,
  //   price: item.querySelector(".price").innerHTML,
  //   discount: item.querySelector(".discount").innerHTML,
  //   count: item.querySelector(".count").innerHTML
  // }

  if (event.target.closest(".item")) {
    a = JSON.parse(localStorage.getItem("korzina2") || "[]");

    for (let i = 0; i < a.length; i++) {
      let locaId = a[i].id;
      console.log(locaId, "localId");
      let item = event.target.closest(".item");

      let id = item.dataset.id;

      console.log(id, "id");
    }
  }
});

let date = document.querySelectorAll(".date2");

for (let i = 0; i < date.length; i++) {
  date[i].innerHTML = new Date().getDate() + 1;
}

const price = document.querySelector(".price");
const itogo = document.querySelector(".itogo");

// itogo.innerHTML += price.innerHTML

// let korzina2 = {
//   arr: [],
// };

let item = document.querySelectorAll(".item");
let tovar = document.querySelector(".tovar");

tovar.innerHTML = item.length;

for (let i = 0; i < item.length; i++) {
  let id = item[i].dataset.id;

  // let local = {
  //   id: item[i].dataset.id,
  //   price: item[i].querySelector(".price").innerHTML,
  //   discount: item[i].querySelector(".discount").innerHTML,
  //   count: item[i].querySelector(".count").innerHTML,
  // };

  // a.push(local);

  // localStorage.setItem("kor", JSON.stringify(a));
}

// korzina2.arr = JSON.parse(localStorage.getItem("kor") || "[]");

// for (let i = 0; i < korzina2.arr.length; i++) {
//   let todoHtml = `
//             <br />
//             <div class="box"></div>
//             <br />
//             <div class="item" data-id="${korzina2.arr[i].id}">
//             <input type="checkbox" />
//             <div class="salesman">
//             <img
//             src=""
//             alt=""
//             />
//             <p class="name">

//             </p>
//             <div class="k">
//             <div class="kol">
//             <button class="minus" data-action="minus">-</button>
//             <p class="count" data-counter>${korzina2.arr[i].count}</p>
//             <button class="plyus" data-action="plus">+</button>
//             </div>
//             </div>
//             </div>
//             <div class="delete">
//             <div class="flex" id="deleteBox">
//             <i class='bx bxs-trash' style='color:#'  ></i>
//             <p class="delet">Удалить</p>
//             </div>
//             <div class="katta">
//             <p class="price">${korzina2.arr[i].discount}</p>
//             <del class="discount">${korzina2.arr[i].price}</del>
//             </div>
//             </div>
//             </div>
//             <br />
//             <br />

//             `;

//   left.insertAdjacentHTML("beforeend", todoHtml);

//   console.log(korzina2.arr[i]);
// }
