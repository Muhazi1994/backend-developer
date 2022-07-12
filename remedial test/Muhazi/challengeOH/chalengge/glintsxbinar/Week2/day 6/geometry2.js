const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to calculate beam volume

function kerucutGeometry(r, t) {
    const phi= 3.14
    return 1/3* phi * r ** 2*t;

/* Way 1 */
// Function for inputing length of beam
function inputLength() {
  rl.question(`Length: `, (r) => {
    if (!isNaN(r)) {
      input(r);
    } else {
      console.log(`Length must be a number\n`);
      inputLength(r);
    }
  });
}

// Function for inputing width of beam
function input(r) {
  rl.question(`Width: `, (t) => {
    if (!isNaN(t)) {
        console.log(`\nkerucut: ${kerucutGeometry(r, t)}`);
        rl.close();
        //   inputHeight(r, t);
    } else {
      console.log(`Width must be a number\n`);
      input(r);
    }
  });
}
}

