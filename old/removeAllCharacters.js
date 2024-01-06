function remove_duplicate_cchars(str) {
    var arr_char = str.split("");
    var result_arr = [];

    for (var i = 0; i < arr_char.length; i++) {
        if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
            result_arr.push(arr_char[i]);
    }

    return result_arr.join("");
}
console.log(remove_duplicate_cchars("abcdabc"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1365451"));