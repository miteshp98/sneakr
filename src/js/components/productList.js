import { dataEntries } from "../services/contentfulClient";
import { skeletonLoader } from "../services/skeletonLoader";
import { productSkeleton, productErrorHtml, productCard } from "../utils/markupGenerator";

export function checkCategory() {
    const categoryOption = document.querySelector(".products__custom-trigger");

    if (!categoryOption) return;

    const category = categoryOption.textContent.toLowerCase().replaceAll(" ", "");

    switch (category) {
        case "men":
            return category;
        case "women":
            return category;
        default:
            return;
    }
}

export async function loadProducts() {
    const productItemList = document.querySelector(".products__item-list");
    const selectedCategory = checkCategory();

    if (!productItemList) return;

    skeletonLoader(productItemList, 6, productSkeleton);

    try {
        const data = await dataEntries(0, 9, "sneakrProducts", "sys.createdAt");

        productItemList.innerHTML = filterProductsByCategory(data.items, selectedCategory);
    } catch (error) {
        console.error(`error fetching products ${error}`);
        productItemList.innerHTML = productErrorHtml("Failed to load Products");
    }
}

function filterProductsByCategory(products, category) {
    return products
        .filter(({ fields }) => {
            if (!category) return true;
            return fields.category.toLowerCase() === category;
        })
        .map(
            ({
                fields: {
                    productName,
                    slug,
                    productImage,
                    price,
                    currency,
                    category,
                    discountedPrice,
                },
            }) => {
                const {
                    description: altText,
                    file: { url: imageUrl },
                } = productImage.fields;

                return productCard(
                    imageUrl,
                    altText,
                    productName,
                    discountedPrice,
                    currency,
                    category,
                    slug
                );
            }
        )
        .join("");
}
