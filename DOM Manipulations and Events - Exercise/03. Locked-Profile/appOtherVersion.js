function lockedProfile() {
    // Select initial Dom Element
    let buttonElements = Array.from(document.querySelectorAll('#main .profile button'));

    buttonElements.forEach(el => {
        el.addEventListener('click', toggleButton);
    })

    function toggleButton(e) {
        // get button from event
        let button = e.target;
        // get profile from button parent
        let profile = button.parentElement;
        // get radio buttons
        let radioButton = profile.querySelector(`input:checked`);
        // check if profile is unlocked
        if (radioButton.value === 'unlock') {
            //get hidden field element
            let hiddenFieldElement = button.previousElementSibling;
            // toggle display and button text
            hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block'
                ? 'none'
                : 'block';
            button.textContent = button.textContent === 'Show more'
                ? 'Hide it'
                : 'Show more';
        }
    }
}