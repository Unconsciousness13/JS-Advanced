function store(inpArr) {
    let productCatalogue = {};
    for (let index = 0; index < inpArr.length; index++) {
        let [productName, productPrice] = inpArr[index].split(' : ');
        productPrice = Number(productPrice);
        let initial = productName[0].toUpperCase();

        if (productCatalogue[initial] === undefined) {
            productCatalogue[initial] = {};

        }
        productCatalogue[initial][productName] = productPrice;
    }
    let result = [];
    let initialSorted = Object.keys(productCatalogue).sort((a, b) => a.localeCompare(b));
    for (const key of initialSorted) {
        // if (Object.hasOwnProperty.call(object,key)){
        //     const element = object[key];
        let products = Object.entries(productCatalogue[key])
            .sort((a, b) => a[0].localeCompare(b[0]));
        result.push(key);
        let productsAsStrings = products
            .map(p => `  ${p[0]}: ${p[1]}`)
            .join('\n')
        result.push(productsAsStrings);
    }
    return result.join('\n')
}


console.log(store(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))