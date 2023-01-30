const volume_Cone = (radius, height) => {
    is_Number(radius, 'Radius');
    is_Number(height, 'Height');
    return (Math.PI * radius ** 2 * height / 3.0);
}

const is_Number = (n, n_name = 'number') => {
    if (typeof n !== 'number') {
        throw new TypeError('The ' + n_name + ' is not Number type!');
    } else if (n < 0 || (!Number.isFinite(n))) {
        throw new Error('The ' + n_name + ' must be a positive values!');
    }
}

console.log(volume_Cone(3.0, 7.0));
console.log(volume_Cone('3.0', 7.0));
console.log(volume_Cone(-3.0, 7.0));