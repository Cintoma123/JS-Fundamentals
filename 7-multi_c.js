function printCIsFun(x) {
    let num = parseInt(x);
    
    if (isNaN(num)) {
        console.log("Missing number of occurrences");
        return;
    }

    let output = "";
    for (let i = 0; i < num; i++) {
        output += "C is fun\n";
    }
    console.log(output.trim());
}

printCIsFun(process.argv[2]);