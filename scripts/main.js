let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".navLinks");
let links = document.querySelectorAll(".navLinks a");

let animateSticks = () => {
  hamburger.classList.toggle("animateSticks");
};

let openCloseNav = () => {
  navLinks.classList.toggle("removeNavLinks");
};

let changeColor = () => {
  hamburger.classList.toggle("changeColor");
};

hamburger.addEventListener("click", () => {
  openCloseNav();
  changeColor();
  animateSticks();
});

for (link of links) {
  link.addEventListener("click", () => {
    changeColor();
    animateSticks();
    openCloseNav();
  });
}
