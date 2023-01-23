function isPower_of_two(num) {
    return num && (num & (num - 1)) === 0;
}

console.log(isPower_of_two(64));
console.log(isPower_of_two(94));