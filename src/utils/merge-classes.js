/**
 * Merge class objects into one
 */
export function mergeClasses(...args) {
    return Object.assign({}, ...args);
}
