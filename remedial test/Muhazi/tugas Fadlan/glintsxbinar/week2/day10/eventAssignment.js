// Import Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// Import Events
const EventEmitter = require('events');

// Istance of events
const my = new EventEmitter();

// Import number2.js to info
const info = require('../day9/number2');

// Listener
my.on('login:success', function (userName){
    console.log(`${userName} is succes for login!\nHere is info for status Of Human`);
    info.statusInfo();
});

my.on('login:failed', function(userName){
    console.log(`${userName} is failed to login, please input of the correct password!`);
    rl.close();
})


// Function For Login
function login(userName, password){
    const correctPassword = '121212';

    if(password === correctPassword){
        my.emit('login:success', userName);
    }else{
        my.emit('login:failed', userName);
    }
};

// Function of the start
function start(){
    rl.question('Username: ', (userName) => {
        rl.question('Password: ', (password) =>{
            login(userName, password);
        });
    });
};

start();

module.exports.rl = rl; // Export rl