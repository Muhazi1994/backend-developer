const plant= ["tomato", "broccoli", "kale", "cabbage", "apple"]


plant.splice (plant.indexOf("apple"),1)
// exports.plantClass = 'tomato';
let sayur = plant.map(
    (plant) => { return plant + " is a healthy food, it's definitely worth to eat."}
)
console.log(sayur);

plant.exports= plant;

// for (let i=4; i < plant.length; i++) {
//     console.log(`${plant[0]} is a healthy food, it's definitely worth to eat.`);
// }