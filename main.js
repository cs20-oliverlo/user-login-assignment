// Variables

// Event Listener
document.getElementById("login-btn").addEventListener("click", login);

// Function
function login() {
    let usernameCheck = document.getElementById("username-in").value;
    let passwordCheck = document.getElementById("password-in").value;

    if (usernameCheck === "admin" && passwordCheck === "1234") {
        alert("Login SUCCESSFUL.");
    } else {
        alert("Login UNSUCCESSFUL.");
    }
}