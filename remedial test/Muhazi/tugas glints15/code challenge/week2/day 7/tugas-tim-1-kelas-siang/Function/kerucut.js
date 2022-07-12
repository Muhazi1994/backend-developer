const index = require("../index"); // Import index to run rl on this file

function kerucut(r, t) {
  const phi = 3.14;
  return (1 / 3) * phi * r * r * t;
}

function inputLength() {
  index.rl.question(`Jari-jari: `, (r) => {
    if (!isNaN(r)) {
      inputHeight(r);
    } else {
      console.log(`Length must be a number\n`);
      inputLength(r);
    }
  });
}

function inputHeight(r) {
  index.rl.question(`Tinggi: `, (t) => {
    if (!isNaN(t)) {
      console.log(`\nkerucut: ${kerucut(r, t)}`);
      index.rl.close();
    } else {
      console.log(`Width must be a number\n`);
      inputHeight(r, t);
    }
  });
}

module.exports = { inputLength }; // Export the input, so the another file can run this code

