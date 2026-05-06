const hero = document.getElementById('hero');
const images = [
  'imagenes/hero1.jpg',
  'imagenes/hero2.jpg',
  'imagenes/hero3.jpg'
];

let current = 0;

function changeBackground() {
  const nextImage = images[current];
  const after = document.createElement('div');
  after.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${nextImage})`;
  after.className = 'hero::after'; // pseudo no funciona así, la usamos con estilos
  after.style.position = 'absolute';
  after.style.top = 0;
  after.style.left = 0;
  after.style.right = 0;
  after.style.bottom = 0;
  after.style.backgroundSize = 'cover';
  after.style.backgroundPosition = 'center';
  after.style.opacity = '0';
  after.style.transition = 'opacity 1s ease-in-out';
  after.style.zIndex = '1';

  hero.appendChild(after);
  // fuerza reflow para que la transición funcione
  void after.offsetWidth;
  after.style.opacity = '1';

  // después de la animación, establecemos como fondo base
  setTimeout(() => {
    hero.style.backgroundImage = after.style.backgroundImage;
    hero.removeChild(after);
  }, 1000);

  current = (current + 1) % images.length;
}

setInterval(changeBackground, 5000);
changeBackground();

