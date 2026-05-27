import { products, productTemplate } from './data.js';
import { restoreFavorites } from '../js/script.js';
import { FavoriteProducts } from '../js/Favorites.js';
// start search section

export let search_icon = document.querySelector('.search-icon');
export let search_area = document.querySelector('.search-area');
export let search_btn = document.querySelector('.search-btn');
export let search_input = document.querySelector('.search-input');
let userName = document.querySelector('#user');
 let home_link = document.querySelectorAll(".home-link");
let product_items = document.getElementById("product-items");

search_icon.onclick = () => {
    search_area.classList.remove('d-none');
    localStorage.setItem('searchOpen', "true")
}
if (localStorage.getItem('searchOpen')) {
    search_area.classList.remove('d-none');
}

home_link.forEach( item => item.addEventListener("click", () => {
    localStorage.removeItem('searchOpen');
    localStorage.removeItem('search_output');
}))

// display searched products even if i reload

let search_output = JSON.parse(localStorage.getItem("search_output")) || []

function displayProducts() {
    product_items.innerHTML = products.map(productTemplate).join("")
    restoreFavorites()
}

export function searchRender() {
    product_items.innerHTML = search_output.map(productTemplate).join("")
    restoreFavorites()
}

if (search_output && search_output.length > 0) searchRender()
else displayProducts()


// search for product entered by users

search_btn.onclick = () => {

    let user_search = search_input.value.toLowerCase()
    if (location.pathname.includes("index")) { search_output = products.filter(item => item.title.toLowerCase().includes(user_search)) }
    else if (location.pathname.includes("Favorites")) { search_output = FavoriteProducts.filter(item => item.title.toLowerCase().includes(user_search)) }
    localStorage.setItem("search_output", JSON.stringify(search_output))

    // display searched products
    product_items.innerHTML = search_output.map(productTemplate).join("")
    restoreFavorites()
}