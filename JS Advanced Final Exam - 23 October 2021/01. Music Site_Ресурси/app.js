window.addEventListener('load', solve);

function solve() {
    // inputs
    const genreInput = document.querySelector("#genre");
    const nameSongInput = document.querySelector("#name");
    const authorSongInput = document.querySelector("#author");
    const dateInput = document.querySelector("#date");


    const colletionSongsContainer = document.querySelector("#all-hits > div");
    const savedSongsContainer = document.querySelector(".saved-container");

    /// add button
    const addButton = document.querySelector("#add-btn");

    addButton.addEventListener("click", addInfo);

    // counter for likes
    let likesCounter = 0;



    function addInfo(e) {
        e.preventDefault();
        if (genreInput.value == "" || nameSongInput.value == '' || authorSongInput.value == '' || dateInput.value == '') {
            return;
        }

        // values of inputs
        let genre = genreInput.value;
        let nameSong = nameSongInput.value;
        let authorSong = authorSongInput.value;
        let date = dateInput.value;

        // div for collection songs
        let divSongCollection = document.createElement('div');
        divSongCollection.className = 'hits-info';

        // creating the childs
        let image = document.createElement('img');
        let genreChild = document.createElement('h2');
        let nameSongChild = document.createElement('h2');
        let authorSongChild = document.createElement('h2');
        let dateChild = document.createElement('h3');

        // adding child values to content of collection songs
        image.src = "./static/img/img.png"
        genreChild.textContent = `Genre: ${genre}`;
        nameSongChild.textContent = `Name: ${nameSong}`;
        authorSongChild.textContent = `Author: ${authorSong}`;
        dateChild.textContent = `Date: ${date}`;

        // creating the tree buttons
        let saveButton = document.createElement('button');
        let likeButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        saveButton.className = 'save-btn';
        saveButton.textContent = `Save song`
        likeButton.className = 'like-btn';
        likeButton.textContent = `Like song`;
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = `Delete`;

        // adding the event listeners for the buttons
        saveButton.addEventListener('click', saveSong);
        likeButton.addEventListener('click', likeSong);
        deleteButton.addEventListener('click', deleteSong);





        // appending the childs i collection songs div to
        divSongCollection.appendChild(image);
        divSongCollection.appendChild(genreChild);
        divSongCollection.appendChild(nameSongChild);
        divSongCollection.appendChild(authorSongChild);
        divSongCollection.appendChild(dateChild);
        divSongCollection.appendChild(saveButton);
        divSongCollection.appendChild(likeButton);
        divSongCollection.appendChild(deleteButton);

        colletionSongsContainer.appendChild(divSongCollection);
        genreInput.value = '';
        nameSongInput.value = '';
        authorSongInput.value = '';
        dateInput.value = '';


        function saveSong() {

            let newDivForSave = document.createElement('div');
            newDivForSave.className = 'hits-info'
            divSongCollection.removeChild(likeButton);
            divSongCollection.removeChild(saveButton);

            savedSongsContainer.appendChild(newDivForSave);
            newDivForSave.appendChild(image);
            newDivForSave.appendChild(genreChild);
            newDivForSave.appendChild(nameSongChild);
            newDivForSave.appendChild(authorSongChild);
            newDivForSave.appendChild(dateChild);
            newDivForSave.appendChild(deleteButton);



            divSongCollection.remove();


        }

        function likeSong() {
            const likesPar = document.querySelector("#total-likes > div > p")
            likesCounter++;
            likesPar.textContent = `Total Likes: ${likesCounter}`
            likeButton.disabled = "true";
        }

        function deleteSong(e) {
            e.preventDefault()
            e.target.parentNode.remove();
        }
    }
}