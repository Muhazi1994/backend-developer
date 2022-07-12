// Counting sort merupakan sebuah teknik pengurutan
// dengan cara menghitung jumlah kemunculan dari
// setiap data yang berada di dalam array.

// Language: JavaScript

function countingSort(arr) {
const count = {};
  for (let i=0; i < arr.length; i++) {
    count[arr[i]] = arr[i];
  }
  // const hasil = [];
  // for (let i = 0; i < arr.length; i++) {
  //   while (count[i] > 0) {
  //     hasil.push(i);
  //     hasil[i];
  //   }
  // }
    return count;
  }
console.log(countingSort([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countingSort([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]));
console.log(countingSort([]));
