const { expect, assert } = require('chai');
const ChristmasMovies = require('./02-christmasMovies')


describe("Christmas Movie", function() {
    let instance = {}
    beforeEach(() => instance = new ChristmasMovies())

    describe("test constructor", () => {
            it('if have all properties', () => {
                // to be empty list
                expect(instance.movieCollection).to.be.deep.equal([]);
                // to be empty object
                expect(instance.watched).to.be.deep.equal({});
                // to be empty list
                expect(instance.actors).to.be.deep.equal([]);
            })

        })
        // tests buy Movie
    describe('buy moivie', () => {
            it('correct buy movie', () => {
                expect(instance.buyMovie('Thor', ['Tigar', 'Spas', 'Tigar'])).to.equal('You just got Thor to your collection in which Tigar, Spas are taking part!');
            })

            it('throw error movie is alredy brought', () => {
                instance.buyMovie('Thor', ['Tigar'])
                expect(() => instance.buyMovie('Thor', ['Tigar'])).to.throw(`You already own Thor in your collection!`);
            })


        })
        // Tests discard Movie
    describe('discard movie', () => {
        it('throw error not watched', () => {
            instance.buyMovie('Thor', ['Tigar'])
            expect(() => instance.discardMovie('Thor')).to.throw('Thor is not watched!');
        })
        it('throw error not in collection', () => {
            expect(() => instance.discardMovie('Thor')).to.throw('Thor is not at your collection!');
        })
        it('correct watched and throw it', () => {
            instance.buyMovie('Thor', ['Tigar'])
            instance.watched.Thor = 1
            expect(instance.discardMovie('Thor')).to.equal(`You just threw away Thor!`);
        })
    })

    // test watch movie 
    describe('watch movie', () => {
        it('throw not watched', () => {
            expect(() => instance.watchMovie('Thor')).to.throw('No such movie in your collection!');
        })

        it('watched 1 time', () => {
            instance.buyMovie('Thor', ['Tigar'])
            instance.watchMovie('Thor')
            expect(instance.watched).to.deep.equal({ Thor: 1 });
            instance.watchMovie('Thor')
            expect(instance.watched).to.deep.equal({ Thor: 2 });
        })

    })

    // favorite movie 
    describe('favorite movie', () => {
        it('throw errow not movie', () => {
            expect(() => instance.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
        })
        it('correct output', () => {
            instance.watched.Thor = 1
            instance.watched.MandrasaneIzmesto = 2
            expect(instance.favouriteMovie()).to.equal('Your favourite movie is MandrasaneIzmesto and you have watched it 2 times!');
        })


    })

    // most starred actor
    describe('most starred actor', () => {
        it('throw errow not watched movie this year', () => {
            expect(() => instance.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
        })
        it('return most starred actor', () => {
            instance.buyMovie('Thor', ['Tigar', 'Cezar'])
            instance.buyMovie('Smart', ['Tigar', 'Spas'])
            expect(instance.mostStarredActor()).to.equal('The most starred actor is Tigar and starred in 2 movies!');
        })

    })

});