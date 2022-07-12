var n = 9;
var angka = 8821;
var arr = [];
for (let i=0; i < n; i++) {
    arr.push(angka)
    angka = angka - 7
}
console.table(new Array(arr));

arr = [];
angka = 25;
for (let i=0; i < n; i++) {
    var newArr = [];
    for (let j=0; j < n; j++) {
        if (i >= j){
            newArr.push(angka)
        } else {
            newArr.push("")
        }
        newArr.push(i)
    }
    angka = angka - 7;
    arr.push(newArr)
}
console.log(arr);
