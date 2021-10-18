function solve() {

    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    }


    addBtn.addEventListener('click', addPet);


    function addPet(event) {
        event.preventDefault();

        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();

        if (name == '' || input.age.value.trim() == '' || Number.isNaN(age) || kind == '' || owner == '') {
            return;
        }

        const contactBtn = e('button', {}, 'Contact with owner');

        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind),
            ),
            e('span', {}, `Owner: ${owner}`),
            contactBtn
        );

        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet);

        input.name.value = '';
        input.age.value = '';
        input.kind.value = '';
        input.owner.value = '';


        function contact() {
            const confirmInput = e('input', { placeholder: 'Enter your names' });
            const confirmBtn = e('button', {}, 'Yes! I take it!')
            const confirmationDiv = e('div', {},
                confirmInput,
                confirmBtn);

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));

            contactBtn.remove();
            pet.appendChild(confirmationDiv);


        }
    }

    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if (newOwner == '') {
            return;
        }
        const checkBtn = e('button', {}, 'Checked');
        checkBtn.addEventListener('click', check.bind(null, pet))

        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(pet);

    }

    function check(pet) {
        pet.remove();
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}








// // finding inputs
// const nameInput = document.querySelector("#container input[placeholder='Name']");
// const ageInput = document.querySelector("#container input[placeholder='Age']");
// const kindInput = document.querySelector("#container input[placeholder='Kind']");
// const ownerInput = document.querySelector("#container input[placeholder='Current Owner']");
// // button element
// const buttonAdd = document.querySelector("#container button");
// buttonAdd.addEventListener("click", addNewPet);

// // find frend from here element
// let adoptionSectoion = document.querySelector("#adoption ul")
//     // Button to contact with the owner
// const contBtnOwner = document.querySelector(".contOwnerButton");
// contBtnOwner.addEventListener("click", contactOwner);

// //contactOwner function to contact
// function contactOwner(event) {
//     event.preventDefault();
//     console.log('OK')
// }

// // add pet function
// function addNewPet(event) {
//     event.preventDefault();

//     const name = nameInput.value.trim();
//     const age = Number(ageInput.value.trim());
//     const kind = kindInput.value.trim();
//     const owner = ownerInput.value.trim();

//     if (name == '' || ageInput.value.trim() == '' || Number.isNaN(age) || kind == '' || owner == '') {
//         return;
//     }


//     let liForInsert = `<li><p><strong>${name}</strong>
//      is a <strong>${age}</strong> year old 
//     <strong>${kind}</strong></p></li>
//     <span>Owner: ${owner}</span>
//     <button class="contOwnerButton">Contact with owner</button>
//     </li>`
//     adoptionSectoion.innerHTML += liForInsert
//     nameInput.value = '';
//     ageInput.value = '';
//     kindInput.value = '';
//     ownerInput.value = '';

// }


// const contactBtn = e('button'); // Uff