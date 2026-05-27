// start display content available in sideBar
import './data.js'

export let sideBar = document.querySelector(".sidebar");
export let back_shop = document.querySelector(".back-shop");
export let payment = document.querySelector(".payment-section");
export let X_sign = document.querySelectorAll(".x-sign");
export let content = document.querySelector(".cart-container");
export let overlay = document.querySelector(".overlay");
export let cartCount = document.querySelector(".badge");
export let cartBtn = document.querySelector(".cart");

// start right side bar section
export let userName = document.querySelector('#user');
export let bars = document.querySelector(".bars");
export let side_right = document.querySelector(".side-right");
export let side_right_name = document.querySelector(".side-right-name");

bars.onclick = () => side_right.classList.toggle("active")
side_right_name.innerHTML = localStorage.getItem("username")

// end right side bar section
let sideProducts = JSON.parse(localStorage.getItem("sideProducts")) || [];

cartBtn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    overlay.classList.toggle("active");
}
)
function closeSidebar() {
    sideBar.classList.remove("active");
    side_right.classList.remove("active")
    overlay.classList.remove("active");
}

X_sign.forEach(item => item.onclick = closeSidebar);
back_shop?.addEventListener("click", () => {
    if (location.pathname == "/ProductsOrdered.html") location = "index.html"
    else closeSidebar()
});
overlay?.addEventListener("click", closeSidebar);

// display data automatically when the user open site

export function sidebarProductsTemplate(item) {
    return `
        <div class="cart-item mb-5 ">
            <div class="cart-content d-flex justify-content-center justify-content-between">
                <p>${item.price + " EGP"}</p>
                <p>${item.title}</p>
                <img src="${item.URL}" alt="" class="w-25 border">
            </div>

            <div class="cart-btns d-flex w-75">
                <a><i class="fa-regular fa-trash-can text-danger trash"></i></a>
                <a class='border w-25 text-center text-muted addItem '>+</a>
                <span>${item.quantity}</span>
                <a class='border w-25 text-center text-muted minusItem' >&#8722;</a>
            </div>
        </div>
    `;
}

export function renderCart() {

    content.innerHTML = sideProducts.map(sidebarProductsTemplate).join("")

    if (sideProducts.length > 0) {

        cartCount.style.display = "block"
        payment.style.display = "flex";
        cartCount.innerHTML = sideProducts.length;

        let TotalPrice = document.querySelector(".TotalPrice")
        TotalPrice.innerHTML = sideProducts.reduce((accumulator, curr) => accumulator + curr.price * curr.quantity, 0) + " EGP"
    }
    else {
        cartCount.style.display = "none"
        payment.style.display = "none";
    };
}

export function addToCart(price, title, URL) {

    // checking if the item exist or not

    let exist = sideProducts.find(item => item.title == title)

    if (exist) exist.quantity++

    else sideProducts.push({ title: title, price: price, URL: URL, quantity: 1 })

    // saving data in localStorage in form of string 

    localStorage.setItem("cartCount", sideProducts.length)
    localStorage.setItem("sideProducts", JSON.stringify(sideProducts))

    // update data displayed

    cartCount.innerHTML = localStorage.getItem("cartCount")
    renderCart()
}

// to make add to cart global

window.addToCart = addToCart;

// adding and minus and deleting quantity of item

export function cartEvents() {

    content.addEventListener("click", e => {
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

        localStorage.setItem("sideProducts", JSON.stringify(sideProducts))
        localStorage.setItem("cartCount", sideProducts.length)


        cartCount.innerHTML = localStorage.getItem("cartCount")

        renderCart()
    })
}

// log_Out from the app and clear all the data saved

document.addEventListener("DOMContentLoaded", () => {
    const LogOut = document.querySelectorAll(".LogOut");
    LogOut.forEach(item => item.onclick = () => {
        localStorage.clear();
        sessionStorage.clear()
        location.href = "login.html"
    })
}) 
