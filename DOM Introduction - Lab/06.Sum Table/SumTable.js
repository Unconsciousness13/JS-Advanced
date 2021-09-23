function sumTable() {
    let costOfElements = Array.from(document.querySelectorAll("tr td:nth-child(2)"));
    let sumElements = costOfElements.pop();
    let sum = costOfElements.reduce((a,x) => a + Number(x.textContent), 0)
    sumElements.textContent = sum
}