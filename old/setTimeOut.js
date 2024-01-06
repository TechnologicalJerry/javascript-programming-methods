function firstSetTimeout() {
    console.log('Hello world, This is First set time out');
}
function secondSetTimeout() {
    console.log('Hello world, This Second is set time out');
}

setTimeout(firstSetTimeout, 3000);
setTimeout(secondSetTimeout, 6000);
console.log('The Second message will show after 3 Seconds');
console.log('The Third message will show after 6 Seconds');