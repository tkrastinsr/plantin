const $draggable = document.querySelector(".draggable-circle");
const $bindingPoints = document.querySelectorAll(".circle");
const $bookImage = document.querySelector(".book-image__container");
const $bindedImage = document.querySelector(".bound-book-image__container");
const $container = document.querySelector(".draggable-container");
const $threadSound = document.getElementById("threadSound");
const $interactionName = document.getElementById("interaction__name");
const $interactionText = document.getElementById("interaction__text");
const $interactionImage = document.getElementById(
  "interaction-image__container"
);
const $bubblesContainer = document.getElementById("binding-points__container");
const $instructions = document.getElementById("interaction-one__instructions");

let currentIndex = 0;
let isDragging = false;

let offsetX = 0;
let offsetY = 0;

const handleStartDrag = (e) => {
  e.preventDefault();
  isDragging = true;

  //   threadSound.play().catch((err) => {
  //     console.log("Audio playback prevented:", err);
  //   });

  const rect = $draggable.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  offsetX = clientX - rect.left;
  offsetY = clientY - rect.top;

  const moveEvent = e.type === "touchstart" ? "touchmove" : "mousemove";
  const endEvent = e.type === "touchstart" ? "touchend" : "mouseup";

  document.addEventListener(moveEvent, moveCircle);
  document.addEventListener(endEvent, stopDragging);
};

const stopDragging = (e) => {
  isDragging = false;

  const moveEvent = e.type === "touchend" ? "touchmove" : "mousemove";
  const endEvent = e.type === "touchend" ? "touchend" : "mouseup";

  document.removeEventListener(moveEvent, moveCircle);
  document.removeEventListener(endEvent, stopDragging);
};

const moveCircle = (e) => {
  if (!isDragging) return;

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  const containerRect = $container.getBoundingClientRect();
  const x = clientX - containerRect.left - offsetX;
  const y = clientY - containerRect.top - offsetY;

  $draggable.style.position = "absolute";
  $draggable.style.left = `${x}px`;
  $draggable.style.top = `${y}px`;

  $bindingPoints.forEach((point) => {
    const rect = point.getBoundingClientRect();
    const draggableRect = $draggable.getBoundingClientRect();

    if (
      draggableRect.left < rect.right &&
      draggableRect.right > rect.left &&
      draggableRect.top < rect.bottom &&
      draggableRect.bottom > rect.top
    ) {
      const index = parseInt(point.dataset.index, 10);
      $threadSound.play();

      if (index === currentIndex + 1) {
        point.style.backgroundColor = "green";
        currentIndex++;
        point.style.pointerEvents = "none";

        if (currentIndex === 6) {
          setTimeout(() => {
            $bindedImage.classList.remove("visually-hidden");
            $bookImage.classList.add("visually-hidden");
            $bindingPoints.forEach((p) => (p.style.display = "none"));
          }, 500);
        }
      }
    }
  });
};

const hasJs = () => {
  $interactionName.classList.remove("visually-hidden");
  $interactionText.classList.remove("visually-hidden");
  $interactionImage.classList.remove("visually-hidden");
  $container.classList.remove("visually-hidden");
  $bubblesContainer.classList.remove("visually-hidden");
  $instructions.classList.remove("visually-hidden");
};

const init = () => {
  hasJs();
  $draggable.addEventListener("mousedown", handleStartDrag);
  $draggable.addEventListener("touchstart", handleStartDrag);
};

init();
