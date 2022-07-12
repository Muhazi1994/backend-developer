/*
membuat suatu function dengan satu parameter
mendeklarasi i angka 0
mengecek kondisi looping pertama
cek kondisi actions
  jika paramater i sama dengan "("
    jika parameter i + 1 sama dengan ")"
    kemudian kita return true

  lain jika parameter i sama dengan "{"
    jika parameter i + 1 sama dengan "}"
    kemudian return true

  lain jika parameter i sama dengan "["
    jika parameter i + 1 sama dengan "]"
    kemudian return true
  
  jikalau tidak
    kita return false
  
icrement kondisi
*/
// function validasi (data) {
//     for (let i=0; i < data.length; i++){
//         if (data[i] == "(") {
//             if (data[i + 1] == ")") {
//                 return true;
//             }
//         } else if (data[i] == "{") {
//             if (data[i+1] == "}") {
//                 return true
//             }
            
//         } else if (data[i] == "[") {
//             if (data[i+1] == "]") {
//                 return true
//             }
//         } else {
//             return false
//         }
//     }
// }
// console.log(validasi("({[]})"));
// console.log(validasi ("([][]{})"));
// console.log(validasi ("({)(}){[}]"));
// console.log(validasi ("[)()]"));
// console.log(validasi ("((([]}}}"));

//     exp1 = "({[]})";
//     exp2 = "([][]{})";
//     exp3 = "({)(}){[}]";
//     exp4 = "[)()]";
// function isValidExp(expressions) {
//     let a = []
//     for (let i=0; i < expressions.length; i++) {
//         let b = expressions[i]
//         if (
//             b === "(" ||
//             b === "[" ||
//             b === "{" 
//         ){
//             a.push(b)
//         } else {
//             let c = a.pop()
//             if (b === "}" && c !== "{") {
//                 return false
//             } else if (b === "]" && c !== "[" ) {
//                 return false
//             } else if (b === ")" && c !== "("){
//                 return false
//             }
//         }
//     }
//     if (a.length >= 1){
//         return false
//     }
//     return true
// }
// console.log(isValidExp(exp1));
// console.log(isValidExp(exp2));
// console.log(isValidExp(exp3));
// console.log(isValidExp(exp4));


const check = (item) => {
  if (item.length % 2 !== 0) {
    console.log(false);
  } else {
    console.log(true);
  }
};

check("{[]}");
check("[][]{}");
check("{)(]){[");
check(")()");
