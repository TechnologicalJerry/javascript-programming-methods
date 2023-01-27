function Hamming(n) {
    var succession = [1];
    var length = succession.length;
    var candidate = 2;
    while (length < n) {
        if (isHammingNumber(candidate)) {
            succession[length] = candidate;
            length++;
        }
        candidate++;
    }
    return succession;
}
function isHammingNumber(num) {
    while (num % 5 === 0) num /= 5;
    while (num % 3 === 0) num /= 3;
    while (num % 2 === 0) num /= 2;

    return num == 1;
}

console.log(Hamming(20));