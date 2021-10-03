function solution() {
    let stringTxt = '';
    return {
        append,
        removeStart,
        removeEnd,
        print

    }

    function append(t) {
        stringTxt += t
    }
    function removeStart(n) {
        stringTxt = stringTxt.slice(n)
    }

    function removeEnd(n) {
        stringTxt = stringTxt.slice(0, -n)

    }
    function print() {
        console.log(stringTxt)
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
