function proper_improper_test(num) {
    return Math.abs(num[0] / num[1]) < 1
        ? "Proper fraction."
        : "Improper fraction.";
}
console.log(proper_improper_test([12, 300]));
console.log(proper_improper_test([2, 4]));
console.log(proper_improper_test([103, 3]));
console.log(proper_improper_test([104, 2]));
console.log(proper_improper_test([5, 40]));