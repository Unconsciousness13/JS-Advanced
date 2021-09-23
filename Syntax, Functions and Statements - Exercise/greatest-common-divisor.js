function solve(first, second) {
    while (second > 0){
        let temp = second;
        second = first % second;
        first = temp;
    }

    return first;
}

console.log(solve(15,5))