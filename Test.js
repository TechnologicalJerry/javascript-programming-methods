

// // Number
// var num1 = 22;
// var num2 = 44;
// console.log(num1 + num2);

// // string
// var str1 = "This is a string!";
// var str2 = 'This is also a atring!';
// console.log(str1 + str2);


// var a1 = true;
// var b1 = false;
// console.log(a1, b1);

// var und = undefined;
// console.log(und);


// var n = null;
// console.log(n);

// // Arrays
// var arr = [1, 2, "JERRY", 3, 4, 5];
// console.log(arr);


// // Objects
// var marks = {
//     ravi: 34,
//     shuba: 35,
//     jerry: 55,
// }
// console.log(marks);

// var a = 20;
// var b = 10;
// console.log("The Value-", a + b);
// console.log("The Value-", a - b);
// console.log("The Value-", a * b);
// console.log("The Value-", a / b);

// var c = b;
// // c += 2;
// // c -= 2;
// // c *= 2;
// c /= 2;
// console.log(c);

// var x = 30;
// var y = 40;
// console.log(x < y);
// console.log(x > y);
// console.log(x == y);
// console.log(x <= y);
// console.log(x >= y);

// console.log("Now Logical operstors:=");
// console.log("Logical and operstors:=");
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log("Logical or operstors:=");
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log("Logical not operstors:=");
// console.log(!true);
// console.log(!false);


// // JavaScript functions
// console.log("JavaScript Functions: ");
// function avg(a, b) {
//     return (a + b) / 2;
// }
// c1 = avg(4, 6);
// c2 = avg(20, 40);
// console.log(c1, c2);

// console.log("Statements");
// var age = 30;
// if (age > 18) {
//     console.log("Mature");
// } else {
//     console.log("You are not Mature");
// }

// console.log("Statements Ladder");
// age = 70;
// if (age > 18) {
//     console.log("You can Vote");
// } else if (age > 21) {
//     console.log("You can vote and get married");
// } else if (age > 30) {
//     console.log("You can vote and can get marride also can have kids");
// } else if (age > 35) {
//     console.log("You can vote and can get marride also can have multipal kids");
// } else if (age > 60) {
//     console.log("You can vote and can get marride also can have multipal kids also you have to retire from your job");
// } else {
//     console.log("GO Die")
// }

// console.log("Loops");
// let theArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(theArray);
// for (var i = 0; i < theArray.length; i++) {
//     console.log(theArray[i]);
// }
// theArray.forEach(function (element) {
//     console.log(element);
// });
// let j = 10;
// while (j < theArray.length) {
//     console.log(theArray[j]);
//     j++;
// }
// do {
//     console.log(theArray[j]);
//     j++;
// } while (j < theArray.length);

// let theArray = [1, 2, 3, 4, 5, 6, 7];
// for (var i = 0; i < theArray.length; i++) {
//     if (i==2){
//         // break;
//         continue;
//     }
//     console.log(theArray[i]);
// }

let myArray = ["Fan","Plus",35, null, true, false];
console.log(myArray.length);
// myArray.pop();
// myArray.push("Jerry");
// myArray.shift();
myArray.unshift("Jerry");

console.log(myArray);



