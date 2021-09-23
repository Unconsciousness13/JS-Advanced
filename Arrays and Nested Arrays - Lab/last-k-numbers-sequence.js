function solved(arrLength, numToSum) {
    let result = [1];

    for(let i=1; i<arrLength; i++) {
         let startIndex = Math.max(0, i-numToSum);
         let currentElement = result.slice(startIndex, startIndex + numToSum).reduce((a, b) => a + b, 0);
         result.push(currentElement);
    }

    return result;
}
console.log(solved(8,2))

