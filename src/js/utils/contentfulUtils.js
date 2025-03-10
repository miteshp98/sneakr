import { createClient } from "contentful";

export const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACEID,
    environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
    accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
});


