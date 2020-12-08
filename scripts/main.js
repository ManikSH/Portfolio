let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".navLinks");
let links = navLinks.children;

let navRespond = () => {
  navLinks.classList.toggle("removeNavLinks");
  hamburger.classList.toggle("animateSticks");
  hamburger.classList.toggle("changeColor");
};

hamburger.addEventListener("click", () => {
  navRespond();
});

for (link of links) {
  link.addEventListener("click", () => {
    navRespond();
  });
}

// let smoothScroll = (target) => {
//   let targetSection = document.querySelector(target);
//   let targetSectionPosition = targetSection.getBoundingClientRect().top;
//   let pageOffset = window.pageYOffset;
//   let distance = targetSectionPosition - pageOffset;
//   console.log(targetSectionPosition);
//   console.log(pageOffset);
//   console.log(distance);

//   window.scrollTo(0, 100);
// };

let linkHome = document.querySelector(".navLinks a:nth-child(1)");
let linkServices = document.querySelector(".navLinks a:nth-child(2)");
let linkTestimonials = document.querySelector(".navLinks a:nth-child(3)");
let linkContactMe = document.querySelector(".navLinks a:nth-child(4)");

linkHome.classList.add("activeHeader");

let changeColorActive = () => {
  let header = document.querySelector("header");
  let headerPosition = header.getBoundingClientRect().top;

  let section1 = document.querySelector("#servicesSection");
  let section1Position = section1.getBoundingClientRect().top;

  let section2 = document.querySelector("#testimonialsSection");
  let section2Position = section2.getBoundingClientRect().top;

  let section3 = document.querySelector("#contactMeSection");
  let section3Position = section3.getBoundingClientRect().top;

  if (headerPosition < 100 && headerPosition > -100) {
    linkServices.classList.remove("activeHeader");
    linkContactMe.classList.remove("activeHeader");
    linkTestimonials.classList.remove("activeHeader");
    linkHome.classList.add("activeHeader");
  } else if (section1Position < 100 && section1Position > -100) {
    // linkServices.classList.remove("activeHeader");
    linkTestimonials.classList.remove("activeHeader");
    linkContactMe.classList.remove("activeHeader");
    linkServices.classList.add("activeHeader");
    linkHome.classList.remove("activeHeader");
  } else if (section2Position < 100 && section2Position > -100) {
    // linkHome.classList.remove('activeHeader');
    linkServices.classList.remove("activeHeader");
    linkTestimonials.classList.add("activeHeader");
    linkHome.classList.remove("activeHeader");
    linkContactMe.classList.remove("activeHeader");
  } else if (section3Position < 100 && section3Position > -100) {
    linkContactMe.classList.add("activeHeader");
    linkServices.classList.remove("activeHeader");
    linkHome.classList.remove("activeHeader");
    linkTestimonials.classList.remove("activeHeader");
  }
};

window.addEventListener("scroll", changeColorActive);
