document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});


/*This code waits for the webpage to fully load, then selects all buttons with 
the class toggle-btn. For each button, it listens for clicks and finds the element 
immediately after it in the HTML. When the button is clicked, it checks if that element 
is visible: if it is, it hides it; if it’s hidden, it shows it. 
This creates a simple toggle effect where each button can show or hide its own content.

Without document.addEventListener("DOMContentLoaded", () => {, if the script runs before the buttons exist in the HTML, 
it won’t find them and won’t work.*/