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

/*=============== Project ITEM FILTER ===============*/
const filterContainer = document.querySelector(".project-filter-inner");
const filterBtns = filterContainer.querySelectorAll("button");
const projectItems = document.querySelectorAll(".project-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active to clicked button
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    projectItems.forEach((item) => {
      const category = item.getAttribute("data-category");

      if (filterValue === "all" || filterValue === category) {
        item.style.display = "block"; // Show
      } else {
        item.style.display = "none"; // Hide
      }
    });
  });
});


/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/

const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");

const fontSizes = document.querySelectorAll(".choose-size span");

const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

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

const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();

    let fontSize;

    size.classList.toggle("active"); //toggles the 'active' class on the clicked element

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

const removeColorSelector = () => {
  colorPalette.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    removeColorSelector();

    let colorhue;

    color.classList.toggle("active"); //toggles the 'active' class on the clicked element

    if (color.classList.contains("color-1")) {
      colorhue = "252";
    } else if (color.classList.contains("color-2")) {
      colorhue = "52";
    } else if (color.classList.contains("color-3")) {
      colorhue = "352";
    } else if (color.classList.contains("color-4")) {
      colorhue = "152";
    } else if (color.classList.contains("color-5")) {
      colorhue = "202";
    }

    root.style.setProperty("--primary-color-hue", colorhue);
  });
});

/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
  Bg1.classList.add("active");

  Bg2.classList.remove("active");
  Bg3.classList.remove("active");

  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  Bg2.classList.add("active");

  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  Bg3.classList.add("active");

  Bg2.classList.remove("active");
  Bg1.classList.remove("active");
  changeBG();
});
