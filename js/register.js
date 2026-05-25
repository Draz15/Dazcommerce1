let username = document.getElementById("user");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let subBtn = document.getElementById("btn");
// end values section

// ======================================
// save data in form of session 
// ======================================

if (sessionStorage.getItem("username")) {
    username.value = sessionStorage.getItem("username");
    email.value = sessionStorage.getItem("email");
    password.value = sessionStorage.getItem("password");
} else {
    username.value = ""
    email.value = ""
    password.value = ""
}

username.oninput = savedata;
email.oninput = savedata;
password.oninput = savedata;

function savedata() {
    sessionStorage.setItem("username", username.value)
    sessionStorage.setItem("email", email.value)
    sessionStorage.setItem("password", password.value)
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
        } else {
            alert("Pls enter Your Email")
        }

    } else {
       localStorage.setItem("username",username.value);
       localStorage.setItem("email",email.value);
       localStorage.setItem("password",password.value);

    setTimeout(() => {
        location = "login.html"
    }, 500);
    }
})
