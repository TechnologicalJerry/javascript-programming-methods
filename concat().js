let arrayFirdt = ["A", "B", "C"];
let arrayescond = ["D", "E", "F"];
let arrayAnother = ["G", "H", "I"];
let arrayThird = "J";

let consoleFirst = arrayFirdt.concat(arrayescond);
console.log('A result===>', consoleFirst);

let consoleSecond = arrayFirdt.concat(arrayescond, arrayAnother);
console.log('B result===>', consoleSecond);

let consoleThird = arrayFirdt.concat(arrayescond, arrayThird);
console.log('C result===>', consoleSecond);
