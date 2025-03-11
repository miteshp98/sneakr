function handleCart() {
    const cartToggleBtn = document.querySelector(".header__cart-btn");
    const overlay = document.querySelector(".bg-overlay");
    const cart = document.querySelector(".cart");

    cartToggleBtn.addEventListener("click", (e) => {
        cart.classList.add("cart--open");
        overlay.classList.add("bg-overlay--active");
    });

    document.addEventListener("click", (e) => {
        const isCartClicked = cart.contains(e.target);
        const isToggleBtnClicked = cartToggleBtn.contains(e.target);
        const isCloseBtnClicked = e.target.closest(".cart__close-btn");

        if ((!isCartClicked && !isToggleBtnClicked) || isCloseBtnClicked) {
            cart.classList.remove("cart--open");
            overlay.classList.remove("bg-overlay--active");
        }
    });
}

const toggleCart = handleCart();
export default toggleCart;
