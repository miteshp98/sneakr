import { client } from "../utils/contentfulUtils";

export async function dataEntries(skipNum, limitNum, contentType, orderBy) {
    const entries = await client.getEntries({
        skip: skipNum,
        limit: limitNum,
        content_type: contentType,
        order: orderBy,
    });

    return entries;
}
