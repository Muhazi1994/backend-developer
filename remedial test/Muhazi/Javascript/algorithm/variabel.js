// variabel statis
const jumlahMK = 3;

// variabel dinamis
let MK_1;
let MK_2;
let MK_3;
let total;
let rataRata;
let nilai;
let predikat;
// asigment
MK_1 = parseInt(prompt("Masukan nilai mata kuliah 1 : "));
MK_2 = parseInt(prompt("Masukan nilai mata kuliah 2 : "));
MK_3 = parseInt(prompt("Masukan nilai mata kuliah 3 : "));

//proses
total = MK_1 + MK_2 + MK_3;
rataRata = total/jumlahMK;
// decision 1
if (rataRata >= 70) {
    Status = "Lulus";
} else {
    Status = "Gagal";
}
// decision 2
if (rataRata > 80) {
    nilai = "A";
} else if (rataRata > 60) {
    nilai = "B";
} else if (rataRata > 40) {
    nilai = "C";
} else if (rataRata > 20) {
    nilai + "D";
} else {
    nilai = "E";
}
// decision 3
switch (nilai) {
    case "A":
        predikat = "Cumlaude";
        break;
    case "B":
        predikat = "Memuaskan";
        break;
    default:
        predikat = "none"
        break;
}
console.log("NILAI UNIAN");
console.log("__________________");
console.log("nilai mata kuliah 1 :" + MK_1);
console.log("nilai mata kuliah 2 :" + MK_2);
console.log("nilai mata kuliah 3 :" + MK_3);
console.log("__________________");
console.log("Total Nilai : " + total);
console.log("Rata - rata: " + rataRata);
console.log("__________________");
console.log("Status : "+ Status);
console.log("Nilai : "+ nilai);
console.log("Predikat : "+ predikat);