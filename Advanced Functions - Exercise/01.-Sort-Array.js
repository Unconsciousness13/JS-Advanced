function sortArray(arr, order) {
    if (order === "asc") {
        return arr.sort((a, b) => Number(a - b))
    } else if (order === 'desc') {
        return arr.sort((a, b) => Number(b - a))
    }
    else {
        throw Error("Wrong order !");
    }
}
// short version
// return order === "asc" ? arr.sort((x, y) => x - y) : arr.sort((x, y) => y - x)
console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))
console.log(sortArray([14, 7, 17, 6, 8], 'sort'))

