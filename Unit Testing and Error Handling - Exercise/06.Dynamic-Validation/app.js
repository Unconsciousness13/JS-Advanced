function validate() {
    let emailInput = document.getElementById('email');
    emailInput.addEventListener('change', validate)
    let regexEmail = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (regexEmail.test(emailInput.value)){
        emailInput.classList.remove('error')
    }else{
        emailInput.classList.add('error')
    }
    

}