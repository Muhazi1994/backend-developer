var data = [2,33,45,66];
var ydc = 45;
console.log(`data = ${data.join(" - ")}`);
console.log((`cari = ${ydc}`));

var ss = function(){
    for (var i=0; i < data.length; i++){
        if(data[i] == ydc) {
            console.log(`data ditemukan pada index ke ${i}`);
            break;
        } else {
            hasil = `tidak ditemukan`
        }
        console.log(`pada index ke ${i} ${hasil}`);
    }
}