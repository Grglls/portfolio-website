const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  nav.classList.toggle('active');
});