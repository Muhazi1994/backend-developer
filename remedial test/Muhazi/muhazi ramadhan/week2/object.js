let person = {
    name:'muhazi ramadhan',
    Address: 'Sumbawa, Nusa tenggara west',
    age: 27,
    isMarried: false,
};
console.log(person);
console.log(person.name);
console.log(person['name']);
if(person.isMarried) {
    console.log(`${person.name}(${person.age}) has been married`)
} else {
    console.log(`${person.name}(${person.age}) has not been married`)
}
