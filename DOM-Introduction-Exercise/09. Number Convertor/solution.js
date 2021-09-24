function solve() {
    //add select options
    let selectElement = document.querySelector('#selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.text = 'Binary';
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.text = 'Hexadecimal';
    selectElement.add(binaryOption);
    selectElement.add(hexadecimalOption);
 
    //add click event
    document.querySelector('button').addEventListener('click', clickEvent)
 
    function clickEvent() {
        //get values
        let decimalNumber = +document.querySelector('#input').value;
        let selectElement = document.querySelector('#selectMenuTo');
        let convertTo = selectElement.options[selectElement.selectedIndex].text;
 
        //convert
        let result;
        switch (convertTo) {
            case 'Binary':
                result = decimalNumber.toString(2);
                break;
            case 'Hexadecimal':
                result = decimalNumber.toString(16).toUpperCase();
                break;
        }
 
        //append output
        document.querySelector('#result').value = result;
    }
}