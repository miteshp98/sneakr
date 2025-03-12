import { createClient } from "contentful";

export const client = createClient({
    space: process.env.PARCEL_CONTENTFUL_SPACEID,
    environment: process.env.PARCEL_CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.PARCEL_CONTENTFUL_API_KEY,
});
