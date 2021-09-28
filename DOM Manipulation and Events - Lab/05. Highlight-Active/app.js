function focused() {
    Array.from(document.getElementsByTagName('input'))
        .forEach(f => {
            f.addEventListener('focus', ({ target: { parentNode } }) => parentNode.classList.add('focused'));
            f.addEventListener('blur', ({ target: { parentNode } }) => parentNode.classList.remove('focused'));
        });
}