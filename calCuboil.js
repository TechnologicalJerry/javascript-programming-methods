const vol_Cuboid = (width, length, height) => {
    is_Number(width, 'Width')
    is_Number(length, 'Length')
    is_Number(height, 'Height')
    return (width * length * height)
   }
   const is_Number = (n, n_name = 'number') => {
    if (typeof n !== 'number') {
      throw new TypeError('The ' + n_name + ' is not Number type!')
    } else if (n < 0 || (!Number.isFinite(n))) {
      throw new Error('The ' + n_name + ' must be a positive values!')
    }
   }
   console.log(vol_Cuboid(3.0, 2.0, 4.0))
   console.log(vol_Cuboid('3.0', 2.0, 4.0))
   console.log(vol_Cuboid(3.0, -2.0, 4.0))