export function headerControl() {
    const header = document.querySelector("header");
    const cartImage = document.querySelector(".header__cart-btn")

    window.addEventListener("scroll", function (e) {
        if (this.scrollY > 100) {
            header.classList.add("header--active");
       
        } else {
            header.classList.remove("header--active");
        }
    });
}
