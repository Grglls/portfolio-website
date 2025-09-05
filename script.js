const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');
const navLogo = document.querySelector('.logo');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  nav.classList.toggle('active');
});

nav.addEventListener('click', () => {
  menuIcon.click();
});

navLogo.addEventListener('click', () => {
  menuIcon.click();
});