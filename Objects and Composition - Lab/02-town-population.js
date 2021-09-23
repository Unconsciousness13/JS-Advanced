function townPopunation(arr){
    const result = {};
        for(let el = 0; el < arr.length; el++){
        let forSplit = arr[el].split(" <-> ");
        let name = forSplit[0];
        let population = Number(forSplit[1]);
        if (name in result){
            result[name] += population;
        }
        else
            result[name] = population;

    }
    for (let town in result){
        console.log(`${town} : ${result[town]}`);
    }
}
townPopunation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)