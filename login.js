async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Validate user from USERS array (GitHub Pages compatible)
    const validUser = USERS.find(
        u => u.username === username && u.password === password
    );

    if (validUser) {
        sessionStorage.setItem("loggedInUser", username);
        window.location.href = "movies.html";
    } else {
        error.textContent = "Invalid username or password";
    }
}
