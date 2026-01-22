const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== SHOW MENU ===============*/

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
var swiper = new Swiper(".testimonail-wrapper", {
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/

const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");

const openThemeModal = () => {
  themeModal.classList.add("show");
}
const closeThemeModal=(e)=>{
  if(e.target.classList.contains('customize-theme')){
    themeModal.classList.remove('show')
  }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);
/*===== FONTS =====*/

/*===== PRIMARY COLORS =====*/

/*===== THEME BACKGROUNDS =====*/
