// function solve(arr){
//     let result = [];
//     arr.reverse();
//     for(i = 0; i < arr.length; i++){
//         if(i % 2 === 0){
//             result.push(arr[i] * 2)

//         }
//     }
//     console.log(result.join(' '))
// }
function solve(arr) {
    return arr.filter((never, i) => i % 2 !== 0)
      .map(x => x * 2)
      .reverse()
      .join(' ');
  }
  
console.log(solve([10, 15, 20, 25]))
console.log(solve([3, 0, 10, 4, 7, 3]))