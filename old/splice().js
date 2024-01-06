const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log('fruits===>', fruits);

let example10a = ["A", "B", "C", "D", "E"];

console.log(example10a);

let example10b = example10a.splice(0, 2);
console.log(example10a);
console.log(example10b);

console.log(example10b);
let example10c = example10b.splice(1, 2, "F", "G");
console.log(example10b);
console.log(example10c);   