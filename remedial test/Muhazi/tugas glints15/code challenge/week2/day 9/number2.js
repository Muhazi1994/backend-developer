// const EventEmitter = require('events');
// const readLine = require('readline');
const statusID =
[
  {
      name: "John",
      status: "positive"
  },
  {
      name: "Mike",
      status: "positive"
  },
  {
      name : "farhan",
      status : "suspect"
  },
  {
      name : "jalal",
      status : "negatif"
  },
  {
      name : "Farhan",
      status : "positive"
  },
  {
    name : "Yani",
    status : "negatif"
  },
  {
    name : "Indro",
    status : "suspect"
  },
  {
    name : "kamal",
    status : "positive"
  },
  {
    name : "Yanu",
    status : "negatif"
  },
  {
    name : "dara",
    status : "suspect"
  },
         
]
let posCovid = statusID.filter((statusID) => statusID.status === "positive").map((pos => pos.name));
let negCovid = statusID.filter((statusID) => statusID.status === "negatif").map((neg => neg.name));
let susCovid = statusID.filter((statusID) => statusID.status === "suspect").map((sus => sus.name));

let choice = 1
switch (choice) {
  case 1:
    console.log(posCovid +" is positive")
    break;
  case 2:
    console.log(negCovid +" is negatif")
    break;
  default:
    console.log(susCovid + " is suspect")
}

// function hasiltes (pasien) {
//   for (i = 0; i < statusID.length; i++) {
//     switch (statusID[i].status) {
//       case pasien:
//       console.log(pasien + ': ' + statusID[i].name) 
//         break;
//       default:
//         break;
//     }
//   }
// }
// module.exports = hasiltes;
