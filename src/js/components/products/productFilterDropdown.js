function toggleCategoryDropdown() {
    const productFilterDropdown = document.querySelector(".product__filter-dropdown");

    if (!productFilterDropdown) return;

    const productsOptions = productFilterDropdown.querySelector(".products__options");

    productFilterDropdown.addEventListener("click", function (e) {
        productsOptions.classList.toggle("products__options--expand");

        const option = e.target.dataset.value;

        redirectToCategory(option);
    });

    document.addEventListener("click", function (e) {
        if (!productFilterDropdown.contains(e.target)) {
            productsOptions.classList.remove("products__options--expand");
        }
    });
}

function redirectToCategory(value) {
    switch (value) {
        case "men":
            window.location.href = "./men.html";
            break;
        case "women":
            window.location.href = "./women.html";
            break;
        case "shopall":
            window.location.href = "./shop.html";
            break;
        default:
            return;
    }
}

export default toggleCategoryDropdown;
