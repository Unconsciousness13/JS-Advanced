function createDeck(cards) {
    let result = [];
    for (let card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            result.push(createCard(face, suit));
        } catch (err) {
            console.log('Invalid card: ' + card);
            return;
        }

    }
    console.log(result.join(' '));
    /* console.log(cards.map(card => {
         const face = card.slice(0, -1);
         const suit = card.slice(-1);
         try {
         return createCard(face, suit);
         } catch (err) {
             
         }
     }).join(' ')); */
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };
        if (faces.includes(face) == false) {
            throw new Error('Invalid face: ' + face)
        }

        if (Object.keys(suits).includes(suit) == false) {
            throw new Error('Invalid suit ' + suit);
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }

}

createDeck(['AS', '10D', 'KH', '2C'])
createDeck(['5S', '3D', 'QD', '1C'])