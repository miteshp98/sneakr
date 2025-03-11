function handleNavbar() {
    const body = document.querySelector("body");
    const navbar = document.querySelector("nav");

    body.addEventListener("click", function (e) {
        const toggleBtn = e.target.closest(".header__nav-btn");

        if (toggleBtn) {
            navbar.classList.toggle("header__nav--expand");
        } else {
            navbar.classList.remove("header__nav--expand");
            return;
        }
    });
}

const toggleNav = handleNavbar();
export default toggleNav;
