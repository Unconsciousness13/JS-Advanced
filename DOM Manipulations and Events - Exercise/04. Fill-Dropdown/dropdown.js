function addItem() {

    let newText = document.getElementById('newItemText');
    let newValue = document.getElementById('newItemValue');


    let newOption = document.createElement('option');

    newOption.textContent = newText.value;
    newOption.value = newValue.value;

    document.getElementById('menu').appendChild(newOption);

    newText.value = '';
    newValue.value = '';
}