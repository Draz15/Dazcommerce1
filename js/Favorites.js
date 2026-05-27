import {renderCart, cartEvents } from '../modules/cart.js';
import {productTemplate } from '../modules/data.js';
import {restoreFavorites} from './script.js';
import '../modules/search.js';

let links = document.getElementById("link");
let user_info = document.getElementById("user_info");
let userData = document.getElementById("user-data");
export let product_items = document.getElementById("product-items");
export let userName = document.querySelector('#user');
let row_style = document.querySelector('.no-favo');

links.style.display = "none";
user_info.style.display = "flex";
userName.innerHTML = localStorage.getItem("username");
userName.style.fontSize = "22px";
userName.style.fontWeight = "bold";


export let FavoriteProducts = JSON.parse(localStorage.getItem("FavoriteProducts")) || []
if(FavoriteProducts.length > 0){
    product_items.innerHTML = FavoriteProducts.map(productTemplate).join("")
}else{
    if(location.pathname.includes("Favorites")){product_items.innerHTML = "there are no Favorites yet !!!"
    row_style.classList.add("active")}
}
restoreFavorites()

//  start  display content available in sideBar left and right side bar that appear in the phone
renderCart();
cartEvents();
//  end  display content available in sideBar left and  right side bar that appear in the phone

const LogOut = document.querySelectorAll(".LogOut");
LogOut.forEach(item => item.onclick = () => { localStorage.clear(); location.reload() })