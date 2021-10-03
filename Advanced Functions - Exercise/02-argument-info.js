function argInfo(...arr) {
    let obj = {};
    // mapping the args converting the args into object with type of and value 
    let res = arr.map(o => {
        obj[typeof o] = (obj[typeof o] || 0) + 1
        return `${typeof o}: ${o}`
    });
    res.forEach(r => console.log(r))
    Object.entries(obj)
        // sort descending order
        .sort((k, v) => v[1] - k[1])
        // mapping the object to array and print : key value 
        .map(([text, counter]) =>
            console.log(`${text} = ${counter}`));

}
argInfo('cat', 42, function () { console.log('Hello world!'); })
argInfo({ name: 'bob'}, 3.333, 9.999)