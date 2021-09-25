function solve() {
  let input = document.getElementById('text').value;
  let typeOfCase = document.getElementById('naming-convention').value;
  let result = ''
  let counter = 0
  input = input.split(' ')
  for (let word of input) {
    word = word.toLowerCase();
    if (typeOfCase === "Camel Case") {
      if (counter === 0) {
        result += word
        counter++;
      }
      else {
        result += word[0].toUpperCase()
        result += word.slice(1)
      }
    }
    else if (typeOfCase === "Pascal Case") {
      result += word[0].toUpperCase()
      result += word.slice(1)
    }
    else {
      result = "Error!"
    }
  }

  let res = document.getElementById('result');
  res.textContent = result

}