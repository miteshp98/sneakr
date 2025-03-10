import { productsEntries } from "../services/contentfulClient";
import { productLoader } from "../services/skeletonLoader";
import { featureProductCard, productSkeleton, productErrorHtml } from "../utils/markupGenerator";

export async function featuredProducts() {
    const productList = document.querySelector(".products__list");

    if (!productList) return;

    productLoader(productList, 4, productSkeleton);

    try {
        const data = await productsEntries(0, 4, "sneakrProducts", "sys.createdAt");

        productList.innerHTML = "";

        productList.innerHTML = data.items
            .map(({ fields: { productName, slug, productImage, price, currency } }) => {
                const {
                    description: altText,
                    file: { url: imageUrl },
                } = productImage.fields;

                return featureProductCard(imageUrl, altText, productName, price, currency, slug);
            })
            .join("");
    } catch (error) {
        console.error("Error fetching products:", error.message || error);
        productList.innerHTML = productErrorHtml("Failed to load Products");
    }
}
