// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function () {

    // 1️⃣ Typing animation (using Typed.js)
    const typed = new Typed('#typed-text', {
        strings: ["Web Developer.", "Designer.", "Problem Solver."],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true
    });

    // 2️⃣ Highlight navigation link when scrolling
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 80) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // 3️⃣ Back to top button (simple)
    const topBtn = document.createElement("button");
    topBtn.textContent = "↑";
    topBtn.className = "top-btn";
    document.body.appendChild(topBtn);

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    // 4️⃣ Automatic year in footer
    const year = new Date().getFullYear();
    document.querySelector("footer p").innerHTML = `© ${year} My Portfolio`;
});
