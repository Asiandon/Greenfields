// Mobile Navigation Menu Toggle
function myFunction() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}

// Smooth scroll animation for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.getAttribute("href") !== "#") return;
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
