// start displaying products section

export let products = [
    {
        title: "Oppo Reno15",
        price: 15550,
        description: "Oppo Reno15 5G 256GB 12GB RAM Aurora White Dual Sim Smartphone",
        URL: "images/82c671267d54ac7794ff7facbee653f7.jpg",
    },
    {
        title: "Samsung Galaxy S24",
        price: 19000,
        description: "Samsung Galaxy S24 Ultra Phone - Titanium Grey, 256 GB, 2024",
        URL: "images/cb58a76f3396a4d4d9cef1749426f63d.jpg",
    },
    {
        title: "Acer Aspire Lite",
        price: 22500,
        description: "Acer Aspire Lite AL16-52P-526Z- NX.J5SEM.001 Laptop ,512 GB SSD ,16 GB ,Intel UHD Graphics.",
        URL: "images/d7b654747ba0adf05c0010a7f4f023fb.jpg",
    },
    {
        title: "Samsung 43 Inch Smart TV",
        price: 17000,
        description: "Samsung 43 Inch Smart TV , 4K UHD LED Built-In Receiver - 43U8000F",
        URL: "images/aa5e1e230a5889d51479f2afe46dae36.jpg",
    },
    {
        title: "Sharp Top Freezer",
        price: 30000,
        description: "Sharp Top Freezer Refrigerator , 385 Liter , Stainless Steel - SJ-PC48A(ST)",
        URL: "images/2e0eb592d5dbd4de612c03c20bebc68c.jpg",
    },
    {
        title: "Sony Wireless",
        price: 5000,
        description: "Sony Wireless Controller , White",
        URL: "images/e5c2607130e5ba8fac428739447d2506.jpg",
    },
    {
        title: "Samsung Galaxy S10",
        price: 14000,
        description: "Samsung Galaxy S10 5GUnlocked | 256GB & 512GB | Colors",
        URL: "images/b2fcc0cf24f041bdfd8b273a5d7cb6b2.jpg",
    },
    {
        title: "Samsung Galaxy Buds 3 Pro",
        price: 4600,
        description: "Samsung Galaxy Buds 3 Pro Earbuds, Silver - SM-R630",
        URL: "images/f296af5e83efbec62d935c9d60f1b20c.jpg",
    },
    {
        title: "Fresh Split Air",
        price: 35000,
        description: "Fresh Split Air Conditioner, 1.5 HP, Cooling Only - FUW12C/IW-AG, White",
        URL: "images/416efa07a4989f943cfa4d9e7c080cfa.jpg",
    }
]

export function productTemplate(item) {
    return `
<div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3 m-auto">
    <div class="product-item h-100 p-2 m-auto rounded-lg position-relative" style="width: 18rem;">
        <img class="w-75 m-auto d-block bg-light card-img-top"
             src="${item.URL}" alt="">
        <div class="card-body">
            <span class ='d-none cart-title'>${item.title}</span>
            <h5 class="card-title text-center">
                ${item.price  + " EGP"}
            </h5>
            <p class="card-text">
                ${item.description}
            </p>
            <div class="buttons d-flex flex-column position-absolute rounded-pill">
                <button class="item-cart btn rounded-circle text-light p-3"
                    onclick="addToCart('${item.price}', '${item.title}', '${item.URL}')">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <button class="btn p-3 rounded-circle text-light heart-btn d-block mt-2"onclick="addToFavorites('${item.price}', '${item.title}', '${item.URL}','${item.description}',this)">
                    <i class="fa-solid fa-heart heart-icon"></i>
                </button>
            </div>
        </div>
    </div>
</div>
`
}