const loginBtn = document.getElementById("loginBtn"); // Gets the button that the user will click to log in
const loginForm = document.getElementById("loginForm");//Gets the form that contains the input field for the user’s name
const fullName = document.getElementById("fullName");//Gets the text input where the user will type their full name

let formVisible = false;//Creates a variable to track whether the form is currently visible or not

loginBtn.addEventListener("click", () => { //Adds a click event listener to the login button
    if (!formVisible) //Checks if the form is not visible yet
    {
        loginForm.style.display = "block";//If it’s hidden, shows the form
        formVisible = true;//Updates the state to indicate the form is now visible
        return;//Stops execution here so the rest of the code doesn’t run yet
    }

    const name = fullName.value.trim();//Gets the value typed by the user and removes extra spaces

    if (name === "") {
        alert("Please enter your full name before logging in.");//If the input is empty, shows an alert and stops execution
        return;//
    }

    alert("Welcome, " + name + "!");//Shows a welcome message using the name the user typed

    loginForm.style.display = "none";//Hides the form after a successful login
    formVisible = false;//Updates the state again to mark the form as hidden
    fullName.value = "";//Clears the text input for the next time
});