const init = () => {
  //   document.querySelector(".js").innerHTML = "Enabled";

  const $nav = document.querySelector(".nav");
  const $navButton = document.querySelector(".nav__button");
  const $navList = document.querySelector(".nav__list");
  const $iconLink = document.querySelector("#iconlink");
  const listItems = $navList.querySelectorAll("li a");
  const $navVisit = document.querySelector(".menu-visit__section");
  const $navName = document.querySelector(".nav__name");
  const $navLogo = document.querySelector(".nav__logo-image");
  const $burgerMenu = document.querySelector(".burger-menu");

  $navButton.classList.remove("visually-hidden");
  $navList.classList.add("visually-hidden");
  $navVisit.classList.add("visually-hidden");
  $navName.classList.add("visually-hidden");
  $navLogo.classList.add("visually-hidden");

  const openNavigation = () => {
    $navButton.setAttribute("aria-expanded", "true");
    $iconLink.setAttribute("xlink:href", "#close");
    $navList.classList.remove("visually-hidden");
    $navVisit.classList.remove("visually-hidden");
    $navName.classList.remove("visually-hidden");
    $navLogo.classList.remove("visually-hidden");
    $burgerMenu.classList.add("burger-menu--opened");
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
    $nav.classList.remove("nav--fixed");
  };

  const toggleNavigation = () => {
    const open = $navButton.getAttribute("aria-expanded");
    open === "false" ? openNavigation() : closeNavigation();
  };

  const handleBlur = () => {
    //if (!event.relatedTarget || !$navList.contains(event.relatedTarget)) {
    closeNavigation();
    //}
  };

  $navButton.addEventListener("click", toggleNavigation);

  // add event to the last item in the nav list to trigger the disclosure to close if the user tabs out of the disclosure
  listItems[listItems.length - 1].addEventListener("blur", handleBlur);

  // Close the disclosure if a user presses the escape key
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
