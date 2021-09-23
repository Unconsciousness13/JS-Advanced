function townsToJson(arr) {
    let titles = serializeRow(arr[0]);
    let rows = arr
        .slice(1)
        .map(row => serializeRow(row).reduce(acomulateIntoObject, {}));

        
        return JSON.stringify(rows)

    function parseNumber(el) {
        return isNaN(Number(el)) ? el : Number(Number(el).toFixed(2));
    }

    function acomulateIntoObject(obj,el,i) {
        obj[titles[i]] = el;
        return obj;
    }

    function serializeRow(str) {
        return str
            .split(/\s*\|\s*/gim)
            .filter(x => x !== "")
            .map(x => parseNumber(x));
    }
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))