let { expect } = require('chai');
const isOddOrEven = require('./even-or-odd');

describe('isOddOrEven tests', () => {

    it('undefined test', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
    });
    it('return even', () =>{
        expect(isOddOrEven('even')).to.equal('even');
    })
    it('return even', () =>{
        expect(isOddOrEven('odd')).to.equal('odd');
    })
})