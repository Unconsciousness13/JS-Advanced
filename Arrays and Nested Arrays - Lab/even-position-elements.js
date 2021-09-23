function solve(input) {
    let result = '';
    for (let numb = 0; numb < input.length; numb+=2) {
        result += input[numb] + " "

    }
    return result
}

console.log(solve(['20', '30', '40', '50', '60']))


// function solve(input) {
//     let result = '';
//     for (let numb = 0; numb < input.length; numb++) {
//         if (numb % 2 == 0) {
//             result += input[numb] + " "
//         }
//     }
//     return result
// }