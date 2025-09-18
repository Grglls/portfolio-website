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

const carouselState = {
  "project-1": {
    "slideIndex": 1,
    "slides": document.querySelectorAll("#project-1 .mySlides"),
    "dots": document.querySelectorAll("#project-1 .dot")
  },
  "project-1b": {
    "slideIndex": 1,
    "slides": document.querySelectorAll("#project-1b .mySlides"),
    "dots": document.querySelectorAll("#project-1b .dot")
  },
  "project-2": {
    "slideIndex": 1,
    "slides": document.querySelectorAll("#project-2 .mySlides"),
    "dots": document.querySelectorAll("#project-2 .dot")
  },
  "project-3": {
    "slideIndex": 1,
    "slides": document.querySelectorAll("#project-3 .mySlides"),
    "dots": document.querySelectorAll("#project-3 .dot")
  }
};
showSlides();

// Next/previous controls
function plusSlides(p, n) {
  carouselState[p].slideIndex += n;
  showSlides();
}

// Thumbnail image controls
function currentSlide(p, n) {
  carouselState[p].slideIndex = n;
  showSlides();
}

function showSlides() {
  for (const project in carouselState) {
    const { slideIndex, slides, dots } = carouselState[project];
    if (slideIndex > slides.length) {carouselState[project].slideIndex = 1}
    if (slideIndex < 1) {carouselState[project].slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
    slides[carouselState[project].slideIndex-1].classList.add("active");
    dots[carouselState[project].slideIndex-1].classList.add("active");
  }
}
