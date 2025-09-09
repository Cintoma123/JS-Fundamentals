function factorial(n) {
    // Convert argument to integer and handle undefined case
    let num = parseInt(n);
    
    // If no argument or NaN, return 1
    if (!n || isNaN(num)) {
        return 1;
    }
    
    // Base case for recursive function
    if (num === 0 || num === 1) {
        return 1;
    }
    
    // Recursive case
    return num * factorial(num - 1);
}

console.log(factorial(process.argv[2]));