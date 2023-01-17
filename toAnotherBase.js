var base_convert = function (number, initial_base, change_base) {
    if ((initial_base && change_base) < 2 || (initial_base && change_base) > 36)
        return 'Base between 2 and 36';

    return parseInt(number + '', initial_base)
        .toString(change_base);
}

console.log(base_convert('E164', 16, 8));
console.log(base_convert(1000, 2, 8));