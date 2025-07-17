function countTruthy(booleans:boolean[]) {
    let count:number = 0;
for(const i of booleans){
    if (i === true){
        count++;
    };
}
return count;
}

// Sample usage (do not modify)
console.log(countTruthy([true, false, false])); // 1
console.log(countTruthy([false, false])); // 0
console.log(countTruthy([false, true, true, false, true])); // 3