function calculator() {
    let first;
    let second;
    let result;

    function init(s1, s2, s3) {
        first = document.querySelector(s1);
        second = document.querySelector(s2);
        result = document.querySelector(s3);
    }

    function add() {
        result.value = Number(first.value) + Number(second.value);
    }

    function subtract() {
        result.value = Number(first.value) - Number(second.value);
    }

    return {
        init, add, subtract
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result')

// function calculator() {
//     const html = { s1: "", s2: "", output: "" }

//     function calc(a, b, sign) {
//         const signs = { "+": (a, b) => a + b, "-": (a, b) => a - b }

//         return signs[sign](Number(a), Number(b))
//     }

//     return {
//         init: (a, b, c) => {
//             html.s1 = document.querySelector(a)
//             html.s2 = document.querySelector(b)
//             html.output = document.querySelector(c)
//         },
//         add: () =>
//             (html.output.value = calc(html.s1.value, html.s2.value, "+")),
//         subtract: () =>
//             (html.output.value = calc(html.s1.value, html.s2.value, "-")),
//     }
// }
