// Importing Module
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Code here!

function greet(name, address, birthday) {
  // Insert your code here!
  const cDate = new Date();
  const cYear = cDate.getFullYear();
  const age = cYear - birthday;

  console.log(`Hello, ${name}, looks like you're ${age}!\nAnd you lived in ${address}!`);
}

// DON'T CHANGE
console.log("Goverment Registry\n");
// GET User's Name
rl.question("What is your name? ", (name) => {
  // GET User's Address
  rl.question("Which city do you live? ", (address) => {
    // GET User's Birthday
    console.log('dena');
    rl.question("When was your birthday year? ", (birthday) => {
      greet(name, address, birthday);

      rl.close();
    });
  });
});

rl.on("close", () => {
  process.exit();
});