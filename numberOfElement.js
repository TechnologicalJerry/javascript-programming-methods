function test_same_elements_both_arrays(arra1, arra2) {
    var result = 0;
    for (var i = 0; i < arra1.length; i++) {
        for (var j = 0; j < arra2.length; j++) {
            if (arra1[i] === arra2[j]) {
                result++;
            }
        }
    }
    return result;
}
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [11, 22, 33, 44]));