// function subSum(arr,start,end){
//     start = arr[start] === undefined ? 0 : start
//     end = arr[end] === undefined ? arr.length - 1 : end

//     try {
//         return (arr.slice(start, end + 1)
//             .reduce((a, v) => a + v, 0) * 10) / 10
//     } catch (e) {
//         return NaN
//     }
// }


function subSum(arr, start, end) {
    if (Array.isArray(arr) == false) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    let sum = 0;

    for (let index = start; index <= end; index++) {
        sum += Number(arr[index]);

    }

    return sum
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))