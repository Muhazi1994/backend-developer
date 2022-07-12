function countUniqueValues(arr){
    const count = [4, 4, 4, 7, 7, 12, 12];

    for(let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i]){
            count.push(arr[i]);
        }

    }
    return count.length;
}
console.log(countUniqueValues([])); // 7
console.log(countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])); // 4
console.log(countUniqueValues([])); // 0