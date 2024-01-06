function fallingFactorial(n, k) {
    var i = (n - k + 1),
        r = 1;
    if (n < 0) {
        throw new Error("n must be positive.");
    }
    if (k > n) {
        throw new Error("k cannot be greater than n.");
    }
    while (i <= n) {
        r *= i++;
    }
    return r;
}
console.log(fallingFactorial(10, 2));