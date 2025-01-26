const $nav = document.querySelector(".nav");
const $navButton = document.querySelector(".nav__button");
const $navList = document.querySelector(".nav__list");
const $iconLink = document.querySelector("#iconlink");
const listItems = $navList.querySelectorAll("li a");
const $navVisit = document.querySelector(".menu-visit__section");
const $visitButton = document.querySelector(".menu-visit__button");
const $navName = document.querySelector(".nav__name");
const $navLogo = document.querySelector(".nav__logo-image");
const $burgerMenu = document.querySelector(".burger-menu");
const $navItem = document.querySelectorAll(".nav__item");
const $nextStory = document.querySelector(".menu-next-story__container");
const $languageButtons = document.querySelectorAll(".language");

const openNavigation = () => {
  $navButton.setAttribute("aria-expanded", "true");
  $iconLink.setAttribute("xlink:href", "#close");
  $navList.classList.remove("visually-hidden");
  $navVisit.classList.remove("visually-hidden");
  $navName.classList.remove("visually-hidden");
  $navLogo.classList.remove("visually-hidden");
  $nextStory.classList.remove("visually-hidden");
  $burgerMenu.classList.add("burger-menu--opened");
  $burgerMenu.style.position = "static";
  $nav.classList.add("nav--fixed");
};

const closeMenu = () => {
  $navButton.setAttribute("aria-expanded", "false");
  $iconLink.setAttribute("xlink:href", "#navicon");
  $navList.classList.add("visually-hidden");
  $navVisit.classList.add("visually-hidden");
  $navName.classList.add("visually-hidden");
  $navLogo.classList.add("visually-hidden");
  $nextStory.classList.add("visually-hidden");
  $burgerMenu.classList.remove("burger-menu--opened");
  $burgerMenu.style.position = "fixed";
  $nav.classList.remove("nav--fixed");
};

const handleOpenMenu = () => {
  const open = $navButton.getAttribute("aria-expanded");
  open === "false" ? openNavigation() : closeMenu();
};

const handleBlur = () => {
  closeMenu();
};

const handleActiveLanguage = (e) => {
  $languageButtons.forEach((btn) => btn.classList.remove("active"));
  e.currentTarget.classList.add("active");
};

const init = () => {
  $navButton.classList.remove("visually-hidden");
  $navList.classList.add("visually-hidden");
  $navVisit.classList.add("visually-hidden");
  $navName.classList.add("visually-hidden");
  $navLogo.classList.add("visually-hidden");
  $nextStory.classList.add("visually-hidden");
  $burgerMenu.style.position = "fixed";

  $navButton.addEventListener("click", handleOpenMenu);
  $navItem.forEach((item) => {
    item.addEventListener("click", handleOpenMenu);
  });

  $visitButton.addEventListener("blur", handleBlur);

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      $navButton.focus();
      closeMenu();
    }
  });

  $languageButtons.forEach((button) => {
    button.addEventListener("click", handleActiveLanguage);
  });
};

init();
