function sixteen_bits_reverse(num) {
    var result = 0;
    for (var i = 0; i < 16; i++) {
        result = result * 2 + (num % 2);
        num = Math.floor(num / 2);
    }
    return result;
}
console.log(sixteen_bits_reverse(12345));
console.log(sixteen_bits_reverse(10));
console.log(sixteen_bits_reverse(5));