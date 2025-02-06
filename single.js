const productContainer = document.querySelector(".productContainer");
const productId = new URLSearchParams(window.location.search).get("id");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <figure>
        <img
src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp"
          alt="Produktbillede"
          class="productImage"
        />
       
      </figure>
      <section class="productDetails">
        <h2 class="productName">${data.brandname} | ${data.variantname}</h2>
        <div class="buy_section">
        <h3 class="product_price">${data.price},-</h3>
        <button class="buyButton">Add to cart</button>
        </div>
        <div>
        <p class="articleType"><span class="bold">Type:</span> ${data.articletype}</p>
        <p class="productCategory"><span class="bold">Category:</span> ${data.category}</p>
        </div>
        <div class="productDescription"><span class="bold">Description:</span>${data.description}</p>
        
      </section>
      
    `;
  });
