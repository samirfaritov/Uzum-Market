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
                  <i class='bx bxs-heart' style='color:#ffffff'  ></i>
              </div>
              <img src="${item.img}" alt="">
              <div class="flex">
                  <div class="aks"></div>
                  <div class="aks2"></div>
              </div>
          </div>
          <p class="name">${item.name}</p>
          <div class="flex">
              <div class="grade">
                  <i class='bx bxs-star' style='color: yellow'></i> <span class="grade2">${item.grade}</span>
              </div>
              <p class="otziv">(${item.review} <span class="otziv2">отзыв</span>)</p>
          </div>
          <div class="katta">
              <p class="kredit">${item.kredit} сум/мес</p>
          </div>
          <div class="katta2">
              <del class="price">${item.discount} сум</del>
          </div>
          <p class="price2">${item.price} сум</p>
          <div class="basket">+<i class='bx bx-basket' ></i></div>
      </div>
          `;

    skidka.insertAdjacentHTML("beforeend", todoHtml);
  });
}, 1000);
