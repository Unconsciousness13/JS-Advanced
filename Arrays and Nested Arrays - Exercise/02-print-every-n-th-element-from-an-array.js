function solve(arr, marg) {
    result = []
    for (let i = 0; i < arr.length; i += marg){
        result.push(arr[i])
    }
    return result
}

console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2

))
