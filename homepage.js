const loginBtn = document.getElementById("loginBtn");
const loginForm = document.getElementById("loginForm");
const fullName = document.getElementById("fullName");

let formVisible = false;

loginBtn.addEventListener("click", () => {
    if (!formVisible) {
        loginForm.style.display = "block";
        formVisible = true;
        return;
    }

    const name = fullName.value.trim();

    if (name === "") {
        alert("Please enter your full name before logging in.");
        return;
    }

    alert("Welcome, " + name + "!");

    loginForm.style.display = "none";
    formVisible = false;
    fullName.value = "";
});