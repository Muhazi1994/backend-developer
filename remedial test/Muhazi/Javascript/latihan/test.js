/*
BILANGAN FIBONANCI DARI 1-10 // EXPECTED 0,1,1,2,3,5,8,13,21,34
*/

// let fibonnanci = [];
let fibonnanci = [];
let n1 = 0;
let n2 = 1;
for (let i = 0; i <= 10; i++){
    if (i === 0 || i === 1) {
        fibonnanci.push(i)
    } else {
        total = n1+n2
        n1 = n2
        n2 = total;
        fibonnanci.push(total)
    }
    }
    console.log(fibonnanci);

// function nilai(n1) {
//   let fibonnanci = [];
//   for (let i = 0; i < n1.length; i++) {
//     for (let j = i + 1; j < n1.length; j++) {
//       if (n1[i === 0] || n1[i === 1]) {
//         // } else if (i === 2) {
//           fibonnanci.push(n1[i]);
//     }
//      else {
//         fibonnanci = n1[i];
//         n1[i] = n1[j];
//         n1[j] = fibonnanci;
//         // fibonnanci.push(fibonnanci)
//       }
//     }
//   }
//   return n1;
// }
// console.log(nilai([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]));

// }
//   var nilai = function () {
//     for (let i = 0; i <= n1; i++) {
//       if (n1[i] == n2) {
//         break;
//       } else {
//         count = "";
//       }
//       return fibonnanci;
//     }
//   };
// console.log(nilai([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]));

// // for (let i=0; i <= 30; i++){
// //     if (n1[i+1]==(n2[i])) {
// //     } else {

// //     }
// //     // for (let j=0; j < n2 +1; j++){
// //     //     if (n1[i+2] == n2[j]){
// //     //     } else {
// //     //     }
// //   // }

// // }
// //  return fibonnanci;
// // }
// // console.log(nilai([]));
