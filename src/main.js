import toggleNav from "./js/components/navbarToggle";
import toggleCart from "./js/components/toggleCart";
import { featuredProducts } from "./js/components/featuredProducts";
import toggleCategoryDropdown from "./js/components/productFilterDropdown";
import { loadProducts } from "./js/components/productList";
import { loadBlogCard } from "./js/components/blogList";
import { headerControl } from "./js/components/headerScroll";

const displayedFeaturedProducts = featuredProducts();
const manageCategoryDropdown = toggleCategoryDropdown();
headerControl();
loadBlogCard();
loadProducts();
