function test_same_digit(num) {
    var first = num % 10;
    while (num) {
        if (num % 10 !== first) return false;
        num = Math.floor(num / 10);
    }
    return true
}

console.log(test_same_digit(1234));
console.log(test_same_digit(1111));
console.log(test_same_digit(22222222));