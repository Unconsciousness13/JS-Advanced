function subSum(arr,start,end){
    start = arr[start] === undefined ? 0 : start
    end = arr[end] === undefined ? arr.length - 1 : end

    try {
        return (arr.slice(start, end + 1)
            .reduce((a, v) => a + v, 0) * 10) / 10
    } catch (e) {
        return NaN
    }
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))