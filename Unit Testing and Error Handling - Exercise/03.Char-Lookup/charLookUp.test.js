let { expect, assert } = require('chai');
const lookupChar = require('./charLookUp')

describe('testing char look up', () => {
    it('return undef if first parameter is not a string', () => {
        expect(lookupChar(undefined, 1)).to.equal(undefined);
        expect(lookupChar(1, 1)).to.equal(undefined);
    });
    it('return undefined when sec parameter is not a integer', () => {
        expect(lookupChar('string', undefined)).to.equal(undefined);
        expect(lookupChar('string', null)).to.equal(undefined);
        expect(lookupChar('string', '1')).to.equal(undefined);
        expect(lookupChar('string', 2.36)).to.equal(undefined);

    })
    it('should return incorect index string when index not in range', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
        expect(lookupChar('string', 6)).to.equal('Incorrect index');

    })

    it('should return correct char when bouth parameters is valid', () => {
        expect(lookupChar('string', 0)).to.equal('s');
        expect(lookupChar('string', 5)).to.equal('g');

    })


})