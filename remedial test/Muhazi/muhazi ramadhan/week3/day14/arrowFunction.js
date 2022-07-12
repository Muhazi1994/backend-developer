// normal Function
function normalFunc(a, b) {
    return a + b;
}
console.log(normalFunc(10, 11));
// module.exports = {
// normalFunc
// }
// Arrow Functin
const arrowFunc = (a, b) => a + b;
console.log(arrowFunc(12, 13));
// exports. arrowFunc = (a, b) => a + b; // Exports directly
//Curryin Function
const curryFunc = (a) => (b) => a + b;
console.log(curryFunc(14)(15));
//exports.curryFunc = (a) => (b) => a + b; // Export directly