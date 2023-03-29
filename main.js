let numeroseguimiento =  Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

function showAlert() {
  alert(`Muchas gracias por su compra! Su numero de seguimiento es ${numeroseguimiento} `);
}
;

const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


window.addEventListener('load', function() {
  const pageTitle = document.getElementById('titlepag');
  setTimeout(function() {
    pageTitle.style.display = 'block';
  }, 3000);
});





const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

slider.style.width = `${100 * images.length}%`;

images.forEach(img => {
  img.style.width = `${100 / images.length}%`;
});

let counter = 1;
setInterval(() => {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${counter * 100 / images.length}%)`;

  counter++;
  if (counter === images.length) {
    counter = 0;
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = `translateX(0)`;
    }, 6000);
  }
}, 6000);


