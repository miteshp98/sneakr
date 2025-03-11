import { pageLoader, productViewHtml, pageSEOHtml } from "../utils/markupGenerator";
import { client } from "../utils/contentfulUtils";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const urlParams = new URLSearchParams(window.location.search);
const productSlug = urlParams.get("slug");

function redirectIfInvalidSlug() {
    if (!productSlug) {
        window.location = "page-not-found.html";
        return;
    }
}
redirectIfInvalidSlug();

export async function loadProductDetails() {
    const productContainer = document.querySelector(".productview__container");

    if (!productContainer) return;

    productContainer.innerHTML = pageLoader();

    try {
        const productEntries = await client.getEntries();

        const selectedProduct = productEntries.items.find((entry) => {
            return entry.fields.slug === productSlug;
        });

        if (!selectedProduct) {
            throw new Error(`Product no found`);
        }

        const {
            productName,
            slug,
            shortDescription,
            description,
            price,
            discountedPrice,
            currency,
            productImage: {
                fields: {
                    description: imageDescription,
                    file: { url: productImageUrl },
                },
            },
            seoTitle,
            metaDescription,
            metaTags,
            shoesType,
        } = selectedProduct.fields;

        pageSEOHtml(seoTitle, metaDescription, metaTags);

        productContainer.innerHTML = productViewHtml(
            productImageUrl,
            imageDescription,
            formatProductDescription(description),
            shoesType,
            productName,
            price,
            discountedPrice
        );
    } catch (error) {
        console.error("Error fetching products:", error.message || error);
        window.location = "page-not-found.html";
    }
}

loadProductDetails();

function formatProductDescription(textData) {
    if (!textData) return "";

    return textData
        .split("\n")
        .map((line) => `<p>${line}</p>`)
        .join("");
}
