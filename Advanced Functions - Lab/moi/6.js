function listProcessor(arr) {
    const setArr = arr;
    let result = [];
    for (let index = 0; index < setArr.length; index++) {
        splited = setArr[index].split(' ')
        let command = splited[0];
        let word = splited[1];
        if (command === 'add') {
            result.push(word);
        }
        else if (command === "remove") {
            result = result.filter(i => i !== word)
        }
        else if (command === "print") {
            console.log(result.join(","));
        }

    }

}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']))