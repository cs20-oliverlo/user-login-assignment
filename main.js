// Variables
let usernameCheck = document.getElementById("username");
let passwordCheck = document.getElementById("password");

// Event Listeners
document.getElementById("login-btn").addEventListener("click", login);

// Function
function login() {
    if (usernameCheck === "admin" && passwordCheck === "1234") {
        alert("login successful");
    } else {
        alert("nonono");
    }
}