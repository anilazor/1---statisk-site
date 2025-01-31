const listContainer = document.querySelector(".card_grid");
fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((response) => response.json())
  .then((data) => showList(data));
//   .then(showList);

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<a href="product.html">

      <div class="product_card">
            <img src= "https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"/>
            <div class="card_text">
              <div class="product_label">
                <label>${product.productdisplayname}</label>
              </div>
              <div class="price_tag">
                <h3>${product.price},-</h3>
              </div>
            </div>
          </div>
  
          </a>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
