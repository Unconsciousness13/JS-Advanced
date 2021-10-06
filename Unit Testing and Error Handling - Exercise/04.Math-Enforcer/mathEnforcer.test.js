let { expect, assert } = require('chai');
const mathEnforcer = require('./mathEnforcer')

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('add number is different of number', () => {
            expect(mathEnforcer.addFive('string')).to.equal(undefined);
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(6.1)).to.be.closeTo(11.1, 0.01);
            expect(mathEnforcer.addFive(-4)).to.equal(1);
        })

    });
    describe('subtractTen', () => {
        it('subtract number is different of number', () => {
            expect(mathEnforcer.subtractTen('string')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(16.1)).to.be.closeTo(6.1, 0.01);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);

        })


    });
    describe('sum', () => {
        it('subtract number is different of number', () => {
            expect(mathEnforcer.sum('string', 5)).to.equal(undefined);
            expect(mathEnforcer.sum(5, 'string')).to.equal(undefined);
            expect(mathEnforcer.sum('string', 'str')).to.equal(undefined);
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(5.2, 5)).to.be.closeTo(10.2, 0.01);
            expect(mathEnforcer.sum(-5, 5.0)).to.be.closeTo(0, 0.01);
            expect(mathEnforcer.sum(-5.2, 1)).to.be.closeTo(-4.2, 0.01);
            expect(mathEnforcer.sum(-2, -2)).to.equal(-4);


        })

    });

})