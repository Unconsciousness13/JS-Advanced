const { expect, assert } = require('chai')
const testNumbers = require('./testNumbers')

describe('testNumbers', () => {
    // test first
    describe('sumNumbers', () => {
        it('number is different of number return undefined', () => {
            expect(testNumbers.sumNumbers('text', 2)).to.equal(undefined)
        })
        it('number correct output', () => {
            expect(testNumbers.sumNumbers(2, 2)).to.equal('4.00')
        })
    })

    // test second 
    describe('numberChecker', () => {
        it('if is NaN', () => {
            expect(function() { testNumbers.numberChecker('text') }).to.throw('The input is not a number!')
        })

        it('if is even', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!')
        })

        it('if is odd', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!')
        })
    })

    // test third 
    describe('average sum array', () => {
        it('is correct average sum array', () => {
            expect(testNumbers.averageSumArray([3, 3, 3])).to.equal(3)
        })

    })

})