document.getElementById("loginBtn").addEventListener("click", () => {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;

    if (name === "" || email === "") {
        alert("Please enter your name and email");
        return;
    }

    alert("Welcome, " + name + "!");
});