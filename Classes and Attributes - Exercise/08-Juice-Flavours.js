function juices(juicesArr) {
    let juicesAmount = new Map();
    let juicesBottles = new Map();

    for (let index = 0; index < juicesArr.length; index++) {
        let [juicesName, amount] = juicesArr[index].split(' => ');
        amount = Number(amount);

        if (!juicesAmount.has(juicesName)) {
            juicesAmount.set(juicesName, 0);
        }
        let totalAmmount = juicesAmount.get(juicesName) + amount;

        if (totalAmmount >= 1000) {
            if (!juicesBottles.has(juicesName)) {
                juicesBottles.set(juicesName, 0)
            }
            let newBottles = Math.trunc(totalAmmount / 1000);
            let totalBottles = juicesBottles.get(juicesName) + newBottles;
            juicesBottles.set(juicesName, totalBottles);
        }
        juicesAmount.set(juicesName, totalAmmount % 1000);
    }
    return [...juicesBottles].map(([key, value]) => `${key} => ${value}`).join('\n');

}

console.log(juices(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
))