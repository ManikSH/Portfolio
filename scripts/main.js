let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.navLinks');

hamburger.addEventListener('click', (e) => {
    navLinks.classList.toggle('removeNavLinks');
    e.target.classList.toggle('changeColor');
    // e.target.classList.toggle("animateSticks");
});