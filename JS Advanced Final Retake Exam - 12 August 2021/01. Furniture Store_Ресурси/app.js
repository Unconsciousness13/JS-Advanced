window.addEventListener('load', solve);

function solve() {
    // selecting  elements
    const modelInput = document.getElementById("model");
    const yearInput = document.getElementById("year");
    const descriptionInput = document.getElementById("description");
    const priceInput = document.getElementById("price");
    // selecting add button
    const buttonAdd = document.getElementById("add");
    buttonAdd.addEventListener("click", addFurniture);
    // selecting furniture list from the tableRows
    const furnitureList = document.getElementById('furniture-list');
    // total price 
    const totalPrice = document.querySelector('.total-price');
    // making event on the add button


    // add button function
    function addFurniture(e) {
        e.preventDefault();

        const yearValue = Number(yearInput.value);
        const priceValue = Number(priceInput.value);
        if (modelInput.value != "" && descriptionInput.value != "" && yearValue > 0 && priceValue > 0) {
            const tr = document.createElement("tr");
            tr.classList.add("info");
            tr.innerHTML = `<td>${modelInput.value}</td>
                            <td>${priceValue.toFixed(2)}</td>
                            <td><button class="moreBtn">More Info</button>
                                <button class="buyBtn">Buy it</button>
                            </td>`;
            const hideTr = document.createElement("tr");
            hideTr.classList.add("hide");
            hideTr.innerHTML = `<td>Year: ${yearValue}</td><td colspan="3">Description: ${descriptionInput.value}</td>`

            furnitureList.appendChild(tr);
            furnitureList.appendChild(hideTr);

            const moreInfoButtons = tr.querySelectorAll("button");
            moreInfoButtons[0].addEventListener("click", showMoreInfo);
            moreInfoButtons[1].addEventListener("click", buyFurniture);



        }
        modelInput.value = '';
        yearInput.value = ''
        descriptionInput.value = ''
        priceInput.value = ''

    }

    function showMoreInfo(e) {
        const moreInfoTr = e.target.parentElement.parentElement.nextElementSibling;
        if (e.target.textContent == "More Info") {
            e.target.textContent = "Less Info";
            moreInfoTr.style.display = "contents";
        } else {
            e.target.textContent = "More Info";
            moreInfoTr.style.display = "none";
        }
    }

    function buyFurniture(e) {
        const tr = e.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;

        hideTr.parentElement.removeChild(hideTr);

        const price = Number(tr.querySelectorAll("td")[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

        tr.parentElement.removeChild(tr);
    }
}