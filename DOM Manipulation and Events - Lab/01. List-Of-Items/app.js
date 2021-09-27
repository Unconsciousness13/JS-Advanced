function addItem() {
    let inputSection = document.getElementById('newItemText');
    let elementOfItems = document.getElementById('items');

    let liItemElement = document.createElement('li');
    liItemElement.textContent = inputSection.value;
    elementOfItems.appendChild(liItemElement);
}