
  const productos = document.querySelectorAll('.card');
  productos.forEach(producto => {
    producto.addEventListener('click', () => {
     
      console.log('Felicitaciones acabas de adquirir ' + producto.querySelector('h2').innerText);
    });
  });

  function showAlert() {
    alert('Producto agregado al carrito (Chequear la Consola ;))');
  }



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


