function solve(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    });
    console.log(firstDiagonal + ' ' + secondDiagonal);
}

solve([[20, 40],[10, 60]])
solve([[3, 5, 17],[-1, 7, 14],[1, -8, 89]]
   )