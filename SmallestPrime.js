function next_Prime_num(num) {
    for (var i = num + 1; ; i++) {
        var isPrime = true;
        for (var d = 2; d * d <= i; d++) {
            if (i % d === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            return i;
        }
    }
}

console.log(next_Prime_num(3));
console.log(next_Prime_num(17));