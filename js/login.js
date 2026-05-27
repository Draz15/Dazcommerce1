let username = document.getElementById("userName");
let password = document.getElementById("pass");
let subBtn = document.getElementById("btn");
// end values section

//  ==============================
// make tha username full and pass empty 
//  ==============================

window.onload = () => {
    username.value =  sessionStorage.getItem("userdata") || ""
    password.value = ""
}

const getUsername = localStorage.getItem('username') || "";
const getPassword = localStorage.getItem('password') || "";

// ========================================
// check the validity of data on submit
// ========================================

subBtn.addEventListener("click", (e) => {
    e.preventDefault()

    if (!getUsername || !getPassword) {
        alert("No account found, please register first")
        location.href = "register.html"
        return
    }

    if (username.value !== getUsername.trim() || password.value.trim() !== getPassword.trim()) {
        alert("Pls Enter the right Data")
    } else {
        setTimeout(() => {
            sessionStorage.clear()
            location = "index.html"
        }, 500);

    }
})
