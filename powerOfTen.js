const is_Power_Of_Ten = num => Math.log10(num) % 1 === 0;
console.log(is_Power_Of_Ten(1));
console.log(is_Power_Of_Ten(10));
console.log(is_Power_Of_Ten(30));
console.log(is_Power_Of_Ten(100));
console.log(is_Power_Of_Ten(90));
console.log(is_Power_Of_Ten(1000));