var x = 3;
var y = -7;
var z = 2;
if (x > 0 && y > 0 && z > 0) {
    alert("The sign is +");
}
else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is -");
}
else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
}
else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
}
else {
    console.log("The sign is -");
}