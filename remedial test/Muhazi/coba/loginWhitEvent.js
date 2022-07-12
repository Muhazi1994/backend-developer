const EventEmitter = require('events');
const plant = require('./number2');
// const plant = require('./number2');
const my = new EventEmitter();
const plant = require('./number2');
const plant = new plant();

const rl = plant.createInterface({
    input : process.stdin,
    output : process.stdout,
});
plant.on('login:failed', function (email) {
    console.log(`${email} is failed to login!`);
    rl.close();
});
plant.on('login:success', function (email) {
    console.log(`${email} is success to login!`);
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


// docker
// chache - reids
// microservice
// boby samuel9:28 PM
// login with social media account using passport.js
// one time token using jwt

//paraphrase
// passwordpasswrd
// this is my password

// websocket
// pub sub
// redis
// scheduling