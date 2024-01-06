var n1 = '$40.24';
var n2 = '$21.57';
var regp = /[^0-9.-]+/g;

console.log(parseFloat(n1.replace(regp, '')) + parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) - parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) * parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) / parseFloat(n2.replace(regp, '')));
