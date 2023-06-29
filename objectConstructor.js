// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display age
// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.age + ".";



// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // Create two Person objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// // Display age
// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.age + ". My mother is " + myMother.age + ".";





// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // Create 2 Person objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// // Add nationality to first object
// myFather.nationality = "English";

// // Display nationality 
// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.nationality; 

// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // Create 2 Person objects
// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// // Add a name method to first object
// myFather.name = function () {
//     return this.firstName + " " + this.lastName;
// };

// // Display full name
// document.getElementById("demo").innerHTML =
//     "My father is " + myFather.name(); 



// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// // You can NOT add a new property to a constructor function
// Person.nationality = "English";

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");


// document.getElementById("demo").innerHTML =
//     "The nationality of my father is " + myFather.nationality; 



function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function () {
        return this.firstName + " " + this.lastName
    };
}


const myFather = new Person("John", "Doe", 50, "blue");

document.getElementById("demo").innerHTML =
    "My father is " + myFather.name();



const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

person.fullName.apply(person1);