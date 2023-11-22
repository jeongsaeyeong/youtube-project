export function Togglemenu() {
    const headerToggle = document.querySelector(".mobile__menu");
    const headerlogo = document.querySelector(".header__logo");
    const headerNav = document.querySelector(".header");

    if (headerToggle) {
        headerToggle.addEventListener("click", () => {
            headerNav.classList.toggle("show");
        })

        headerlogo.addEventListener("click", () => {
            headerNav.classList.toggle("show");
        })
    }
}