export default function mergeFileArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2)));
}
