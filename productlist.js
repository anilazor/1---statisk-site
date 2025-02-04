const listContainer = document.querySelector(".card_grid");
// fetch(`https://kea-alt-del.dk/t7/api/products`)
const categoryProducts = new URLSearchParams(window.location.search).get("category");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${categoryProducts}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products

    .map(
      (product) => `<a href="product.html?id=${product.id}">
      <div class="product_card">
            <img src= "https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"/>
            <label class="sale_label ${product.discount && "show"}">-${product.discount}% sale!</label>
            <label class="soldout_label ${product.soldout && "show"}">Sold out</label>
            <div class="card_text">
              <div class="product_label">
                <label>${product.productdisplayname}</label>
              </div>
              <div class="price_tag">
                <h3>${product.price},-</h3>
              </div>
            </div>
          </div>
          </a>`
    )
    .join("");
  listContainer.innerHTML = markup;
}
