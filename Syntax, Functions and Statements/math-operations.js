function operations(first, second, operator) {
    let result;

    if (operator === '+') {
        result = first + second;
    }

    else if (operator === '-') {
        result = first - second;
    }
    else if (operator === '*') {
        result = first * second;
    }

    else if (operator === '/') {
        result = first / second;
    }

    else if (operator === '**') {
        result = first ** second;
    }

    else if (operator === '%') {
        result = first % second;
    }
    console.log(result)

}

operations(5, 6, '+')
operations(3, 5.5, '*')



// function operations(first, second, operator) {

//     let result;

//     switch (operator) {
//         case '+': result = first + second; break;
//         case '-': result = first - second; break;
//         case '*': result = first * second; break;
//         case '**': result = first ** second; break;
//         case '%': result = first % second; break;
//         case '/': result = first / second; break;
        
//     }
//     console.log(result)
// }
