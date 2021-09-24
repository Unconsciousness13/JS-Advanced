function solve() {
  let textAreaElement = document.getElementById('input');

  let text = textAreaElement.value;

  let sentences = text.split('.')
    .filter(x => x !== "")
    .map(x => x + '.');

  let paragraphRoof = Math.ceil(sentences.length / 3);

  let resultDiv = document.getElementById('output');
  for (let index = 0; index < paragraphRoof; index++) {
    resultDiv.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`

  }

}