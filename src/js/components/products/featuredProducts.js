import { dataEntries } from "../../services/contentfulClient";
import { skeletonLoader } from "../../services/skeletonLoader";
import { featureProductCard, productErrorHtml } from "../../utils/markupGenerator";

export async function featuredProducts() {
    const productList = document.querySelector(".products__list");

    if (!productList) return;

    try {
        const data = await dataEntries(0, 4, "sneakrProducts", "sys.createdAt");

        productList.innerHTML = data.items
            .map(
                ({
                    fields: { productName, slug, productImage, price, currency, discountedPrice },
                }) => {
                    const {
                        description: altText,
                        file: { url: imageUrl },
                    } = productImage.fields;

                    return featureProductCard(
                        imageUrl,
                        altText,
                        productName,
                        discountedPrice,
                        currency,
                        slug
                    );
                }
            )
            .join("");
    } catch (error) {
        console.error("Error fetching products:", error.message || error);
        productList.innerHTML = productErrorHtml("Failed to load Products");
    }
}
