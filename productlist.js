const listContainer = document.querySelector(".card_grid");
const categoryName = new URLSearchParams(window.location.search).get("category");

document.querySelectorAll("button").forEach((button) => button.addEventListener("click", showFiltered));
function showFiltered() {
  const filter = this.dataset.gender;
  if (filter == "All") {
    showProducts(allData);
  } else {
    fraction = allData.filter((product) => product.gender === filter);
    showProducts(fraction);
  }
}

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${categoryName}&start=14&limit=40`)
  .then((response) => response.json())
  .then((json) => {
    allData = json;
    showProducts(allData);
  });

function showProducts(data) {
  const markup = data
    .map(
      (element) => `
      
      <a href="product.html?id=${element.id}">
      <div class="product_card ${element.soldout && "soldout show"}">
            <img src= "https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp"/>
            <label class="sale_label ${element.discount && "show"}">-${element.discount}% sale!</label>
            <label class="soldout_label ${element.soldout && "show"}">Sold out</label>
            <div class="card_text">
              <div class="product_label">
                <label>${element.brandname} | ${element.productdisplayname}</label>
              </div>
              <div class="price_tag">
              <div class="price_1">
                <h3 class="${element.discount && "dashed"}">${element.price},- </h3>
                </div>
                <div class="price_2">
                <h3 class="discountPrice ${element.discount && "show"}"> ${Math.floor(element.price * (element.discount / 100))},-</h3>
                </div>
              </div>
            </div>
          </div>
          </a>`
    )
    .join("");
  listContainer.innerHTML = markup;
}
