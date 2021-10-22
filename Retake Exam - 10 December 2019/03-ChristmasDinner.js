class ChristmasDinner {
    constructor(budg) {
        this._budget = budg
        this.dishes = []
        this.products = []
        this.guests = {}
    }

    set _budget(value) {
        if (value < 0)
            throw new Error('The budget cannot be a negative number')

        this.budget = value
    }




    smd = (dishName) => this.dishes.find(x => x.recipeName === dishName)

    shopping(product) {
        if (this.budget < product[1]) throw new Error('Not enough money to buy this product')

        this.products.push(product[0])
        this.budget -= product[1]

        return `You have successfully bought ${product[0]}!`
    }

    recipes({ recipeName, productsList }) {
        if (productsList.every(x => this.products.includes(x))) {
            this.dishes.push({ recipeName, productsList })
            return `${recipeName} has been successfully cooked!`
        }
        throw new Error('We do not have this product')

    }

    inviteGuests(name, dish) {
        if (this.smd(dish) === undefined)
            throw new Error('We do not have this dish')
        if (this.guests[name] !== undefined) {
            throw new Error('This guest has already been invited')
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`


    }

    showAttendance() {
        return Object.entries(this.guests)
            .map(([name, dish]) => `${name} will eat ${dish}, which consists of ${
				this.smd(dish).productsList.join(', ')
			}`).join('\n')
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