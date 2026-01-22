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
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette=document.querySelectorAll('.choose-color span')

const openThemeModal = () => {
  themeModal.classList.add("show");
};
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.classList.remove("show");
  }
};
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);



/*===== FONTS =====*/

const removeSizeSelector=()=>{
  fontSizes.forEach(size=>{
    size.classList.remove('active')
  })
}

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {

    removeSizeSelector();

    let fontSize;


    size.classList.toggle('active'); //toggles the 'active' class on the clicked element


    if (size.classList.contains("font-size-1")) {
      fontSize = "12px";
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "14px";
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "18px";
    }

    document.querySelector("html").style.fontSize = fontSize;

  });
});

/*===== PRIMARY COLORS =====*/



/*===== THEME BACKGROUNDS =====*/
