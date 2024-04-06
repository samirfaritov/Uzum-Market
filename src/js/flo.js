export let state = {
  products: [],
};

export const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/Shoes");

  return (state.products = response.data);
};

getTodo();

export let interval;

export const flo = document.querySelector(".flo");

export function getProducts() {
    interval = setInterval(() => {
        state.products.forEach((item) => {
          if ((item.length = 1)) {
            clearInterval(interval);
          }
          //   console.log(item);
          let todoHtml = `
              <div class="item" data-id="${item.id}">
              <div class="img">
              <div class="heart">
              <i class='bx bxs-heart' style='color:#fff' id="heart"  ></i>
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