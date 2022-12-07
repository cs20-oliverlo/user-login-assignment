// Variables

// Event Listener
document.getElementById("login-btn").addEventListener("click", login);

// Function
function login() {
    let usernameCheck = document.getElementById("username-in").value;
    let passwordCheck = document.getElementById("password-in").value;

    if (usernameCheck === "admin" && passwordCheck === "1234") {
        alert("Login Successful");
    } else if (usernameCheck !== "admin") {
        alert("Invalid Username");
    } else if (usernameCheck === "admin" && passwordCheck !== "1234") {
        alert("Invalid Password");
    }
}

// NOTE that there is a mistake in this code, the last "else if" is unneccesary because we can just say else!