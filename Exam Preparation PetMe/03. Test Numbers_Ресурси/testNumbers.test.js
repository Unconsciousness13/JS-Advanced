let { expect } = require('chai')
const testNumbers = require('./testNumbers')

describe('testNumbers', () => {
    describe('sumNumbers', function() {
        it('if parameters arent numbers return undefined', function() {
            expect(testNumbers.sumNumbers('3', 2)).to.equal(undefined);
        })
        it('check if parameters are  numbers', function() {
            expect(testNumbers.sumNumbers(3, 2)).to.equal('5.00');
        })
        it('numbers can be positive and negative', function() {
            expect(testNumbers.sumNumbers(-2, 3)).to.equal('1.00');
        })
    })


    describe('numberChecker', function() {
        it('check if is even', function() {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        })
        it('check if is odd', function() {
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
        })
        it('input not a number', function() {
            expect(function() { testNumbers.numberChecker('hello') }).to.throw('The input is not a number!');
        })

    })

    describe('averrageSumArray', function() {
        it('correct output', function() {
            expect(testNumbers.averageSumArray([1, 2])).to.equal(1.5);
        })

    })
})