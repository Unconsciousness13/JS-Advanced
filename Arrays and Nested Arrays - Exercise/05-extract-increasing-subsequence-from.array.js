function solve(arr) {
    let newArr = arr.reduce((container, el) => {
        if (container.length === 0 | el >= container[container.length - 1]) {
            container.push(el);
        }
        return container;
    }, [])
    return newArr;
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));