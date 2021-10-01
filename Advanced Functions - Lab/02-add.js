function solve(n) {
    let numb = n

    return function add(n) {
        return numb + n
    }
}