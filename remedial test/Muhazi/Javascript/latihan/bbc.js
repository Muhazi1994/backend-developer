// const getMean = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(getMean([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(getMean([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]));
// console.log(getMean([]));



// == Membuat dan Mendeklarasikan Array == //
const array1 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const array2 = [1, 2, 2, 2, 2, 2, 2, 2, 4, 6];
const array3 = [];


// == Mengakses Array Berdasarkan Index (dimulai dari angka 0) == //
// console.log(array1[0]); // 1
// console.log(array2[1]); // 'dua'
// console.log(array3[1]); // false


// == Mengecek Panjang dari Array == //
console.log(array1.length); // 5
console.log(array2.length); // 3
console.log(array3.length); // 2