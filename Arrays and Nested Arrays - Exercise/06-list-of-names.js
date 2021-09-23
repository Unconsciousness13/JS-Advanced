function solve(strArr){   
    let newArr = strArr.sort((a, b) => a.localeCompare(b))
        for (let index = 0; index < strArr.length; index++) {
            console.log(`${index+1}.${newArr[index]}`);
            
        }
}

solve(["John", "Bob", "Christina", "Ema"])