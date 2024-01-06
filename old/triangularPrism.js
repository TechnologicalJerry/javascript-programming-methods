const volume_Triangular_Prism = (a, b, c, h) => {
    is_Number(a, 'BaseSide_a');
    is_Number(b, 'BaseSide_b');
    is_Number(c, 'BaseSide_c');
    is_Number(h, 'Height');
    return (1 / 4 * h * Math.sqrt(-(a ** 4) + 2 * a * a * b * b + 2 * a * a * c * c - (b ** 4) + 2 * b * b * c * c - (c ** 4)));
}

const is_Number = (n, n_name = 'number') => {
    if (typeof n !== 'number') {
        throw new TypeError('The ' + n_name + ' is not Number type!');
    } else if (n < 0 || (!Number.isFinite(n))) {
        throw new Error('The ' + n_name + ' must be a positive values!');
    }
}

console.log(volume_Triangular_Prism(2.0, 4.0, 4.0, 7.0));

console.log(volume_Triangular_Prism('2.0', 4.0, 4.0, 7.0));