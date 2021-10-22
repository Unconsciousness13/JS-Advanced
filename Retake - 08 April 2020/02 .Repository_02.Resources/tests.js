const { expect, assert } = require('chai')
let { Repository } = require("./solution.js");

describe(`Testing class`, () => {
    let instance = {}

    beforeEach(() => instance = new Repository({
            name: 'string',
            age: 'number',
            birthday: 'object'
        }))
        // init
    describe('test count', function() {
            it('inst count', function() {
                expect(instance.count).to.equal(0)
            })
        })
        // add method
    describe('test .add', function() {
        it('valid obj passed', function() {
            expect(instance.add({ name: 'Pako', age: 40, birthday: {} })).to.equal(0)
        })
    })

    // update method 
    describe(`testing .getId()`, () => {
        it(
            `input ID which is not present in the data collection -> throw`,
            () => {
                expect(() => instance.getId(1)).to
                    .throw('Entity with id: 1 does not exist!')
            }
        )
    })

    describe(`testing .update()`, () => {
        it(
            `input ID which is not present in the data collection -> throw`,
            () => {
                expect(() => instance.update(0, {}, )).to
                    .throw(`Entity with id: 0 does not exist!`)
            }
        )
        it(`any property is missing from input object -> throw Error`, () => {
            instance.add({ name: '', age: 0, birthday: {}, })
            expect(() => instance.update(
                0, { age: 1, birthday: { date: 0 } }
            )).to.throw
        })
        it(`typeof input[name] !== string -> throw TypeError`, () => {
            instance.add({ name: '', age: 0, birthday: {}, })
            expect(() => instance.update(
                0, { name: 0, age: 1, birthday: { date: 0 } }
            )).to.throw(TypeError)
        })
    })

    describe(`testing .del()`, () => {
        it(`deletes index properly`, () => {
            instance.add({ name: '', age: 1, birthday: {} })
            instance.add({ name: '', age: 1, birthday: {} })
            instance.del(1)
            expect(instance.data.has(1)).to.eq(false)
        })
        it(`throws on index which does not exist in the collection`, () => {
            expect(() => instance.del(-1)).to
                .throw(`Entity with id: -1 does not exist!`)
        })
    })



})