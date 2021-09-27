function deleteByEmail() {
    // select input and read value
    const input = document.querySelector('input[name= "email"]');

    // if input match with the value
    const rows = Array
        .from(document.querySelector('tbody').children)
        .filter(r => r.children[1].textContent == input.value);
    rows.forEach(r => r.remove());

    document.getElementById('result').textContent = rows.lemgth > 0 ? 'Deleted.' : 'Not found.';

}
