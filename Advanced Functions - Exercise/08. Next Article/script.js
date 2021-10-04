function getArticleGenerator(articles) {
    const output = document.getElementById("content")
    const outputCopy = articles.slice()

    return function showNext(arr = []) {
        if (outputCopy[0] !== undefined) {
            const article = document.createElement("article")
            article.textContent = outputCopy.shift()
            output.appendChild(article)
        }

        return showNext
    }
}

