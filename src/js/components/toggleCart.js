function handleCart() {
    const cartToggleBtn = document.querySelector(".header__cart-btn");
    const cartCloseBtn = document.querySelector(".cart__close-btn");
    const cart = document.querySelector(".cart");

    cartToggleBtn.addEventListener("click", function (e) {
        checkIsOpen(cart);
    });

    cartCloseBtn.addEventListener("click", function (e) {
        checkIsOpen(cart);
    });
}

function checkIsOpen(cart) {
    if (cart.classList.contains("cart--open")) {
        cart.classList.remove("cart--open");
    } else {
        cart.classList.add("cart--open");
    }
}

const toggleCart = handleCart();
export default toggleCart;
