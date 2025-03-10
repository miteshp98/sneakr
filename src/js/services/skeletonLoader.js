// Loading Product Skeleton
export function productLoader(element, count, fn) {
    for (let i = 0; i < count; i++) {
        element.innerHTML += fn();
    }
}
