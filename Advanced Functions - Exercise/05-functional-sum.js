function funcSum(numb) {
    let sum = 0;
    function rec(x) {
        sum += x
        return rec
    }
    rec.toString = () => sum
    return rec(numb)

}

console.log(funcSum(1))
console.log(funcSum(1)(6)(-3))