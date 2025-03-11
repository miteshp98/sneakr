import { updateCartUI, updateCartIndicator } from "./cartUi";

const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

export function addToCart(product) {
    const existingProduct = findProduct(product);

    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    } else {
        cart.push({ ...product });
    }

    saveCartToStorage();
}

function saveCartToStorage() {
    updateCartUI(cart);
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

export function removeProductFromCart(product) {
    const existingProduct = findProduct(product);

    if (!existingProduct) return;

    const index = cart.indexOf(existingProduct);

    cart.splice(index, 1);
    saveCartToStorage();
}

export function handleQuantityField(product, updatedQuantity) {
    const existingProduct = findProduct(product);

    if (!existingProduct) return;

    let quantityValue = +updatedQuantity;

    if (quantityValue === 0) {
        removeProductFromCart(existingProduct);
    } else {
        setTimeout(() => {
            existingProduct.quantity = quantityValue;
            saveCartToStorage();
        }, 1500);
    }
}

export function getCart() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
}

function findProduct(product) {
    return cart.find((item) => item.id === product.id);
}
