function validate() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validateForm);
    let isCompanyCheckBox = document.getElementById('company');
    isCompanyCheckBox.addEventListener('change', isCompanyHandler)

    function validateForm(e) {
        e.preventDefault();
        let nameInput = document.getElementById('username');
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let usernameIsValid = usernameRegex.test(nameInput.value);
        setBorder(nameInput, usernameIsValid);

        let emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/
        let isEmailValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, isEmailValid)

        let passwordInput = document.getElementById('password');
        let passwordRegex = /^\w{5,15}$/
        let passwordIsValid = passwordRegex.test(passwordInput.value)





        let confirmPasswordInput = document.getElementById('confirm-password');
        let confirmPasswordRegex = /^\w{5,15}$/
        let confirmPasswordIsValid = confirmPasswordRegex.test(confirmPasswordInput.value)

        let checkIsPasswordsAreEqual = passwordIsValid &&
            confirmPasswordIsValid &&
            passwordInput.value === confirmPasswordInput.value

        setBorder(confirmPasswordInput, checkIsPasswordsAreEqual)
        setBorder(passwordInput, checkIsPasswordsAreEqual)

        let companyNumberIsValid = false;
        let isCompanyCheckBox = document.getElementById('company');
        if (isCompanyCheckBox.checked) {
            let companyNumberInput = document.getElementById('companyNumber');

            if (companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))) {
                let companyNumber = Number(companyNumberInput.value);
                if (companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }

            setBorder(companyNumberInput, companyNumberIsValid)
        }

        let validDiv = document.getElementById('valid');
        let mainInputsAreValid = usernameIsValid && isEmailValid && confirmPasswordIsValid && passwordIsValid;
        let companyInfoValid = !isCompanyCheckBox.checked || (isCompanyCheckBox.checked && companyNumberIsValid);
        let shouldValidDiv = mainInputsAreValid && companyInfoValid
        validDiv.style.display = shouldValidDiv ? 'block' : 'none';
    }


    function isCompanyHandler(e) {
        let companyInfoFieldSet = document.getElementById('companyInfo');
        companyInfoFieldSet.style.display = e.target.checked ? 'block' : 'none';
    }

    function setBorder(element, isValid) {
        if (isValid) {
            element.style.setProperty('border', 'none');

        } else {
            element.style.setProperty('border', '3px solid red');
        }

    }
}
