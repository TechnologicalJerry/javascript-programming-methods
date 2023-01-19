function is_Natural(n) 
      {
	   if (typeof n !== 'number') 
	        return 'Not a number'; 
			
	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
	    }
console.log(is_Natural(-15));
console.log(is_Natural(1));console.log(is_Natural(10.22));
console.log(is_Natural(10/0));