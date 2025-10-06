document.addEventListener('DOMContentLoaded', function() {
    let themes = document.getElementById('themes');
    let darkMode = document.getElementById('dark-mode');
    let lightMode = document.getElementById('light-mode');
    const body = document.body;

            const savedTheme = localStorage.getItem("theme");
            if (savedTheme === "dark") {
                body.classList.add("dark-mode");
                themes.style.rotate = "180deg";
            }

            darkMode.addEventListener("click", () => {
                body.classList.add("dark-mode");
                themes.style.rotate = "180deg";
                localStorage.setItem("theme", "dark");
            });

            lightMode.addEventListener("click", () => {
                body.classList.remove("dark-mode");
                themes.style.rotate = "0deg";
                localStorage.setItem("theme", "light");
            });
});