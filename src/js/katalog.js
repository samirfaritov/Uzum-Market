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
    reklama.classList.toggle("block")
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
