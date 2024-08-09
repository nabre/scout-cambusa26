export function arrayIntersect<T>(...arrays: T[][]): T[] {
    if (arrays.length === 0) return [];

    const baseArray = arrays[0];

    return baseArray.filter(item =>
        arrays.every(arr => arr.includes(item))
    );
}