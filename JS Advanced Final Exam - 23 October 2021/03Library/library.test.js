const { expect, assert } = require('chai')
const library = require('./library')


describe('library', () => {
    describe('calcPriceOfBook', () => {
        it('test if diff of str and int', () => {
            expect(function() { library.calcPriceOfBook('test', 'testa') }).to.throw("Invalid input")
        })
        it('test if diff of str and int', () => {
            expect(function() { library.calcPriceOfBook(2, 'test') }).to.throw("Invalid input")
        })
        it('test if diff of str and int', () => {
            expect(function() { library.calcPriceOfBook(12, 22) }).to.throw("Invalid input")
        })
        it('year <= 1980', () => {
            expect(library.calcPriceOfBook('test', 1980)).to.equal("Price of test is 10.00")
        })
        it('year <= 1977', () => {
            expect(library.calcPriceOfBook('test', 1977)).to.equal("Price of test is 10.00")
        })
        it('year <= 1999', () => {
            expect(library.calcPriceOfBook('test', 1999)).to.equal("Price of test is 20.00")
        })

    })

    /// second 

    describe('find book', () => {
        it('throw error ', () => {
            expect(function() { library.findBook([], 'test') }).to.throw("No books currently available")
        })
        it('book found', () => {
            expect(library.findBook(['test', 'new'], 'test')).to.equal("We found the book you want.")
        })

        it('not book', () => {
            expect(library.findBook(['test', 'new'], 'other')).to.equal("The book you are looking for is not here!")
        })


    })


    /// third test case
    describe('arrangeTheBooks', () => {
        it('throw error not num ', () => {
            expect(function() { library.arrangeTheBooks('test') }).to.throw("Invalid input")
        })
        it('throw error number < 0', () => {
            expect(function() { library.arrangeTheBooks(-1) }).to.throw("Invalid input")
        })

        it('with num 40', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
        })

        it('with num 39 ', () => {
            expect(library.arrangeTheBooks(39)).to.equal("Great job, the books are arranged.")
        })

        it('with num 41 ', () => {
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
        })


    })
})