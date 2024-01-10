function searchItems() {
    const searchInput = document.getElementById('keyword').value.toLowerCase();
    searchInSection('animeItems', searchInput);
  }
  
  function searchInSection(sectionId, searchInput) {
    const items = document.getElementById(sectionId).querySelectorAll('.item');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemName = item.querySelector('.name');
        const itemNameText = itemName.textContent.toLowerCase();

        if (searchInput === "") {
            item.style.display = '';
        } else {
            if (itemNameText.includes(searchInput)) {
                itemName.classList.add('uppercase');
                item.style.display = '';
            } else {
                itemName.classList.remove('uppercase');
                item.style.display = 'none';
            }
        }
    }
}

const items = document.querySelector(".items");

let pageMovie = true;

// fetch data animes
fetch("json/animes.json")
    .then((response) => response.json())
    .then((myData) => {
        console.log(myData);
    });

// fetch data movies

fetch("json/movies.json")
    .then((response) => response.json())
    .then((myData) => {
        console.log(myData);

        // Loop through object properties
        Object.keys(myData).forEach((movieKey) => {
            const movie = myData[movieKey];

            items.innerHTML += `
                <div class="item">
                <a href="${movie.page}">
                    <img src="${movie.img}">
                    <p class="name">${movie.title}</a></p>
                    <p class="episode">episodes: ${movie.episodes}</p>
                </div>`;
        });
    })