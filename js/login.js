let username = document.getElementById("user");
let password = document.getElementById("pass");
let subBtn = document.getElementById("btn");
// end values section

// ======================================
// save data in form of session 
// ======================================

if (sessionStorage.getItem("username")) {
    username.value = sessionStorage.getItem("username");
    password.value = sessionStorage.getItem("password");
} else {
    username.value = ""
    password.value = ""
}

username.oninput = savedata;
password.oninput = savedata;

function savedata() {
    sessionStorage.setItem("username", username.value)
    sessionStorage.setItem("password", password.value)
}

//  ==============================
// check input values data 
//  ==============================
const getUsername = localStorage.getItem('username') ;
const getPassword = localStorage.getItem('password') ;
subBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(username.value !== getUsername.trim()  || password.value.trim() !== getPassword.trim()){
     alert("Pls Enter the right Data")
    }else{
        setTimeout(() => {
            location = "index.html"
            
        }, 500);

    }
})
