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

/*===== FONTS =====*/

/*===== PRIMARY COLORS =====*/

/*===== THEME BACKGROUNDS =====*/
