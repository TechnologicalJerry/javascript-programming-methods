function twin_Prime(n) {
    const prime_num = test_prime(n)

    if (!prime_num) {
        return -1;
    }
    if (!test_prime(n + 2)) {
        return -1;
    }

    return n + 2;
}
function test_prime(n) {
    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    }
    else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log("Twin prime of 5 is:" + twin_Prime(5));
console.log("Twin prime of 59 is:" + twin_Prime(59));
console.log("Twin prime of 107 is:" + twin_Prime(107));
console.log("Twin prime of 61 is:" + twin_Prime(61));