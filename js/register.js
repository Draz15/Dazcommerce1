let username = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let subBtn = document.getElementById("btn");
// end values section

window.onload = () => {
    username.value = ""
    email.value = ""
    password.value = ""
}

//  ==============================
// check validity of data 
//  ==============================

subBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (username.value === "" || password.value === "" || email.value === "") {
        if (username.value === "") {
            alert("Pls enter username")
        } else if (password.value === "") {
            alert("Pls enter Your Password")
        } else if (password.value.length < 6) {
            alert("Password must be at least 6 characters")
        } if (!email.value.includes("@")) {
            alert("Please enter a valid email")
        }
        else {
            alert("Pls enter Your Email")
        }

    } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("email", email.value);
        sessionStorage.setItem("userdata", username.value);
        setTimeout(() => {
            location = "login.html"
        }, 500);
    }
})
