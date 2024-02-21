export let state = {
  products: [],
};

export const getTodo = async () => {
  let response = await axios.get("http://localhost:5055/beauty");

  return (state.products = response.data);
};

getTodo();

export let interval;

export const uxod = document.querySelector(".uxod");

export function getProducts() {
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
                        <svg
                          data-v-ff0a7354=""
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          alt="like"
                          class="ui-icon"
                        >
                          <path
                            d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                            fill="white"
                            fill-opacity="0.8"
                          ></path>
                          <path
                            d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                            fill="#15151A"
                          ></path>
                        </svg>
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

      uxod.insertAdjacentHTML("beforeend", todoHtml);
    });

    window.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest(".item")) {
        location.href = 'http://127.0.0.1:5500/src/html/categories.html'
        // let item = [];
        // item.push(state.products);

        // console.log(item);
        // localStorage.setItem("item", JSON.stringify());
        
      }
    });
  }, 1000);
}
