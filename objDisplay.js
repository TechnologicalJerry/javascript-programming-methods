const pfirstPerson = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("demo").innerHTML = person;


const secondPerson = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("demo").innerHTML = person.name + ", " + person.age + ", " + person.city;


const thirdPerson = {
    name: "John",
    age: 30,
    city: "New York"
};

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
};

document.getElementById("demo").innerHTML = txt;

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// document.getElementById("demo").innerHTML = person;

const thePerson = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("demo").innerHTML = thePerson.name + ", " + thePerson.age + ", " + thePerson.city;

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// let txt = "";
// for (let x in person) {
//     txt += person[x] + " ";
// };

// document.getElementById("demo").innerHTML = txt;

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person);

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// const myArray = Object.values(person);
// document.getElementById("demo").innerHTML = myArray;