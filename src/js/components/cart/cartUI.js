import { getCart } from "./cart";
import { cartViewHtml, emptyCartHtml } from "../../utils/markupGenerator";

const cart = getCart();

export function updateCartUI(cart) {
    const cartContainer = document.querySelector(".cart__container");
    const cartTotal = updateCartTotal(cart);

    if (!cart) return;

    if (cart.length > 0) {
        cartContainer.innerHTML = cartViewHtml(cart, updateCartTotal(cart));
        updateCartIndicator("block");
    } else {
        cartContainer.innerHTML = emptyCartHtml();
        updateCartIndicator("none");
    }
}

export function updateCartIndicator(display) {
    const cartDot = document.querySelector(".cart-icon__dot");

    cartDot.style.display = `${display === "block" ? "block" : "none"}`;
}

function updateCartTotal(cart) {
    return cart
        .map(({ price, quantity }) => {
            return price * quantity;
        })
        .reduce((acc, curr) => acc + curr, 0);
}
