// Get user input
let operation = prompt("What would you like to calculate? (Example: 4*5, 10/4, 8+3, etc");

if(operation.includes("+")){
    let operands_array = operation.split("+");
    var result = (Number(operands_array[0]) + Number(operands_array[1]));
}

else if(operation.includes("-")){
    let operands_array = operation.split("-");
    var result = (Number(operands_array[0]) - Number(operands_array[1]));
}

else if(operation.includes("*")){
    let operands_array = operation.split("*");
    var result = (Number(operands_array[0]) * Number(operands_array[1]));
}

else if(operation.includes("/")){
    let operands_array = operation.split("/");
    var result = (Number(operands_array[0]) / Number(operands_array[1]));
}

else if(operation.includes("%")){
    let operands_array = operation.split("%");
    var result = (Number(operands_array[0]) % Number(operands_array[1]));
}

else{
    let result = "Use only two operands, and perform one operation at a time!\nAllowed operands: addition(+), subtraction(-), multiplication(*), division(/), and modulo(%)";
}

if(isNaN(result)){
    print("Please use only numbers to perform your operation!");
}

else{
    print(result)
}
