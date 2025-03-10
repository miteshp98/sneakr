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

export function featureProductCard(
    productImage,
    productAlt,
    productTitle,
    productPrice,
    productCurrency,
    slug
) {
    return `<li class="products__item">
                <a href="product.html?slug=${slug}" class="products__card">
                    <img src="${productImage}" alt="${productAlt}" class="products__img" />
                        <div class="products__details">
                            <p class="products__name">${productTitle}</p>
                            <p class="products__price">$${productPrice} ${productCurrency}</p>
                        </div>
                </a>
            </li>`;
}

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
                <a href="product.html?slug=${slug}" class="products__card">
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
        <a href="blogpost.html?slug=${slug}" class="blogs__link">
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
