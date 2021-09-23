function heroicInventory(arr) {
    let heroesData = [];
    for (let index = 0; index < arr.length; index++) {
        let [name, level, items] = arr[index].split(' / ');
        level = Number(level);
        items = items !== undefined ? items.split(', ') : [];

        heroesData.push({name , level , items});

    }
    return JSON.stringify(heroesData);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
))