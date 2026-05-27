import { sidebarProductsTemplate, renderCart, cartCount } from "../modules/cart.js";

let links = document.getElementById("link");
let userName = document.querySelector('#user'); // add this at the top
let user_info = document.getElementById("user_info");
let product_items = document.getElementById("product-items");
let content = document.querySelectorAll(".cart-container");
let ship_cost = document.querySelector(".Shipping");

links.style.display = "none";
user_info.style.display = "flex";
userName.innerHTML = localStorage.getItem("username");
userName.style.fontSize = "22px";
userName.style.fontWeight = "bold";

let sideProducts = JSON.parse(localStorage.getItem("sideProducts")) || []
// check if there's orders ro display the page
if (sideProducts.length > 0) {

    renderCart()
    function renderPayment() {
        // display products ordered on the sideBar and page body

        content.forEach(item => item.innerHTML = sideProducts.map(sidebarProductsTemplate).join(""));

            //  display total price of products on sidebar and body

            let itemsPrice = sideProducts.reduce((accumulator, curr) => accumulator + curr.price * curr.quantity, 0)
            let TotalPrice = document.querySelectorAll(".TotalPrice");
            let PriceWithCost = document.querySelector(".PriceWithCost");
            if (itemsPrice > 0) {
                TotalPrice.forEach(item => item.innerHTML = itemsPrice + " EGP")
                ship_cost.innerHTML = 100 + " EGP"
                PriceWithCost.innerHTML = itemsPrice + 100 + " EGP"
            } else {
                TotalPrice.forEach(item => item.innerHTML = "00")
                ship_cost.innerHTML = "00"
                PriceWithCost.innerHTML = "00"
            }
    }
    renderPayment()

    // adding and minus and deleting quantity of item

    content.forEach(item => item.addEventListener("click", e => {
        let title = e.target.closest(".cart-item").querySelector("p:nth-child(2)").innerHTML;
        let exist = sideProducts.find(item => item.title == title);


        if (e.target.classList.contains("addItem")) {
            exist.quantity++
        }
        // minusItem from quantity
        else if (e.target.classList.contains("minusItem")) {
            if (exist.quantity > 1) {
                exist.quantity--
            } else {
                sideProducts = sideProducts.filter(item => item.title != exist.title)
            }
        } else if (e.target.classList.contains("trash")) {
            sideProducts = sideProducts.filter(item => item.title != exist.title)
        }
        // save data changed

        localStorage.setItem("cartCount", sideProducts.length)
        localStorage.setItem("sideProducts", JSON.stringify(sideProducts))


        cartCount.innerHTML = localStorage.getItem("cartCount")
        renderPayment()
        renderCart()
    }))

} else {
    location = "index.html"
}