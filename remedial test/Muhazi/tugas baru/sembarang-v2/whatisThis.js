// const countPairs = (n, ar) => {
//     // return socks by color
//     const socksByColor = ar.reduce((item, color) => {
//       console.log(item, "item");
//       console.log(color, "color");
//       if (!item[color]) {
//         item[color] = 0;
//       }
//       item[color] = item[color] + 1;
//       return item;
//     }, {});
  
//     // count total pairs of socks
//     const totalPairsNum = Object.keys(socksByColor).reduce((count, sockColor) => {
//       const sockCount = socksByColor[sockColor];
//       const pairsCount = Math.floor(sockCount / 2);
//     }
// }

const minStart = (ar) => {
    let min = 0;
    let sum = 0;
  
    ar.forEach((val) => {
      sum += val; // sum = sum + val;
    //   min = min < sum ? min : sum
      if (sum < min) min = sum
      // above is ternary operator
    //   (conditional) ? <statement if true> : <statement if false>
    });
    console.log(min)
    return (min = 1 - min)
};

const arr = [21,5,6,4,7,3,87,3,7,3,7,3,2]
console.log(minStart(arr));
