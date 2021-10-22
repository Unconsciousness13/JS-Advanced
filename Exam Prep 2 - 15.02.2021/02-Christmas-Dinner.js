class ChristmasDinner {
    constructor(budget) {
        this.budget = Number(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};

    }
    get budget() {
        return this._budget;
    }
    set budget(value) {
        if (value < 0) {
            throw new Error('"The budget cannot be a negative number"')
        }
        this._budget = Number(value);
    }

    shopping(product) {
        let type = product[0];
        let price = product[1];
        price = Number(price);
        if (this._budget < price) {
            throw new Error("Not enough money to buy this product")
        }

        this._budget -= price;
        this.products.push(type);
        return `You have successfully bought ${type}!`
    }



    recipes(recipe) {
        let counter = 0;
        for (let index = 0; index < recipe.productsList.length; index++) {
            let product = recipe.productsList[index];
            if (this.products.includes(product)) {
                counter++

            }

        }
        if (counter < recipe.productsList.length) {
            throw new Error("We do not have this product")
        } else {
            this.dishes.push(recipe)
            return `${recipe.recipeName} has been successfully cooked!`
        }
    }

    inviteGuests(name, dish) {

        if (!dish in Object.keys(this.dishes)) {
            throw new Error("We do not have this dish")
        }
        if (name in this.guests) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish
        return `You have successfully invited ${name}!`;
    }



    showAttendance() {
        let result = [];
        for (const name in this.guests) {
            let dish = this.guests[name];
            let products = this.dishes.find((d) => d.recipeName == dish)
            result.push(`${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`);
        }
        return result.join('\n');
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());