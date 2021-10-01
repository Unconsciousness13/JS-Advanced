function listProcessor(input) {
    let list = []

    let object = {
        add: str => list.push(str),
        remove: str => (list = list.filter(x => x !== str)),
        print: () => console.log(list.join(",")),
    }

    input.forEach(x => {
        const [data, value] = x.split(" ")

        object[data](value)
    })
}