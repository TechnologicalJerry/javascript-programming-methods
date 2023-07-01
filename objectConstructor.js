// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");

// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.age + ".";



// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.age + ". My mother is " + myMother.age + ".";





// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// myFather.nationality = "English";

// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.nationality;

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// myFather.name = function () {
//     return this.firstName + " " + this.lastName;
// };

// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.name();



// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// Person.nationality = "English";

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");


// document.getElementById("demo").innerHTML =
//     "The nationality of my father is " + myFather.nationality;



// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.name = function () {
//         return this.firstName + " " + this.lastName
//     };
// }


// const myFather = new Person("John", "Doe", 50, "blue");

// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.name();



// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }

// person.fullName.apply(person1);


// const person = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// person.fullName.call(person1, "Oslo", "Norway");

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function () {
//         let x = document.getElementById("demo");
//         x.innerHTML = this.firstName + " " + this.lastName;
//     }
// }

// person.display();

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function () {
//         let x = document.getElementById("demo");
//         x.innerHTML = this.firstName + " " + this.lastName;
//     }
// }

// setTimeout(person.display, 3000);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function () {
//         let x = document.getElementById("demo");
//         x.innerHTML = this.firstName + " " + this.lastName;
//     }
// }

// let display = person.display.bind(person);
// setTimeout(display, 3000);