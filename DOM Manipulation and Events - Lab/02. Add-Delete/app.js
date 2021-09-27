function addItem() {
    // select input field and read value
    const input = document.getElementById('newItemText');
    // create new <li> element and set the content to input value
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    // create delete button
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    liElement.appendChild(button);

    // select <ul> and append new <li> element
    document.getElementById('items').appendChild(liElement);

    // clear input field
    input.value = '';
    function removeElement(ev) {
        const parent = ev.target.parentNode;
        parent.remove();

    }
}