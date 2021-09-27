function addItem() {
    // Founding the id of target where we will add the new element
    let inputSection = document.getElementById('newItemText');
    let elementOfItems = document.getElementById('items');
    // Creating the element
    let liItemElement = document.createElement('li');
    // Set value of the element
    liItemElement.textContent = inputSection.value;
    // Adding element
    elementOfItems.appendChild(liItemElement);
    document.getElementById('newItemText').value = '';
}