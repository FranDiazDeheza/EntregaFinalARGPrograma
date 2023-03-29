
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
