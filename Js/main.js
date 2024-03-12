
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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

