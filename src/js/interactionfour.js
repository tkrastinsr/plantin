const $works = document.querySelectorAll(".sus-work");
// const $letterDisplay = document.querySelector(".letter");
const $letterDisplay = document.getElementById("letter");
const $dragCircle = document.querySelector(".drag-circle");
let currentWorkIndex = 0;
let direction = "";
let dragStartX = 0;
let isMobile = false;

const removeWork = () => {
  const currentWork = $works[currentWorkIndex];
  currentWork.style.display = "none";
  currentWorkIndex++;

  if (currentWorkIndex >= $works.length) {
    $letterDisplay.textContent = "You did it!";
    console.log("Done");
  } else {
    isMobile ? showNextDirection() : showNextLetter();
  }
};

const getRandomDirection = () => {
  direction = Math.random() < 0.5 ? "left" : "right";
  $letterDisplay.textContent = `Swipe to the ${direction}`;
  console.log(direction);
};

const showNextDirection = () => {
  getRandomDirection();
};

const showNextLetter = () => {
  const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  $letterDisplay.textContent = `Press ${randomLetter}`;
};

//resets circle
const resetCirclePosition = () => {
  $dragCircle.style.transform = "translateX(0px)";
};

const handleDragging = (e) => {
  const startX = e.touches ? e.touches[0].clientX : e.clientX;
  dragStartX = startX;

  const onMove = (moveEvent) => {
    const currentX = moveEvent.touches?.[0]?.clientX ?? moveEvent.clientX;

    $dragCircle.style.transform = `translateX(${currentX - dragStartX}px)`;

    if (Math.abs(currentX - dragStartX) > 100) {
      const isDraggingRight = currentX > dragStartX && direction === "right";
      const isDraggingLeft = currentX < dragStartX && direction === "left";

      if (isDraggingRight || isDraggingLeft) {
        removeWork();
      }

      resetCirclePosition();
      cleanupDragEvents();
    }
  };

  const cleanupDragEvents = () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", cleanupDragEvents);
    document.removeEventListener("touchmove", onMove);
    document.removeEventListener("touchend", cleanupDragEvents);
  };

  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", cleanupDragEvents);
  document.addEventListener("touchmove", onMove);
  document.addEventListener("touchend", cleanupDragEvents);
};

const handleKeyPressing = (event) => {
  const pressedKey = event.key.toUpperCase();
  const displayedLetter = $letterDisplay.textContent
    .replace("Press ", "")
    .toUpperCase();
  if (pressedKey === displayedLetter) removeWork();
};

const handleEventListeners = () => {
  $dragCircle.removeEventListener("mousedown", handleDragging);
  $dragCircle.removeEventListener("touchstart", handleDragging);
  document.removeEventListener("keydown", handleKeyPressing);

  if (isMobile) {
    showNextDirection();
    $dragCircle.addEventListener("mousedown", handleDragging);
    $dragCircle.addEventListener("touchstart", handleDragging);
  } else {
    showNextLetter();
    document.addEventListener("keydown", handleKeyPressing);
    $dragCircle.style.display = "none";
  }
};

const init = () => {
  isMobile = window.innerWidth < 1024;
  handleEventListeners();
};

init();
