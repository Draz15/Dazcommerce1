import { renderCart, cartEvents } from '../modules/cart.js';
import { products, productTemplate } from '../modules/data.js';
import '../modules/search.js';

let links = document.getElementById("link");
let user_info = document.getElementById("user_info");
let userData = document.getElementById("user-data");
export let product_items = document.getElementById("product-items");
export let userName = document.querySelector('#user');

// end links section

// checking if the user registered or not 

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        links.style.display = "none";
        user_info.style.display = "flex";
        userName.innerHTML = localStorage.getItem("username");
        userName.style.fontSize = "22px";
        userName.style.fontWeight = "bold";
    }else {
        links.style.display = "flex";
        user_info.style.display = "none";
        userName.innerHTML = "";
    }


// start add to Favorites section

let FavoritesProducts = JSON.parse(localStorage.getItem("FavoriteProducts")) || []

// looping at each item

function addToFavorites(price, title, URL, description, btn) {

    let heart_icon = btn.querySelector(".heart-icon");
    let exists = FavoritesProducts.find(item => item.title == title)

    heart_icon.classList.toggle("active")
    if (FavoritesProducts.some(item => item.title === title)) {
        FavoritesProducts = FavoritesProducts.filter(el => el.title != title)
    }
    else if (heart_icon.classList.contains("active") && !exists) { FavoritesProducts.push({ title: title, price: price, URL: URL, description: description }) }



    localStorage.setItem("FavoriteProducts", JSON.stringify(FavoritesProducts))
    restoreFavorites()
}
window.addToFavorites = addToFavorites

export function restoreFavorites() {
    let FavoritesProducts = JSON.parse(localStorage.getItem("FavoriteProducts")) || []
    let product_items = document.querySelectorAll(".product-item")
    product_items.forEach(item => {
        let heart_icon = item.querySelector(".heart-icon")
        let title = item.querySelector(".cart-title").textContent.trim()
        if (FavoritesProducts.find(el => el.title == title)) {
            heart_icon.classList.add("active")
        }
    })

    localStorage.setItem("FavoriteProducts", JSON.stringify(FavoritesProducts))
}
//  start  display content available in sideBar left and right side bar that appear in the phone
renderCart();
cartEvents();
//  end  display content available in sideBar left and  right side bar that appear in the phone
