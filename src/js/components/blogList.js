import { dataEntries } from "../services/contentfulClient";
import { blogCardSkeleton, blogCard, blogCardErrorHtml } from "../utils/markupGenerator";
import { skeletonLoader } from "../services/skeletonLoader";

export async function loadBlogCard() {
    const blogList = document.querySelector(".blogs__list");

    if (!blogList) return;

    skeletonLoader(blogList, 6, blogCardSkeleton);

    try {
        const data = await dataEntries(0, 6, "sneakerBlogs", "sys.createdAt");

        blogList.innerHTML = data.items
            .map(
                ({
                    fields: {
                        blogTitle,
                        blogPostedDate,
                        blogFeaturedImage,
                        blogShortDescription,
                        slug,
                    },
                }) => {
                    const {
                        description: altText,
                        file: { url: imageUrl },
                    } = blogFeaturedImage.fields;

                    return blogCard(
                        imageUrl,
                        altText,
                        convertBlogPostDate(blogPostedDate),
                        blogTitle,
                        blogShortDescription,
                        slug
                    );
                }
            )
            .join("");
    } catch (error) {
        console.error("Error fetching products:", error.message || error);
        blogList.innerHTML = blogCardErrorHtml("Failed to load Products");
    }
}

function convertBlogPostDate(publishedDate) {
    const date = new Date(publishedDate);

    return date.toDateString().split(" ").slice(1).join(" ");
}
