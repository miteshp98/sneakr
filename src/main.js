// Import UI Components
import toggleNav from "./js/components/header/navbarToggle";
import toggleCart from "./js/components/cart/toggleCart";
import toggleCategoryDropdown from "./js/components/products/productFilterDropdown";
import { headerControl } from "./js/components/header/headerScroll";
import { updateCartUI } from "./js/components/cart/cartUI";
import { setupCartEvents } from "./js/components/cart/cartEvent";

// Import Product & Blog Features
import { featuredProducts } from "./js/components/products/featuredProducts";
import { loadProducts } from "./js/components/products/productList";
import { loadBlogCard } from "./js/components/blogList";

// Import AOS (Animate on Scroll)
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize all functionalities
function initializeApp() {
    // UI & Navigation Controls
    toggleNav;
    toggleCart;
    toggleCategoryDropdown();
    headerControl();
    setupCartEvents();
    updateCartUI(JSON.parse(sessionStorage.getItem("cart")) || []);

    // Product & Blog Loading
    featuredProducts();
    loadProducts();
    loadBlogCard();

    // Initialize AOS for scroll animations
    AOS.init();
}

// Run the application
initializeApp();
