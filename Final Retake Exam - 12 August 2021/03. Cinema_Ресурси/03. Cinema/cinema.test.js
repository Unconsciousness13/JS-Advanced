describe('cinema', () => {
    describe('show movies', () => {
            it('checking movies length if 0', () => {
                expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
            })
            it('checking movies length if more than 0', () => {
                expect(cinema.showMovies(['King Kong', 'The Tomorrow War'])).to.have.length.above(2);
            })
            it('checking movies length if more than 0', () => {
                expect(cinema.showMovies(['King Kong', 'The Tomorrow War'])).to.have.length.above(2);
            })
            it('checking movies to join', () => {
                expect(cinema.showMovies(['King Kong', 'The Tomorrow War'])).to.equal('King Kong, The Tomorrow War');
            })
        })
        // ticket price , im tired to escribe new describes only to show the method .... but ok will do it anyway
    describe('ticket price', () => {
        it('projection type normal', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        })
        it('projection type discount', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        })
        it('projection type error', () => {
            expect(() => cinema.ticketPrice('das')).to.throw('Invalid projection type.');
        })
        it('empty string', () => {
            expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.');
        })

        it("Premiere price", function() {
            expect(cinema.ticketPrice("Premiere")).to.be.equal(12.00);
        })

    })


    describe('swap seats', () => {

        it("floating number given", function() {
            expect(cinema.swapSeatsInHall(1.25, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
        it("greater than 20 number given", function() {
            expect(cinema.swapSeatsInHall(25, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })

        it("negative number given", function() {
            expect(cinema.swapSeatsInHall(-5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
        it("0 given as number", function() {
            expect(cinema.swapSeatsInHall(0, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
        it("equal numbers", function() {
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
        it("both numbers out of range", function() {
            expect(cinema.swapSeatsInHall(25, 26)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
        it("invalid param type", function() {
            expect(cinema.swapSeatsInHall("movie", null)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
        it("only 1 param passed", function() {
            expect(cinema.swapSeatsInHall(5)).to.be.equal("Unsuccessful change of seats in the hall.");
        })
        it('if swap is succesfull', () => {
            expect(cinema.swapSeatsInHall(3, 2)).to.equal("Successful change of seats in the hall.");
        })
        it('if num not intiger', () => {
            expect(cinema.swapSeatsInHall(3, 'bla')).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('0', () => {
            expect(cinema.swapSeatsInHall(3, 0)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('more than 20  first param', () => {
            expect(cinema.swapSeatsInHall(21, 3)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('more than 20  bouth param', () => {
            expect(cinema.swapSeatsInHall(22, 23)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it('null', () => {
            expect(cinema.swapSeatsInHall('m=ov', null)).to.equal('Unsuccessful change of seats in the hall.');
        })
        it("1 and 2 numbers given", function() {
            expect(cinema.swapSeatsInHall(1, 20)).to.be.equal("Successful change of seats in the hall.");
        })

    })
});