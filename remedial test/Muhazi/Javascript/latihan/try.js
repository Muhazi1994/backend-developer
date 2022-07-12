// function findDigitAmount(num) {

//    var positiveNumber = Math.sign(num) * num;
//    var lengthNumber = positiveNumber.toString();

//  return lengthNumber.length;
// }
// // console.log(findDigitAmount([3, 6, 5, 5, 9]));
// console.log(findDigitAmount([1,2,3,4,4,4,7,7,12,12,13]));
// console.log(findDigitAmount([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]));
// console.log(findDigitAmount([12345]));



// const arr = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];

// const count = arr.reduce((pre, cur) => (cur === 2) ? ++pre : pre, 0)
// console.log(count) // 4

// function linearSearch(arr, item) {
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] === item) {
//       return i;
//     }
//   }
// }

// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));


// == Membuat dan Mendeklarasikan Array == //
// const array1 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
// const array2 = [1, 2, 2, 2, 2, 2, 2, 2, 4, 6];
// const array3 = [];


// == Mengakses Array Berdasarkan Index (dimulai dari angka 0) == //
// console.log(array1[0]); // 1
// console.log(array2[1]); // 'dua'
// console.log(array3[1]); // false
// console.log(array4[2]); // true

// == Mengecek Panjang dari Array == //
// console.log(array1.length); // 5
// console.log(array2.length); // 3
// console.log(array3.length); // 2


const getMean = (arr) => {
  let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
  for (let i = 0; i < arr.length + 1; i++) {
    sum[i] = sum[i + 1] || 0 
  }
  return sum = arr;
};

console.log(getMean([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(getMean([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]));
console.log(getMean([]));

// uniqueCount = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
// var count = {};
// uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
// console.log(count);


function xxx (){
let count = {};
for(let i=0; i < arr.length; i++){
    (count[i] || 0) + 1;
}    
for (let j = 0; j < arr.length; j++) {
    count += arr[j];
  }
  return arr;
}