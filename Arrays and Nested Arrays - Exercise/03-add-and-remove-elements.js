function solve(arr){
    let counter = 0;
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "add"){
            counter +=1
            newArr.push(counter)
        }
        else if (arr[i] === "remove"){
            counter +=1
            newArr.pop()
    }

}
    if (newArr.length > 0){
    return newArr.join('\n')
    }
    else{
        return `Empty`
    }
}
console.log(solve(['remove', 
'remove', 
'remove']


))
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
));