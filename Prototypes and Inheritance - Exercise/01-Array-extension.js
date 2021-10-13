(function() {

    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        if (n === 0) {
            return this;

        } else if (!Number.isInteger(n) || n < 0) {
            throw new Error

        } else {

            let result = [];
            for (let i = n; i < this.length; i++) {
                result.push(this[i]);
            }

            return result;
        }
    }


    Array.prototype.take = function(n) {
        if (n === 0) {
            return [];

        } else if (!Number.isInteger(n) || n < 0) {
            throw new Error

        } else {

            let result = [];
            for (let i = 0; i < n; i++) {
                result.push(this[i]);
            }

            return result;

        }
    }


    Array.prototype.sum = function() {
        return this.reduce((acc, val) => {
            acc += val;
            return acc;
        }, 0);
    }

    Array.prototype.average = function() {
        return this.sum() / this.length;
    }


})();