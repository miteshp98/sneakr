import { client } from "../utils/contentfulUtils";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { blogViewHtml, pageLoader, pageSEOHtml } from "../utils/markupGenerator";

const urlParams = new URLSearchParams(window.location.search);
const blogSlug = urlParams.get("slug");

function redirectIfInvalidSlug() {
    if (!blogSlug) {
        window.location = "page-not-found.html";
        return;
    }
}
redirectIfInvalidSlug();

export async function loadBlogPost() {
    const blogContainer = document.querySelector(".blogview__container");
    const pageLoader = document.querySelector(".loader-container");

    if (!blogContainer || !pageLoader) return;

    pageLoader.style.display = "none";

    try {
        const blogEntries = await client.getEntries();

        const selectedBlog = blogEntries.items.find((entry) => {
            return entry.fields.slug === blogSlug;
        });

        // if (!selectedBlog) {
        //     throw new Error(`Product no found`);
        // }

        const {
            blogTitle,
            blogPostedDate,
            blogShortDescription,
            blogFeaturedImage: {
                fields: {
                    description,
                    file: { url: blogImage },
                },
            },
            slug,
            seoTitle,
            seoDescription,
            seoTags,
            blogPost,
        } = selectedBlog.fields;

        pageSEOHtml(seoTitle, seoDescription, seoTags.split(","));

        blogContainer.innerHTML = blogViewHtml(
            convertBlogPostDate(blogPostedDate),
            blogTitle,
            blogShortDescription,
            blogImage,
            description,
            renderRichText(blogPost)
        );
    } catch (error) {
        console.error("Error fetching products:", error.message || error);
        window.location = "page-not-found.html";
    }
}

loadBlogPost();

function renderRichText(richTextData) {
    if (!richTextData) return "";

    return documentToHtmlString(richTextData);
}

function convertBlogPostDate(publishedDate) {
    const date = new Date(publishedDate);

    return date.toDateString().split(" ").slice(1).join(" ");
}
