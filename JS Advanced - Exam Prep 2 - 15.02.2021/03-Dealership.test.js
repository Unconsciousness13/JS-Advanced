let dealership = {
    newCarCost: function(oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function(extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function(category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}


///// TESTINGGGGGGG !!!!!!!!

const { expect, assert } = require('chai')
    // const dealership = require('./dealership')

describe('dealership', () => {
    // first method
    describe('new car cost', () => {
            it('discount if  old car not in list of cars', () => {
                expect(dealership.newCarCost('Lada Niva', 33333)).to.equal(33333)
            })
            it('discount if had old car', () => {
                expect(dealership.newCarCost('Audi A4 B8', 35000)).to.equal(20000)
            })

        })
        // second method
    describe('car equipment', () => {
            it('check if arrays', () => {
                expect(dealership.carEquipment(['heated seats', 'sliding roof'], [0, 1])).to.have.members(['heated seats', 'sliding roof'])
            })
            it('empty index array', () => {
                expect(dealership.carEquipment(['heated seats', 'sliding roof'], [])).to.have.members([])
            })

        })
        // third method
    describe('euro category', () => {
        it('checking if category is >= 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        it('checking if category is more than 4', () => {
            let price = 30000;
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)

        })
        it('checking if category is more than 4', () => {
            let price = 30000;
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)

        })
    })

})