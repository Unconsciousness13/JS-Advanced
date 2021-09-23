function solve(matrix) {
    let magicSum = Number.MIN_SAFE_INTEGER;
    let isMagic = true;

    for (let row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        let colSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            rowSum += matrix[row][col];
            colSum += matrix[col][row];
        }
        if (magicSum === Number.MIN_SAFE_INTEGER) {
            magicSum = rowSum
        }
        if (rowSum !== magicSum) {
            isMagic = false;
        }
    }
    return isMagic
}

console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));