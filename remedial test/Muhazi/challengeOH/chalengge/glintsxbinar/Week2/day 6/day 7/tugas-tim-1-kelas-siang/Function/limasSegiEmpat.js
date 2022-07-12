const index = require("../index"); // Import index to run rl on this file

// Import readline
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// Function LimasSegiEmpat Return
function limasSegiEmpat(pjg, lbr, tng) {
  // console.log("Limas Segi Empat = ", (1 / 3) * (pjg * lbr * tng));
  return (1 / 3) * (pjg * lbr * tng);
}

// Function for inputing length of limas
function inputPanjang() {
  index.rl.question(`Masukkan nilai untuk Panjang Alas Limas: `, (pjg) => {
    if (!isNaN(pjg)) {
      inputLebar(pjg);
    } else {
      console.log(`Length must be a number\n`);
      inputPanjang();
    }
  });
}

// Function for inputing width of limas
function inputLebar(pjg) {
  index.rl.question(`Masukkan nilai untuk Lebar Alas Limas: `, (lbr) => {
    if (!isNaN(lbr)) {
      inputTinggi(pjg, lbr);
    } else {
      console.log(`Width must be a number\n`);
      inputLebar(pjg);
    }
  });
}

// Function for inputing height of limas
function inputTinggi(pjg, lbr) {
  index.rl.question(`Masukkan nilai untuk Tinggi Limas: `, (tng) => {
    if (!isNaN(tng)) {
      console.log(`\nVolume Limas: ${limasSegiEmpat(pjg, lbr, tng)}`);
      index.rl.close();
    } else {
      console.log(`Height must be a number\n`);
      inputTingg(pjg, lbr);
    }
  });
}

// console.log(`Limas Segi Empat`);
// console.log(`================`);

module.exports = { inputPanjang }; // Export inputLength and input function, so another file can call it
