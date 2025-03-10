import toggleNav from "./js/components/navbarToggle";
import toggleCart from "./js/components/toggleCart";
import { featuredProducts } from "./js/components/featuredProducts";
import toggleCategoryDropdown from "./js/components/productFilterDropdown";
import { loadProducts } from "./js/components/productList";

const displayedFeaturedProducts = featuredProducts();
const manageCategoryDropdown = toggleCategoryDropdown();
loadProducts();
