
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const overlayMenu = document.querySelector('.overlay-menu');

  // Toggle overlay menu when menu icon is clicked
  menuIcon.addEventListener('click', function () {
    overlayMenu.classList.toggle('open');
  });

  // Close overlay menu when clicked outside of it
  overlayMenu.addEventListener('click', function (event) {
    if (!event.target.closest('ul')) {
      overlayMenu.classList.remove('open');
    }
  });
});

function searchItems() {
  const searchInput = document.querySelector('#keyword').value.toLowerCase();
  // searchInSection('champs', searchInput);
  fetch("json/champs.json")
    .then((response) => response.json())
    .then((myData) => {
      console.log(searchInput);
      const Data = document.querySelector('#champs');


      for (let i = 0; i < myData.length; i++) {
        const champs = myData[i];

        if (champs.name.toLowerCase() == searchInput) {
          Data.innerHTML = '';
          const item = document.createElement('div');
          item.classList.add('item');
          item.innerHTML = `
            <img src="${champs.icon}" alt="Champion" />
            <h2 class="name">${champs.name}</h2>
          `;
          item.addEventListener('click', () => {
            displayChampionStats(champs);
          });

          Data.appendChild(item);
        }
      }
    });
}

function searchInSection(sectionId, searchInput) {
  const items = document.getElementById(sectionId).querySelectorAll('.item');

  items.forEach(item => {
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
  });
}

fetch("json/champs.json")
  .then((response) => response.json())
  .then((myData) => {
    console.log(myData);
    const Data = document.querySelector('#champs');

    function displayChampsCards(champStart) {
      Data.innerHTML = '';
      for (let champ = 0; champ < 30; champ++) {
        const champs = myData[champStart + champ];

        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
          <img src="${champs.icon}" alt="Champion" />
          <h2 class="name">${champs.name}</h2>
        `;
        item.addEventListener('click', () => {
          displayChampionStats(champs);
        });

        Data.appendChild(item);
      }
    }

    displayChampsCards(0);

    const nextChampBtn = document.querySelector('.next-champs')
    let champsListStart = 0;

    nextChampBtn.addEventListener('click', function () {
      champsListStart += 29;
      displayChampsCards(champsListStart);
    })

  });

function displayChampionStats(champion) {
  const modal = document.querySelector("#myModal");
  const championStats = document.querySelector("#championStats");

  // Construct HTML to display champion stats
  const statsHTML = `
  <div class="stats">
  <h2>${champion.name}</h2>
  <img src="${champion.icon}" alt="Champ-Icon">
  <p>Health: ${champion.stats.hp}</p>
  <p>Armor: ${champion.stats.armor}</p>
  <p>Attack Damage: ${champion.stats.attackdamage}</p>
  </div>
  <!-- Add more stats as needed -->
`;

  championStats.innerHTML = statsHTML;

  modal.style.display = "block";

  // Close the modal when the user clicks anywhere outside of the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Close btn
  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  }
}

// (League of Legends styles) for loop json

fetch('json/skins.json')
  .then(response => response.json())
  .then(data => {
    const imgContainer = document.querySelector('#styles');
    const imgElement = imgContainer.querySelector('img');

    let currentIndex = 0;

    function showNextImage() {
      imgElement.src = data.styles[currentIndex].url;
      imgElement.alt = data.styles[currentIndex].name; // shows the skins name if image failed to load in
      currentIndex = (currentIndex + 1) % data.styles.length;
      setTimeout(() => {
      }, 500);
    }

    showNextImage();

    setInterval(showNextImage, 3000);
  })

   // Get the video element
   var video = document.querySelector("#videoPlayer");

   // Array of video sources
   var videoSources = [
       "/videos/summonersrift.mp4",
       "/videos/howlingabyss.mp4",
       "/videos/teamfighttactics.mp4"
   ];

   // Index to keep track of current video
   var currentVideoIndex = 0;

   // Listen for the "ended" event
   video.addEventListener("ended", function() {
       // Increment index to move to next video
       currentVideoIndex++;

       // If we've reached the end of the video sources array, loop back to the beginning
       if (currentVideoIndex >= videoSources.length) {
           currentVideoIndex = 0;
       }

       // Change the video source to the next one
       video.src = videoSources[currentVideoIndex];

       // Load and play the new video
       video.load();
       video.play();
   });

