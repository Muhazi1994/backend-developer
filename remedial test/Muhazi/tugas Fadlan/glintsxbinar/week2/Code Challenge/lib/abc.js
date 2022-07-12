// function bubleSort(arr){
//     var i, j;
//     var len = arr.length;

//     var isSwapped = false;

//     for(i = 0; i < len; i++){
//         isSwapped = false;

//         for(j = 0; j < len; j++){
//             if(arr[j]  arr[j+1]){
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 isSwapped = true;
//             }
//         }

//         if(!isSwapped){
//             break;
//         }
//     }

//     console.log(arr)
// }

// var arr = [3, 5, 1, 90, 5, 7, 3, 7, 89, 23, 45];

// bubleSort(arr);
let a, b;
a = [8, 8, 8]
b = [6, 10, 1]

function compareTriplets(a, b) {
    // Write your code here
    let aaa = [0];
    let aa = parseInt(aaa);
    let bb = [];
    for (let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            aa += 1;
        }else if( b[i] > a[i]){
            bb += 1;
    }
}
    a = aa;
    b = bb;
    console.log(a);
    console.log(b);
}

compareTriplets(a, b);

// -- Get the specified data for products with a higher sales value than "grey hoodie"
// SELECT items.id, items.name, items.price * COUNT(*) AS "sales total"
// FROM sales_records
// JOIN items
// ON sales_records.item_id = items.id
// GROUP BY items.id, items.name, items.price
// HAVING (COUNT(*) * items.price) > (
//   SELECT COUNT(*) * items.price
//   FROM sales_records
//   JOIN items
//   ON sales_records.item_id = items.id
//   WHERE items.name = "grey hoodie"
// );


// -- Get the specified data for the top 5 products with the highest sales
// SELECT items.id, items.name, items.price * COUNT(*) AS "sales total"
// FROM sales_records
// JOIN items
// ON sales_records.item_id = items.id
// GROUP BY items.id, items.name, items.price
// ORDER BY COUNT(*) * items.price DESC
// LIMIT 5;    