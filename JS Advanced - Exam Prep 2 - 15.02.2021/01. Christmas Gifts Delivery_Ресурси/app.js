///// this gives 90/100

function solution() {
    const placeHolder = document.querySelector('body > div > section:nth-child(1) > div > input[type=text]');
    const listOfGifts = document.querySelector('body > div > section:nth-child(2) > ul')
    const sentGifts = document.querySelector("body > div > section:nth-child(3) > ul")
    const discardedGifts = document.querySelector("body > div > section:nth-child(4) > ul")
    const addGiftBtn = document.querySelector('body > div > section:nth-child(1) > div > button');

    addGiftBtn.addEventListener('click', addGift);

    // add gift to list of gifts
    function addGift(e) {
        e.preventDefault();
        if (placeHolder.value == "") {
            return;
        }
        const li = `<li class="gift">${placeHolder.value}<button id="sendButton">Send</button><button id="discardButton">Discard</button></li>`;
        listOfGifts.innerHTML += li


        placeHolder.value = "";
        const sendButton = document.getElementById('sendButton');
        const discardButton = document.getElementById('discardButton');
        sendButton.addEventListener("click", send);
        discardButton.addEventListener("click", discard);
        Array.from(listOfGifts.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((li) => listOfGifts.appendChild(li));



        function send(e) {
            sentGifts.innerHTML += `<li>${sendButton.previousSibling.textContent}</li>`;
            e.target.parentNode.remove()


        }

        function discard(e) {
            discardedGifts.innerHTML += `<li>${sendButton.previousSibling.textContent}</li>`;
            e.target.parentNode.remove()

        }

    }
}


///// this gives 100/100
// function solution() {
//     [addSection, listSection, sentSection, discardedSection] = Array.from(
//         document.querySelectorAll('section'));

//     // Add gifts
//     const button = addSection.querySelector('button');
//     const giftName = addSection.querySelector('input');
//     button.addEventListener('click', addCLick);

//     function addCLick(e) {
//         e.preventDefault();

//         const sendBtn = createElement('button', "Send", undefined, "sendButton");
//         sendBtn.addEventListener('click', sendOrDiscard);
//         const discarddBtn = createElement('button', "Discard", undefined, "discardButton");
//         discarddBtn.addEventListener('click', sendOrDiscard);

//         const li = createElement('li', giftName.value, "gift");
//         [sendBtn, discarddBtn].forEach((el) => li.appendChild(el));
//         ulGifts.appendChild(li);
//         Array.from(ulGifts.querySelectorAll('li'))
//             .sort((a, b) => a.textContent.localeCompare(b.textContent))
//             .forEach((li) => ulGifts.appendChild(li));

//         giftName.value = '';
//     }

//     //List of Gifts
//     const ulGifts = listSection.querySelector('ul');

//     function sendOrDiscard(e) {
//         const li = e.target.parentNode
//         li.removeChild(li.childNodes[1])
//         li.removeChild(li.childNodes[1])

//         if (e.currentTarget.textContent == 'Send') {
//             ulSent.appendChild(li);
//         } else {
//             ulDiscard.appendChild(li);
//         }
//     }

//     // Sent gifts
//     const ulSent = sentSection.querySelector('ul');
//     // Discarded gifts
//     const ulDiscard = discardedSection.querySelector('ul');

//     function createElement(type, text, atributte, id) {
//         const el = document.createElement(type);
//         if (text) {
//             el.textContent = text;
//         }
//         if (atributte) {
//             el.className = atributte;
//         }
//         if (id) {
//             el.id = id;
//         }
//         return el;
//     }
// }