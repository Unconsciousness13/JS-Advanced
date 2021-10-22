function solution() {
    const listOfGifts = document.querySelector("body > div > section:nth-child(2) > ul");
    const sentGifts = document.querySelector("body > div > section:nth-child(3) > ul");
    const discardedGifts = document.querySelector("body > div > section:nth-child(4) > ul");

    const giftInput = document.querySelector("body > div > section:nth-child(1) > div > input[type=text]");
    const addButton = document.querySelector("body > div > section:nth-child(1) > div > button");

    addButton.addEventListener("click", addGift);

    function addGift(e) {
        e.preventDefault();
        if (giftInput.value == '') {
            return;
        }
        let li = document.createElement("li");
        li.textContent = giftInput.value;
        let sendButton = document.createElement("button");
        sendButton.id = "sendButton";
        sendButton.textContent = 'Send';
        let discardButton = document.createElement("button");
        discardButton.id = "discardButton";
        discardButton.textContent = 'Discard';
        li.className = "gift";
        listOfGifts.appendChild(li);
        li.appendChild(sendButton);
        li.appendChild(discardButton);
        giftInput.value = "";




        sendButton.addEventListener("click", send);
        discardButton.addEventListener("click", discard);

        Array.from(listOfGifts.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((li) => listOfGifts.appendChild(li));


        function send() {
            sentGifts.appendChild(li);
            li.removeChild(sendButton);
            li.removeChild(discardButton);
        }

        function discard() {
            discardedGifts.appendChild(li);
            li.removeChild(sendButton);
            li.removeChild(discardButton);


        }

    }



}