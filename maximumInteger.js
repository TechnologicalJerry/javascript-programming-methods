function sumn(val) {
    var sn = 0;
    var i = 0;
    while (sn <= val) {
        sn += i++;
    }
    return i - 2;
}
console.log(sumn(11))
console.log(sumn(15))