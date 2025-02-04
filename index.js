const category_list = document.querySelector(".category_list");
const myCategory = new URLSearchParams(window.location.search).get("myCategory");
fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(categories) {
  console.log(categories);
  const markup = categories
    .map(
      (myCategory) => `<a href="productlist.html?category=${myCategory.category}"> 
        <ul>
            <div class="list_element">
              <li>${myCategory.category}</li>
            </div>
        </ul>
     </a>
        `
    )
    .join("");
  category_list.innerHTML = markup;
}
