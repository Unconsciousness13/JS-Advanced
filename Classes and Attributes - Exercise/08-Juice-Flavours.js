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


// function foo (arr) {
// 	const juices = {}
// 	const bottles = {}

// 	const addBottles = (n, q) => {
// 		const btlToAdd = (q - (q % 1000)) / 1000

// 		if (btlToAdd > 0) {
// 			bottles[n] = (bottles[n] || 0) + btlToAdd
// 			return q % 1000
// 		}

// 		return q
// 	}

// 	arr.forEach(x => {
// 		const [name, quantity] = x.split(' => ')
// 		juices[name] = juices[name] || 0

// 		juices[name] = addBottles(name, juices[name] + Number(quantity))

// 	})

// 	return Object.entries(bottles)
// 		.map(([name, quantity]) => `${name} => ${quantity}`)
// 		.join('\n')
// }