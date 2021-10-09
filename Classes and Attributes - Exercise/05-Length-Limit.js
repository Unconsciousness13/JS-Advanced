class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(size) {
        this.innerLength += size;
    }
    decrease(size) {
        const cutedIndex = this.innerLength - size;
        if (cutedIndex < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength = cutedIndex;
        }
        // const result = this.innerLength - size
        // this.innerLength = result < 0 ? 0 : result


    }
    toString() {
        if (this.innerLength === 0) {
            return '...'
        }
        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`;
        }

        return this.innerString

    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
