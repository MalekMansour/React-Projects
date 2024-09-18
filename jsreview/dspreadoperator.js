const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

const merged = mergeArrays(a, b);
const finalMerged = mergeArrays(merged, c);

console.log(finalMerged);


/*
 * Expected output:
 *
 * [
 *   1, 2, 3, 4, 5,
 *   6, 7, 8, 9
 * ]
 */