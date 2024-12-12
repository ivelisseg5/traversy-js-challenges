function calculator(num1, num2, operator) {
    
    let number;

    if (operator == '+'){ // the double equal signs mean "if this variable is equal to this value"
        return number = num1 + num2;
    } else if (operator == '-'){
        return number = num1 - num2;
    } else if (operator == '*'){
        return number = num1 * num2;
    } else if (operator == '/'){
        return number = num1 / num2;
    }else {
        throw new Error('Invalid operator');
    }
    
    // triple equal signs are like booleans & compare to see if the two variables are the exact same value
    // my previous mistake was a syntax error in which i used a signle equal sign for everything
}

module.exports = calculator;
