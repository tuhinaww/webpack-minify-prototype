import "./style.css"; // ✅ Webpack will now detect and process the CSS file
test
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
    });
});