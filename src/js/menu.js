const init = () => {

  const $nav = document.querySelector(".nav");
  const $navButton = document.querySelector(".nav__button");
  const $navList = document.querySelector(".nav__list");
  const $iconLink = document.querySelector("#iconlink");
  const listItems = $navList.querySelectorAll("li a");
  const $navVisit = document.querySelector(".menu-visit__section");
  const $navName = document.querySelector(".nav__name");
  const $navLogo = document.querySelector(".nav__logo-image");
  const $burgerMenu = document.querySelector(".burger-menu");
  const $navItem = document.querySelectorAll(".nav__item");

  $navButton.classList.remove("visually-hidden");
  $navList.classList.add("visually-hidden");
  $navVisit.classList.add("visually-hidden");
  $navName.classList.add("visually-hidden");
  $navLogo.classList.add("visually-hidden");
  $burgerMenu.style.position = "fixed";

  const openNavigation = () => {
    $navButton.setAttribute("aria-expanded", "true");
    $iconLink.setAttribute("xlink:href", "#close");
    $navList.classList.remove("visually-hidden");
    $navVisit.classList.remove("visually-hidden");
    $navName.classList.remove("visually-hidden");
    $navLogo.classList.remove("visually-hidden");
    $burgerMenu.classList.add("burger-menu--opened");
    $burgerMenu.style.position = "static";
    $nav.classList.add("nav--fixed");
  };

  const closeNavigation = () => {
    $navButton.setAttribute("aria-expanded", "false");
    $iconLink.setAttribute("xlink:href", "#navicon");
    $navList.classList.add("visually-hidden");
    $navVisit.classList.add("visually-hidden");
    $navName.classList.add("visually-hidden");
    $navLogo.classList.add("visually-hidden");
    $burgerMenu.classList.remove("burger-menu--opened");
    $burgerMenu.style.position = "fixed";
    $nav.classList.remove("nav--fixed");
  };

  const toggleNavigation = () => {
    const open = $navButton.getAttribute("aria-expanded");
    open === "false" ? openNavigation() : closeNavigation();
  };

  const handleBlur = () => {
    closeNavigation();
  };

  $navButton.addEventListener("click", toggleNavigation);
  $navItem.forEach((item) => {
    item.addEventListener("click", toggleNavigation);
  });

  listItems[listItems.length - 1].addEventListener("blur", handleBlur);

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      $navButton.focus();
      closeNavigation();
    }
  });
  const languageButtons = document.querySelectorAll(".language");
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      languageButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
};

init();
