function result (command) {
    const actions = {
        upvote: x => (x.upvotes += 1), downvote: x => (x.downvotes += 1), score: x => getScore(x),
    }

    function isObfuscable (votes) {
        return votes > 50
    }

    function getObfNum (u, d) {
        return Math.ceil(0.25 * Math.max(u, d))
    }

    function calcRating (u, d) {

        if (u + d < 10) return 'new'
        if (u > (u + d) * 0.66) return 'hot'
        if (u - d >= 0 && (u > 100 || d > 100)) return 'controversial'
        if (u - d < 0) return 'unpopular'

        return 'new'
    }

    function getScore ({upvotes, downvotes}) {
        const obfNum = isObfuscable(upvotes + downvotes) ? getObfNum(upvotes, downvotes) : 0
        const [rUps, rDowns] = [upvotes + obfNum, downvotes + obfNum]
        const balance = rUps - rDowns

        return [rUps, rDowns, balance, calcRating(upvotes, downvotes)]
    }

    return actions[command](this)
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     
