const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-theme");

    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );

    themeToggle.querySelector("span").textContent =
        isLight ? "Light Mode" : "Dark Mode";
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formStatus.textContent =
        "The form is validated, but sending messages requires a backend or an authorized external service.";
});
