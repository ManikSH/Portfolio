let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('removeNavLinks');
    hamburger.classList.toggle('changeColor');
    // e.target.classList.toggle("animateSticks");
});