function change_char(str1) {
    var result = [];
    for (var i = 0; i < str1.length; i++) {
        var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
            change_char = 25 - char_order + 'a'.charCodeAt(0);
        result.push(String.fromCharCode(change_char));
    }
    return result.join("");
}
console.log(change_char("abcxyz"));
console.log(change_char("python"));  