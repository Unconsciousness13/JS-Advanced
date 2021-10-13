(function() {

    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str + this;
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this + str;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function() {
        return this.length === 0;
    }

    String.prototype.truncate = function(n) {

        if (this.length <= n) {
            return this.toString();

        }
        if (this.length > n) {
            if (this.includes(' ')) {
                let spaceIdx = this.indexOf(' ');
                let nextSpaceIdx = this.indexOf(' ', spaceIdx + 1);

                while (nextSpaceIdx > 0 && nextSpaceIdx + 3 <= n) {
                    spaceIdx = nextSpaceIdx;
                    nextSpaceIdx = this.indexOf(' ', spaceIdx + 1);
                }

                return this.slice(0, spaceIdx) + '...';

            } else {
                if (n < 4) {
                    return '.'.repeate(n);
                }

                return this.slice(0, n - 3) + '...';

            }

        }
    }



    String.format = function(str, ...restParameters) {

        let idx = 0;

        return str.split(' ')
            .map(word => {

                if (word === `{${idx}}` && restParameters[idx]) {
                    word = restParameters[idx];

                    idx++;
                }

                return word;
            })
            .join(' ');
    }


})();