const EventEmitter = require('events');
const readLine = require('readline');
// const hasiltes = require('../day 9/number2')

const my = new EventEmitter();

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout,
});
my.on('login:failed', function (email) {
    console.log(`${email} is failed to login!`);
    rl.close();
});
my.on('login:success', function (email) {
    console.log(`${email} is success to login!`);
    // hasiltes('negatif');
    // hasiltes('positive');
    // hasiltes('suspect');
    require('../day 9/number2');
    rl.close();
});

function login (email, password) {
    const passwordInDatabase = '123456';
    if (password !== passwordInDatabase) {
        my.emit('login:failed', email);
    } else {
        my.emit('login:success', email);
    }
}
rl.question('Email: ', (email) => {
    rl.question('password: ', (password) => {
        login(email, password);
    });
});
