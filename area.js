
const form = document.querySelector('form');
const error = document.querySelector('.error');
const successSound = document.getElementById('success-sound');

form.addEventListener('submit', event => {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;

  if (username === '' || password === '') {
    error.textContent = 'Debe completar todos los campos.';
  } else {
    successSound.play();
    alert('¡Servidor en Mantenimiento,sea paciente QH!');
    form.reset();
  }
});


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

