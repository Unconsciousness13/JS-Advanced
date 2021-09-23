function createSortedList() {
    let arr = [];
    return {
        add(element) {
            arr.push(element);
            this.size += 1;
            arr.sort((a, b) => a - b);
        },
        remove(index) {
            if (index < 0 || index >= arr.length) {
                throw new RangeError('Index out of range')
            }
            arr.splice(index, 1);
            this.size -= 1;
        },
        get(index) {
            if (index < 0 || index >= arr.length) {
                throw new RangeError('Index out of range')
            }
            return arr[index];
        },
        size: 0
    }
    
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
