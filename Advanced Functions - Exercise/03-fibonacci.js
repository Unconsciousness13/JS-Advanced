function getFibonator() {
    let first = 0;
    let second = 0;
    return () => {
        let res = first + second;
        first = second || 1;
        second = res;
        return res || 1;
    }

}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
