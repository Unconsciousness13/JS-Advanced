function solve(fruit,grams,price){
    let weightInKg = grams / 1000;
    let money = weightInKg * price;

    return `I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`
}


console.log(solve('orange', 2500, 1.80))
console.log(solve('apple', 1563, 2.35))