function solve(arr, times){
    for (let i = 0;i < times; i++){
        let temp = arr[arr.length - 1]
        arr.unshift(temp)
        arr.pop()
    }
    return arr.join(' ')
}



 console.log(solve(['Banana', 
 'Orange', 
 'Coconut', 
 'Apple'], 
 15
 
 ));