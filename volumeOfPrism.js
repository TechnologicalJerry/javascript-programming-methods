const volume_Pentagonal_Prism = (base_edge, height) => {
    is_Number(base_edge, 'Base Edge');
    is_Number(height, 'Height');
    return (1/4*height*base_edge*base_edge*Math.sqrt(5*(5+2*(Math.sqrt(5)))));
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
  console.log(volume_Pentagonal_Prism(4.0, 8.0));
  console.log(volume_Pentagonal_Prism('4.0', 8.0));
  console.log(volume_Pentagonal_Prism(4.0, -8.0));