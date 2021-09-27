function towns(arr) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        if (index === 0) {
            let [town, latitude, longitude] = arr[index].split(' | ')
            town = town.slice(1);
            town.trim();
            longitude = longitude.slice(-1);
            longitude.trim()
        }
        else {
            let [townName, lat, long] = arr[index].split(' | ')
            townName = townName.slice(2);
            townName.trim()
            long = long.slice(0,-2);
            long.trim()
            result.push({
                Town: townName,
                Latitude: Number(Number(lat).toFixed(2)),
                Longitude: Number(Number(long).toFixed(2))
            })
        }


    } 
    
    return JSON.stringify(result)
}




console.log(towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']))