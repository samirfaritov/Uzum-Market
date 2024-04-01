let korzina = {
  arr: []
}

korzina.arr = JSON.parse(localStorage.getItem("korzina2") || "[]");

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
          <p class="count" data-counter>1</p>
          <button class="plyus" data-action="plus">+</button>
        </div>
      </div>
    </div>
    <div class="delete">
      <div class="flex">
        <svg
          data-v-1a3a46a8=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="ui-icon filled"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z"
            fill="black"
          ></path>
        </svg>
        <p>Удалить</p>
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

window.addEventListener('click', (event) => {
  event.preventDefault()
  let minus = document.querySelector(".minus");
  const price = document.querySelector(".price");
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML++;
    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");

    let p = parseInt(a[0].discount);

    let total = p * parseInt(counter.innerHTML);

    price.innerHTML = `${total} сум`;

    minus.style.color = "#000";
  }

  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML--;

    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");

    let p = parseInt(a[0].discount);

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
})