function extractText() {
    elements = document.querySelectorAll('ul li');
    area = document.querySelector('textarea');
    result = [];
    for (let index = 0; index < elements.length; index++) {
        result.push(elements[index].textContent)

    }
    area.textContent = result.join('\n');
}