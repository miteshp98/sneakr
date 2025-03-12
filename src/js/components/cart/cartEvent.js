import { addToCart, removeProductFromCart, handleQuantityField } from "./cart";

export function setupCartEvents() {
    document.addEventListener("click", function (e) {
        const addToBtn = e.target.closest(".add-to-cart-btn");
        const removeFromCartBtn = e.target.closest(".item__remove-btn");
        const checkoutBtn = e.target.closest(".checkout__btn-wrap");

        if (addToBtn) {
            handleAddToCart(addToBtn, e);
        }

        if (removeFromCartBtn) {
            handleCartRemove(e, removeFromCartBtn);
        }

        if (checkoutBtn) {
            handleCheckout(checkoutBtn, e);
        }
    });
}

function handleAddToCart(addToCatBtn, e) {
    if (addToCatBtn) {
        const productElement = e.target.closest(".product");
        const quantityInput = productElement.querySelector("#quantity");

        if (parseInt(quantityInput.value) <= 0) {
            return;
        }

        const product = {
            id: productElement.dataset.id,
            name: productElement.querySelector(".product-view__title").textContent,
            quantity: parseInt(quantityInput.value),
            price: parseFloat(productElement.querySelector(".shoe__price").textContent),
            image: productElement.querySelector(".product__image").src,
        };

        addToCatBtn.textContent = "Adding To Cart...";
        addToCatBtn.disabled = true;
        addToCatBtn.classList.add("add-to-cart-btn--disabled");

        addToCart(product);
        addToCartBtnTimer(addToCatBtn, quantityInput);
    }
}

function addToCartBtnTimer(element, input) {
    let cartTimeout;
    clearTimeout(cartTimeout);
    cartTimeout = setTimeout(() => {
        element.textContent = "Add To Cart";
        element.disabled = false;
        element.classList.remove("add-to-cart-btn--disabled");
        input.value = 1;
    }, 1500);
}

function handleCartRemove(e, removeFromCartBtn) {
    if (removeFromCartBtn) {
        const parentElement = e.target.closest(".cart__item");
        const id = parentElement.dataset;

        removeProductFromCart(id);
    }
}

function handleCheckout(checkoutBtn, e) {
    if (checkoutBtn) {
        const element = checkoutBtn.nextElementSibling;
        element.classList.add("checkout__disabled--active");
    }
}

function handleQuantityEvents() {
    document.addEventListener("change", function (e) {
        const quantityInput = e.target.closest("#cart__product-quantity");

        if (quantityInput) {
            if (parseInt(quantityInput.value) < 0) {
                return;
            }

            const element = e.target.closest(".cart__item");
            quantityInput.style.opacity = "0.5";
            quantityInput.disabled = true;
            handleQuantityField(element.dataset, parseInt(quantityInput.value));
            quantityInputTimer(quantityInput);
        }
    });
}

function quantityInputTimer(element) {
    let quantityTimeOut;

    clearTimeout(quantityTimeOut);
    quantityTimeOut = setTimeout(() => {
        element.style.opacity = "1";
        element.disabled = false;
    }, 1500);
}

handleQuantityEvents();
