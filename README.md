# Sneakr - E-commerce Website

## Project Overview

Sneakr is a modern e-commerce website built using HTML, CSS, JavaScript, and optimized with Parcel as a build tool. It features a cart system, product pages, and smooth UI interactions. The project was initially set up with Vite but later migrated to Parcel.

## Tech Stack

### 🔹 Frontend

-   HTML
-   CSS
-   JavaScript

### Build Tools & Configuration

-   Parcel
-   PostCSS (for processing styles)
-   Babel (for JavaScript transpiling)

### Deployment

-   Netlify (for hosting)

### Storage & State Management

-   SessionStorage (to persist cart data)
-   Environment variables for API keys

## Features Implemented

#### 🛒 Cart System

-   Add/remove items
-   Update quantity
-   Store cart in SessionStorage

#### 📦 Product Pages

-   Dynamic product listing
-   Quantity management

#### 🚀 Smooth UI & Interactions

-   Animate on Scroll animations for smooth scrolling
-   Event delegation for performance optimization

#### 🔗 SEO & Performance

-   Optimized images using Ucare CDN
-   Minified JS and CSS

## Project Setup

### Clone the Repository

```
git clone <repo-url>
cd sneakr
```

### Install Dependencies

```
npm install
```

### Run in Development Mode

```
npm run dev
```

### Build for Production

```
npm run build
```

## Environment Variables

Create a .env file in the root directory:

```
PARCEL_API_KEY=your_api_key_here
PARCEL_API_SECRET=your_secret_here
```

To use them in JavaScript:

```
console.log(process.env.PARCEL_API_KEY);
```

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
