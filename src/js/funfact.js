const $funButtons = document.querySelectorAll(".fun-fact__button");
const $closeButtons = document.querySelectorAll(".close__button");

const handleOpenFact = (e) => {
  const button = e.currentTarget;
  const factId = button.getAttribute("data-dialog");
  const fact = document.getElementById(factId);
  if (fact) {
    fact.showModal();
  }
};

const handleCloseFact = (e) => {
  const closeFact = e.target.closest("dialog");
  closeFact.close();
};

const init = () => {
  $funButtons.forEach((button) => {
    button.classList.remove("visually-hidden")
    button.addEventListener("click", handleOpenFact);
  });
  $closeButtons.forEach((close) => {
    close.addEventListener("click", handleCloseFact);
  });
};

init();
