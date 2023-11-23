const volume_Sphere = (radius) => {
  is_Number(radius, 'Radius');
  return (4 / 3 * Math.PI * radius ** 3);
}
const is_Number = (n, n_name = 'number') => {
  if (typeof n !== 'number') {
    throw new TypeError('The ' + n_name + ' is not Number type!');
  }
  else if (n < 0 || (!Number.isFinite(n)));
  {
    throw new Error('The ' + n_name + ' must be a positive values!');
  }
}

console.log(volume_Sphere(4.0));

console.log(volume_Sphere('4.0'));

console.log(volume_Sphere(-4.0));