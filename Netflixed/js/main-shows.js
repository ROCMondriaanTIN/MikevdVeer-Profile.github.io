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


  // fetch data animes
  fetch("json/animes.json")
      .then((response) => response.json())
      .then((myData) => {
          const animeItems = document.getElementById('animeItems');

          Object.keys(myData).forEach((animeKey) => {
              const anime = myData[animeKey];

              animeItems.innerHTML += `
                  <div class="item">
                    <a href="${anime.page}">
                      <img src="${anime.img}" alt="${anime.title}">
                      <p class="name">${anime.title}</a></p>
                      <p class="episode">episodes: ${anime.episodes}</p>
                  </div>`;
          });
      });

  // fetch data movies
  fetch("json/movies.json")
      .then((response) => response.json())
      .then((myData) => {
          const movieItems = document.getElementById('movieItems');

          Object.keys(myData).forEach((movieKey) => {
              const movie = myData[movieKey];

              movieItems.innerHTML += `
                  <div class="item">
                    <a href="${movie.page}">
                      <img src="${movie.img}" alt="${movie.title}">
                      <p class="name">${movie.title}</a></p>
                      <!-- Adjust the content based on your movie data structure -->
                  </div>`;
          });
      });

    //   Login form
      document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('.login-form').addEventListener('submit', function (event) {
            event.preventDefault();
            
            let username = document.querySelector('.login-form input[type="text"]').value;
            let password = document.querySelector('.login-form input[type="password"]').value;
    
            if (username === 'Admin' && password === 'Admin') {
                alert("Welcome Admin");
                window.location.href = 'landing-page.html';
            } else {
                alert('Invalid username or password');
            }
        });
    });