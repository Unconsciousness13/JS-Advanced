// function solve(arr) {
//     arr.sort((a, b) => a - b);
//     });
//     let newArr = []
//     divis = Math.ceil(arr.length / 2)
//     if (arr.length % 2 === 1) {
//         divis -= 1
//     }
//     for (let i = 1; i < arr.length; i++) {
//         if (i >= divis) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

function solve(arr) {
    arr.sort((a, b) => a - b);
    const middle = Math.floor(arr.length / 2);
    const result = arr.slice(middle);
    return result;
  }
  

console.log(solve([3, 19, 14, 7, 2, 19, 6]))
console.log(solve([4, 7, 2, 5]))