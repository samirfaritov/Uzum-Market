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

window.addEventListener('click', (event) => { 
  event.preventDefault()
  let minus = document.querySelector(".minus");
  // let price = document.querySelectorAll(".price");
  if (event.target.dataset.action === "plus") {
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector(".count");
    counter.innerHTML++;
    let a = JSON.parse(localStorage.getItem("korzina2") || "[]");
    
    let p = parseInt(a[0].discount);
    
    let total = p * parseInt(counter.innerHTML);
    
    // console.log(event.target.closest('.price'));
    
    // let r = parseInt(event.target.contains('.price'))
    
    
    // if (event.target.closest('.price')) {
      //   console.log('click');
      // }
      
      // for (let i = 0; i < price.length; i++) {
        //   price[i].innerHTML = `${total} сум`;
        // }
        
        // price.innerHTML = `${total} сум`;
        
        minus.style.color = "#000";
      }
      
      if (event.target.dataset.action === "minus") {
        const counterWrapper = event.target.closest(".kol");
        const counter = counterWrapper.querySelector(".count");
        counter.innerHTML--;
        
        let a = JSON.parse(localStorage.getItem("korzina2") || "[]");
        
        let p = parseInt(a[0].discount);
        
    let total = p * parseInt(counter.innerHTML);
    // price.innerHTML = `${total} сум`;
    
    if (counter.innerHTML <= 1) {
      counter.innerHTML = "1";
      minus.style.color = "#ccc";
    }
    
    // if (counter.innerHTML == 1) {
      //   price.innerHTML = total
      // }
    }
    
    const counterWrapper = event.target.closest(".kol");
    const counter = counterWrapper.querySelector("[data-counter]");
    let item = event.target.closest('.item')
    
    let id = item.dataset.id

    console.log(id);
    console.log(counter);

    
    if (id == id) {
      console.log(counter++);
    }
    
    // const itemCart = item.querySelector(`[data-id="${item.id}"]`)
    
    // if (itemCart) {
    //   let counterElem = itemCart.querySelector('[data-counter]')
    //   counterElem.innerText = parseInt(counterElem.innerText) + parseInt(item.dataset.counter)
    // } 
  })

let date = document.querySelectorAll('.date2')

for (let i = 0; i < date.length; i++) {
  date[i].innerHTML = new Date().getDate() + 1
}

const price = document.querySelector(".price");
const itogo = document.querySelector('.itogo')

// itogo.innerHTML += price.innerHTML

let item = document.querySelectorAll('.item')
let tovar = document.querySelector('.tovar')

tovar.innerHTML = item.length

