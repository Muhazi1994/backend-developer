package main

import "fmt"

func main () {
	for i:= 0; i < 10; i++ {
		if i ==  i-1 {
			continue
		}
		fmt.Println(i)
	}	
	}
// function countUniqueValues(arr){
//     const count = [];

//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] === arr[i-1]){
//             continue;
//         }
//         count.push(arr[i]);
//     }
//     return count.length;
// }
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])); // 4
// console.log(countUniqueValues([])); // 0