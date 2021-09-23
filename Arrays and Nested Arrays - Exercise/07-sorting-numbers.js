function solve(arr){
    arr.sort((a,b) => a - b);
    let result = [];
    while(arr.length){
        result.push(arr.shift());
        result.push(arr.pop());
    }
    return result.filter(num => num != undefined);
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))