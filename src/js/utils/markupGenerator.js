// Product Skeleton Structure
export function productSkeleton() {
    const skeletonHtml = `
    <li class="products__item skeleton-card">
        <div class="skeleton skeleton-img"></div>

        <div class="skeleton-text-wrap">
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-price"></div>
        </div>
    </li>
    `;

    return skeletonHtml;
}

// Product Product Error  Structure
export function productErrorHtml() {
    const skeletonHtml = `
        <li class="products__item skeleton-card">
            <div class="error__icon skeleton">
            <p class="error__message">Failed to load products.</p>
            </div>
        </li>
    `;

    return skeletonHtml;
}

// Feature Product Card Structure
export function featureProductCard(
    productImage,
    productAlt,
    productTitle,
    productPrice,
    productCurrency,
    slug
) {
    return `<li class="products__item" data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out-cubic">
                <a href="./product.html?slug=${slug}" class="products__card">
                    <img src="${productImage}" alt="${productAlt}" class="products__img" />
                        <div class="products__details">
                            <p class="products__name">${productTitle}</p>
                            <p class="products__price">$${productPrice} ${productCurrency}</p>
                        </div>
                </a>
            </li>`;
}

// Product Card  Structure
export function productCard(
    productImage,
    productAlt,
    productTitle,
    productPrice,
    productCurrency,
    productCategory,
    slug
) {
    return ` <li class="products__item">
                <a href="./product.html?slug=${slug}" class="products__card">
                    <div class="products__img-wrap">
                            <img
                                src="${productImage}"
                                alt="${productAlt}"
                                class="products__img"
                            />

                        <button class="producst__shop-btn">
                            <img src="src/assets/icons/parcel.png" alt="parcel" />
                            <span>Shop Now</span>
                        </button>
                    </div>

                    <div class="products__card-details">
                            <p class="prodcuts__tag">${productCategory}</p>
                            <p class="products__name">${productTitle}</p>
                            <p class="products__price">
                                $ <span class="products__amount">${productPrice}</span> ${productCurrency}
                            </p>
                    </div>
                </a>
            </li>`;
}

// Blog Card Skeleton Structure
export function blogCardSkeleton() {
    const skeletonHtml = `
            <li class="blogs__item skeleton-card">
                <div class="skeleton skeleton-img"></div>
                <div class="blogs__details">
                        <p class="skeleton skeleton-text"></p>
                        <h3 class="skeleton skeleton-text"></h3>
                </div>
            </li>
`;

    return skeletonHtml;
}

// Blog Card Structure
export function blogCard(
    blogFeaturedImage,
    blogImageAlt,
    blogPostedDate,
    blogTitle,
    blogShortDescription,
    slug
) {
    const html = `
    <li class="blogs__item">
        <a href="./post.html?slug=${slug}" class="blogs__link">
        <div class="blogs__img">
            <img
                src="${blogFeaturedImage}"
                alt="${blogImageAlt}"
            />
            </div>

            <div class="blogs__details">
                <p class="blogs__post-date">${blogPostedDate}</p>
                <h3 class="blogs__title">${blogTitle}</h3>
                <p class="blogs__about">${blogShortDescription}</p>
            </div>
        </a>
    </li>
    `;

    return html;
}

// Product Error Structure
export function blogCardErrorHtml() {
    const skeletonHtml = `
        <li class="blogs__item skeleton-card">
            <div class="skeleton error__icon">
                <p class="error__message">Failed to load Blogs.</p>
            </div>
            <div class="blogs__details">
                <p class="skeleton skeleton-text"></p>
                <h3 class="skeleton skeleton-text"></h3>
            </div>
        </li>
`;
    return skeletonHtml;
}

// Page Loader Structure
export function pageLoader() {
    const loaderHtml = `                  
                    <div class="loader-container">
                        <span class="loader"></span>
                    </div>`;
    return loaderHtml;
}

// Product Page Structure Structure
export function productViewHtml(
    productImg,
    imageAlt,
    productDescription,
    productType,
    productName,
    productPrice,
    productDiscountedPrice,
    productId
) {
    const html = `
            <div class="product" data-id="${productId}">
                <div class="product-view__preview"                         
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out-quart">
                    <div class="product-view__image">
                            <img
                                src="${productImg}"
                                alt="${imageAlt}"
                                class="product__image"
                            />
                    </div>

                    <div class="product-view__details">
                            <h2>Details</h2>

                            <div class="product-view__description">
                            <p>${productDescription}</p>
                            </div>
                    </div>
                    </div>

                    <div class="product-view__info"      
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out-quart"
                            data-aos-delay="500">
                            
                            <span class="shoe-type">${productType}</span>
                            <h1 class="product-view__title">${productName}</h1>

                        <div class="product-view__pricing">
                            <p class="product-view__discounted-price">$ <span class="shoe__price">${productDiscountedPrice}</span> USD</p>
                            <p class="product-view__price">$ <span>${productPrice}</span> USD</p>
                        </div>

                        <div class="product-view__actions">
                            <div class="product-view__quantity">
                                <label for="quantity">Quantity</label>
                                <input type="number" name="quantity" id="quantity" value="1" min="1"/>
                            </div>
                            <button class="product-view__cart-btn add-to-cart-btn">Add To Cart</button>
                        </div>
                    </div>
        </div>
    `;

    return html;
}

// Dynamic Page SEO Structure
export function pageSEOHtml(seoTitle, seoDescription, seoTags) {
    const head = document.querySelector("head");
    head.querySelector("title").textContent = seoTitle;
    head.querySelector("meta[name='description']").content = seoDescription;
    head.querySelector("meta[name='keywords']").content = seoTags.join(",");
}

// Blog Page Structure
export function blogViewHtml(
    blogPostedDate,
    blogName,
    blogDescription,
    blogImage,
    imageAlt,
    blogPost
) {
    const html = `
            <div class="blogview__header">
                <p class="blog_posteddate">${blogPostedDate}</p>
                    <h1 class="blog__name">
                        ${blogName}
                    </h1>
                        <p class="blog__shortDescrip">
                        ${blogDescription}
                        </p>
                    </div>

                <div class="blog__image">
                    <img
                        src="${blogImage}"
                        alt="${imageAlt}"
                    />
                </div>

        <div class="blog__post">${blogPost}</div>
    `;

    return html;
}

// Cart Structure
export function cartViewHtml(cart, cartTotal) {
    const html = `
                <div class="cart__header">
                    <p class="cart__title">Your Cart</p>
                    <button class="cart__close-btn"><i class="fa-solid fa-x"></i></button>
                </div>

                <div class="cart__items">
                    <ul class="cart__list">

                    ${cart
                        .map(({ id, name, quantity, price, image }) => {
                            return `
                                 <li class="cart__item" data-id="${id}">
                                    <div class="cart__item-img">
                                        <img
                                            src="${image}"
                                            alt="product-image"
                                        />
                                    </div>
                                    <div class="cart__item-content">
                                        <p class="item__name">${name}</p>

                                        <p class="item__quantity">
                                        Quantity: <input type="number" name="cart__product-quantity" 
                                                    id="cart__product-quantity" min="0" value="${quantity}" />
                                
                                        </p>
                                    </div>

                                    <button class="item__remove-btn">
                                        <i class="fa-solid fa-x"></i>
                                    </button>
                                </li>`;
                        })
                        .join("")}
                    </ul>
                </div>

                <div class="cart__total-wrap">
                    <p class="cart__subtotal-name">SubTotal</p>
                    <p class="cart__subtotal">$ <span class="cart__amount">${cartTotal.toFixed(
                        2
                    )}</span> USD</p>
                </div>

                <div class="checkout__btn-wrap">
                    <button class="checkout__btn">Continue to Checkout</button>
                </div>

                <div class="checkout__disabled">
                    <p class="checkout__disabled-msg">Checkout is disabled for now</p>
                </div>
    `;
    return html;
}

// Empty Cart Structure
export function emptyCartHtml() {
    const html = `
                <div class="cart__header">
                    <p class="cart__title">Your Cart</p>
                    <button class="cart__close-btn"><i class="fa-solid fa-x"></i></button>
                </div>

                <div class="empty__cart">
                        <p class="empty__cart-msg">No Items Found.</p>

                        <a href="./shop.html"> Shop Now </a>
                </div>
    `;
    return html;
}
