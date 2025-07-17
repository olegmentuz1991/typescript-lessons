function formatTemperatures(temperatures: number[]) {
	return temperatures.map(temperature => {
        // TypeScript automatically infers that `temperature` is of type `number`
       	return temperature.toFixed(2);
    });
}

function logLowerNames(names: string[]) {
    names.forEach(name => {
       	// TypeScript automatically infers that `name` is of type `string`
       	console.log(name.toLowerCase()); 
    });
}

// Sample usage (do not modify)
console.log(formatTemperatures([4, 5.5]));
logLowerNames(["Sam", "Alex"]);