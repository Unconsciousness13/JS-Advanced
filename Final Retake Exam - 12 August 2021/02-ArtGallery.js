class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        if (!Object.keys(this.possibleArticles).includes(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        } else if (!this.listOfArticles.some(a => a['articleName'] == articleName && a['articleModel'] == articleModel.toLowerCase())) {
            this.listOfArticles.push({
                'articleModel': articleModel.toLowerCase(),
                'articleName': articleName,
                'quantity': Number(quantity)
            });
        } else {
            let article = this.listOfArticles.filter(a => a['articleName'] == articleName && a['articleModel'] == articleModel.toLowerCase())[0];
            article['quantity'] += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(g => g['guestName'] == guestName)) {
            throw new Error(`${guestName} has already been invited.`);
        }

        if (personality == 'Vip') {
            this.guests.push({
                'guestName': guestName,
                'points': 500,
                'purchaseArticle': 0
            })
        } else if (personality == 'Middle') {
            this.guests.push({
                'guestName': guestName,
                'points': 250,
                'purchaseArticle': 0
            })
        } else {
            this.guests.push({
                'guestName': guestName,
                'points': 50,
                'purchaseArticle': 0
            })
        }

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        if (!this.listOfArticles.some(a => a['articleName'] == articleName && a['articleModel'] == articleModel)) {
            throw new Error("This article is not found.");
        }
        let article = this.listOfArticles.filter(a => a['articleName'] == articleName && a['articleModel'] == articleModel.toLowerCase())[0];
        if (article['quantity'] == 0) {
            return `The ${articleName} is not available.`
        } else if (!this.guests.some(g => g['guestName'] == guestName)) {
            return "This guest is not invited."
        }
        let guest = this.guests.filter(g => g['guestName'] == guestName)[0];
        if (guest['points'] < this.possibleArticles[article['articleModel']]) {
            return "You need to more points to purchase the article.";
        } else {
            guest['points'] -= this.possibleArticles[article['articleModel']];
            article['quantity'] -= 1;
            guest['purchaseArticle'] += 1;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[article['articleModel']]} points.`
    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push("Articles information:");
            for (let article of this.listOfArticles) {
                result.push(`${article['articleModel']} - ${article['articleName']} - ${article['quantity']}`);
            }
        } else if (criteria == 'guest') {
            result.push("Guests information:");
            for (let guest of this.guests) {
                result.push(`${guest['guestName']} - ${guest['purchaseArticle']}`)
            }
        }
        return result.join('\n');
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));