window.addEventListener('load', solution);

function solution() {
    const fullNameInput = document.querySelector("#fname");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const adressInput = document.querySelector("#address");
    const postalCodeInput = document.querySelector("#code");
    const prevewList = document.querySelector("#infoPreview")
        // const allContentWithTeslata = document.querySelector("#block");

    let backupFullName = '';
    let backupEmail = '';
    let backupPhone = '';
    let backupAddress = '';
    let backupPostal = '';

    // preview div buttons
    const editBtn = document.getElementById("editBTN")
    const continueBTN = document.getElementById("continueBTN")
        // submit button
    const submitButton = document.querySelector("#submitBTN")
    submitButton.addEventListener("click", submitData);

    function submitData(e) {
        e.preventDefault();
        if (fullNameInput.value == '' || emailInput.value == '') {
            return;
        }

        let prevCOntent = `<li>Full Name: ${fullNameInput.value}</li>
        <li>Email: ${emailInput.value}</li>
        <li>Phone Number: ${phoneInput.value}</li>
        <li>Address: ${adressInput.value}</li>
        <li>Postal Code: ${postalCodeInput.value}</li>`;

        prevewList.innerHTML = prevCOntent

        // backup inputs
        backupFullName = fullNameInput.value;
        backupEmail = emailInput.value;
        backupAddress = adressInput.value;
        backupPhone = phoneInput.value;
        backupPostal = postalCodeInput.value;


        // reseting inputs
        fullNameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        adressInput.value = '';
        postalCodeInput.value = '';

        submitButton.disabled = true;
        editBtn.disabled = false;
        continueBTN.disabled = false;

        editBtn.addEventListener('click', editFunc);
        continueBTN.addEventListener('click', contFunc);

        function editFunc() {
            fullNameInput.value = backupFullName;
            emailInput.value = backupEmail;
            phoneInput.value = backupPhone;
            adressInput.value = backupAddress;
            postalCodeInput.value = backupPostal;
            editBtn.disabled = true;
            continueBTN.disabled = true;
            submitButton.disabled = false;

            prevewList.innerHTML = '';



        }

        function contFunc() {
            const allContentWithTeslata = document.querySelector("#block");
            allContentWithTeslata.innerHTML = '';
            finalScreen = document.createElement("h3");
            finalScreen.textContent = 'Thank you for your reservation!'
            allContentWithTeslata.appendChild(finalScreen);
        }



    }

}