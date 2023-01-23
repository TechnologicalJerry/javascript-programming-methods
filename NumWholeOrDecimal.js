function number_test(n)
{
   var result = (n - Math.floor(n)) !== 0; 
   
  if (result)
    return 'Number has a decimal place.';
   else
     return 'It is a whole number.';
  }

console.log(number_test(25.66));

console.log(number_test(10));