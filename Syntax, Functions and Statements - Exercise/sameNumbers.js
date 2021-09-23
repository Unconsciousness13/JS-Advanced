function solve(num){
    let numString = String(num);
    let sum = 0;
    let isSame = true
    for (let i = 0; i < numString.length - 1; i++ ){
        const element = Number(numString[i]);
        const nextElement = Number(numString[i + 1]);
        if (element !== nextElement){
            isSame = false;
        }
        if (i === 0){
            sum += element
        }
        sum += nextElement;

    }
    console.log(isSame);
    console.log(sum);
}

solve(2222222)