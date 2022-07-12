class Addres {
    constructor(district, city, province) {
        this.district= district;
        this.city = city;
        this.province = province;
    }
}

//class Person
class Person {
    static isBreat = true;
//property/identity that person has    
    constructor(name, address, age) {
        this.name = name;
        this.address = address;
        this.age= age;
    }
    // instance method/fuction
    greet(){
        return `${this.name}, ${this.age} years old, live in ${this.address.city}!`;
    }
    greetAndBye(){
        return `${this.greet()} And bye!`;
    }
    static run() {
        return `${this.name} is running!`;
    }
    static jogging() {
        return `${this.run()} And walk!`;
    }
}
Person.prototype.kick = function() {
    return `${this.name} kick someone`;
}
Person.punch = function () {
    return `${this.name} punch someone`;
    
}
// object
let dena = new Person (
    'dena',
    new Addres ('Karang Tengah', 'Cianjur', ' Jawa Barat'),
 27
 );
let doni = new Person (
    'doni',
    new Addres ('Magelang Selatan', 'Magelang','Jawa Tengah'),
 28
);


console.log(dena.greetAndBye());
console.log(doni.kick());

console.log(Person.isBreat);
console.log(Person.punch());