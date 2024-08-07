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
  <div class="item Img1" data-id="${item.id}">
    <img
      src="${item.img[1]}"
      alt=""
    />
  </div>
  <div class="item Img2">
    <img
      src="${item.img[2]}"
      alt=""
    />
  </div>
  <div class="item Img3">
    <img
      src="${item.img[3]}"
      alt=""
    />
  </div>
  <div class="item img4">
    <img
      src="${item.img[4]}"
      alt=""
    />
  </div>
</div>
<div class="right">
  <div class="item activeImg">
    <img
      src="${item.img[0]}"
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
    <button class="plyus"  data-action="plus" >+</button>
  </div>
  <p class="nal">В наличии <span class="nalichie">${item.count1}</span></p>
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
}, 1000);

window.addEventListener("click", (event) => {
  let minus = document.querySelector(".minus");
  event.preventDefault();
  const price = document.querySelector(".price2");
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    // counter.innerHTML++;
    let a = JSON.parse(localStorage.getItem("item") || "{}");

    let p = parseInt(a.discount);

    let total = p * parseInt(counter.innerHTML);

    price.innerHTML = `${total} сум`;

    minus.style.color = "#000";

    if (parseInt(counter.innerHTML) >= item.count1) {
      counter.innerHTML = item.count1
    } else {
      counter.innerHTML++
    }
  }
  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML--;

    let a = JSON.parse(localStorage.getItem("item") || "{}");

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

  if (event.target.closest(".korzina")) {
    location.href = "http://127.0.0.1:5500/src/html/cart.html";

    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");
    let item = document.querySelector(".item");
    // console.log(item);

    let local = {
      id: parseInt(item.dataset.id),
      img: content.querySelector("img").getAttribute("src"),
      name: content.querySelector(".name").innerHTML,
      grade: content.querySelector(".grade").innerHTML,
      kredit: content.querySelector(".kredit").innerHTML,
      price: content.querySelector(".price").innerHTML,
      review: content.querySelector(".otziv").innerHTML,
      discount: parseInt(content.querySelector(".price2").innerHTML),
      count: parseInt(content.querySelector(".count").innerHTML),
      total: parseInt(content.querySelector(".price2").innerHTML),
      total2: parseInt(content.querySelector(".price").innerHTML),
    };

    a.push(local);


    let uniqueArray = a.filter(
      (obj, index, self) => index === self.findIndex((t) => t.id === obj.id)
      );

    localStorage.setItem("korzina2", JSON.stringify(uniqueArray));

    localStorage.setItem("id", JSON.stringify(local.id));
    localStorage.setItem("count", JSON.stringify(local.count));

    // if () {

    // }
    // id===id
    // count++
  }

  
let Img1 = document.querySelector('.Img1')
let Img2 = document.querySelector('.Img2')
let Img3 = document.querySelector('.Img3')
let Img4 = document.querySelector('.img4')

let activeImg = document.querySelector('.activeImg')

// console.log(activeImg);
// console.log(Img1);
// console.log(Img2);
// console.log(Img3);
// console.log(Img4);

  if (event.target.closest(".Img1")) {
    let src = activeImg.querySelector("img").getAttribute('src')
    let src2 = Img1.querySelector("img").getAttribute('src')
    activeImg.querySelector("img").setAttribute('src', src2)
    Img1.querySelector("img").setAttribute('src', src)
  }
  if (event.target.closest(".Img2")) {
    let src = activeImg.querySelector("img").getAttribute('src')
    let src2 = Img2.querySelector("img").getAttribute('src')
    activeImg.querySelector("img").setAttribute('src', src2)
    Img2.querySelector("img").setAttribute('src', src)
  }
  if (event.target.closest(".Img3")) {
    let src = activeImg.querySelector("img").getAttribute('src')
    let src2 = Img3.querySelector("img").getAttribute('src')
    activeImg.querySelector("img").setAttribute('src', src2)
    Img3.querySelector("img").setAttribute('src', src)
  }
  if (event.target.closest(".Img4")) {
    let src = activeImg.querySelector("img").getAttribute('src')
    let src2 = Img4.querySelector("img").getAttribute('src')
    activeImg.querySelector("img").setAttribute('src', src2)
    Img4.querySelector("img").setAttribute('src', src)
  }
});

const kar = document.querySelector(".kar");

kar.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/src/html/cart.html";
});

const logo = document.querySelector("svg")

logo.addEventListener("click", () => {
  location.href = "http://127.0.0.1:5500/src/html/index.html"
  logo.style.cursor = "pointer"
})

logo.addEventListener("mouseenter", () => {
  logo.style.cursor = "pointer"
})