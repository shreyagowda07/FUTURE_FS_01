```javascript
// =================================
// 1. UPDATE COPYRIGHT YEAR
// =================================

const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Shreya B Gowda. All Rights Reserved.`;
}


// =================================
// 2. ACTIVE NAVIGATION
// =================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// =================================
// 3. WELCOME MESSAGE
// =================================

console.log("Welcome to Shreya's Portfolio!");
console.log("Website loaded successfully.");
```