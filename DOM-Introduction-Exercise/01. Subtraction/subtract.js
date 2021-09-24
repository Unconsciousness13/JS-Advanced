function subtract() {
    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    result = firstNum - secondNum;
    resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}