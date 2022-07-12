function countUniqueValues(num) {
  return new Set(num).size;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]));
console.log(countUniqueValues([]));
