function value_limit(val, min, max) {
    return val < min ? min : (val > max ? max : val);
}

console.log(value_limit(7, 1, 12));
console.log(value_limit(-7, 0, 12));
console.log(value_limit(15, 0, 12));