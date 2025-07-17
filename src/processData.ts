type Numerical = number|string|undefined;
function convertNumber(value: Numerical) {
    if (typeof value === "number") {
    	return value;   
    } else if (typeof value === "undefined"){
        return;
    }
    return Number.parseInt(value, 10);
}
function processData(values:Numerical[]) {
    for (let i = 0; i<values.length;i++){     
    values[i] = convertNumber(values[i]);  
    }    
    return values;
}
 


// Sample usage (do not modify)
console.log(processData([10, "15", 13, 12, "20"])); // [10, 15, 13, 12, 20]