// Import Readline
const even = require("../day10/eventAssignment")
// Create an array 
let human = [
    {
        name : "Dena",
        status : "Negative",
    },
    {
        name : "Eka",
        status : "Positive",
    },
    {
        name : "Taeyon",
        status : "Suspect",
    },
    {
        name : "Jiho",
        status : "Suspect",
    },
    {
        name : "Arin",
        status : "Negative",
    },
    {
        name : "Irene",
        status : "Positive",
    },
    {
        name : "Jaeseok",
        status : "Negative",
    },
    {
        name : "Nayeon",
        status : "Suspect",
    },
    {
        name : "Zoa",
        status : "Positive",
    },
];

// Create function of status human
function statusInfo(){
even.rl.question(`Press '1' for Positive, '2' for Negative, and '3' for Suspect: `, (pilihan) => {
    let d = Number(pilihan);
    switch (d){
        case 1:
            let positivePeople = human.filter(person => person.status === 'Positive').map(e => e.name);
            console.log(positivePeople);
            even.rl.close();
        break;
        case 2:
            let negativePeople = human.filter(person => person.status === 'Negative').map(e => e.name);
            console.log(negativePeople);
            even.rl.close();
        break;
        case 3:
            let suspectPeople = human.filter(person => person.status === 'Suspect').map(e => e.name);
            console.log(suspectPeople);
            even.rl.close();
        break;
        default:
            console.log('Please input option between 1, 2, or 3!');
            statusInfo();
    }
})
}

module.exports = {statusInfo}; // Export statusInfo function from number2.js