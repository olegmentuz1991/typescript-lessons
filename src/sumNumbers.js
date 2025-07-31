function sumNumbers(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var i = numbers_1[_i];
        sum += i;
    }
    return sum;
}
// Sample usage (do not modify)
console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([5, 3])); // 8
