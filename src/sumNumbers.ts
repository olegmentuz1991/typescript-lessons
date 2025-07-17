function sumNumbers(numbers:number[]) {
    let sum:number = 0;
    for (const i of numbers){
        sum += i; }
     return sum;
}

// Sample usage (do not modify)
console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([5, 3])); // 8