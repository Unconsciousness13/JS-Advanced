function solution(n) {
    let res = n
    return function solution2(n) {
        return res + n
    }

}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
