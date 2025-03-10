// Loading Product Skeleton
export function skeletonLoader(element, count, fn) {
    for (let i = 0; i < count; i++) {
        element.innerHTML += fn();
    }
}
