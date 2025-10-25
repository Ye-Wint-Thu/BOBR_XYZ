document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeContainers = document.querySelectorAll(".theme-toggle .themes"); // all theme toggles
    const savedTheme = localStorage.getItem("theme");

    // Apply saved theme
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeContainers.forEach((theme) => (theme.style.rotate = "180deg"));
    }

    // Attach listeners to each theme toggle
    themeContainers.forEach((theme) => {
        const darkMode = theme.querySelector("#dark-mode");
        const lightMode = theme.querySelector("#light-mode");

        darkMode.addEventListener("click", () => {
            body.classList.add("dark-mode");
            themeContainers.forEach((t) => (t.style.rotate = "180deg"));
            localStorage.setItem("theme", "dark");
        });

        lightMode.addEventListener("click", () => {
            body.classList.remove("dark-mode");
            themeContainers.forEach((t) => (t.style.rotate = "0deg"));
            localStorage.setItem("theme", "light");
        });
    });
});

//-------------------START SIDEBAR SHOW HIDE----------------------

const hide = document.querySelector("#hide");
const show = document.querySelector("#show");
const sidebar = document.querySelector(".sidebar");

function hideMenu() {
    sidebar.style.transform = "translateX(100%)";
    show.style.display = "block";
    hide.style.display = "none";
}

function showMenu() {
    sidebar.style.transform = "translateX(0)";
    show.style.display = "none";
    hide.style.display = "block";
}

//-------------------END SIDEBAR SHOW HIDE----------------------


// ------------------ SLIDABLE CATEGORY BAR ------------------

const categoryContainer = document.querySelector(".categories");
let isDown = false;
let startX;
let scrollLeft;

// Enable horizontal dragging for small screens
function enableCategorySlide() {
    if (window.innerWidth <= 900) { // you can adjust this breakpoint
        categoryContainer.style.overflowX = "auto";
        categoryContainer.style.cursor = "grab";

        categoryContainer.addEventListener("mousedown", (e) => {
            isDown = true;
            categoryContainer.classList.add("active");
            startX = e.pageX - categoryContainer.offsetLeft;
            scrollLeft = categoryContainer.scrollLeft;
            categoryContainer.style.cursor = "grabbing";
        });

        categoryContainer.addEventListener("mouseleave", () => {
            isDown = false;
            categoryContainer.classList.remove("active");
            categoryContainer.style.cursor = "grab";
        });

        categoryContainer.addEventListener("mouseup", () => {
            isDown = false;
            categoryContainer.classList.remove("active");
            categoryContainer.style.cursor = "grab";
        });

        categoryContainer.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - categoryContainer.offsetLeft;
            const walk = (x - startX) * 1.5; // scroll speed multiplier
            categoryContainer.scrollLeft = scrollLeft - walk;
        });

        // Touch support
        categoryContainer.addEventListener("touchstart", (e) => {
            isDown = true;
            startX = e.touches[0].pageX - categoryContainer.offsetLeft;
            scrollLeft = categoryContainer.scrollLeft;
        });

        categoryContainer.addEventListener("touchend", () => {
            isDown = false;
        });

        categoryContainer.addEventListener("touchmove", (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - categoryContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            categoryContainer.scrollLeft = scrollLeft - walk;
        });
    }
}

// Initialize and handle screen resize
enableCategorySlide();
window.addEventListener("resize", enableCategorySlide);


// ------------------ END SLIDABLE CATEGORY BAR ------------------

