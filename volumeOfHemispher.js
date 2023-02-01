const volume_Hemisphere = (radius) => {
    is_Number(radius, 'Radius');
    return (2.0 * Math.PI * radius ** 3)/3.0
  }
  const is_Number = (n, n_name = 'number') => {
    if (typeof n !== 'number') {
      throw new TypeError('The ' + n_name + ' is not Number type!');
      } 
      else if (n < 0 || (!Number.isFinite(n))) ;
      {
      throw new Error('The ' + n_name + ' must be a positive values!');
      }
  }
  console.log(volume_Hemisphere(4.0));
  console.log(volume_Hemisphere('4.0'));
  console.log(volume_Hemisphere(-4.0));