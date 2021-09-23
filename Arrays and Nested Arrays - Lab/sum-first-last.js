function solved(lArray) {
    let result = 0;
    let first = lArray[0]
    let last = lArray[lArray.length - 1]
    result = Number(first) + Number(last)
    return result
}

console.log(solved(['20', '30', '40']))