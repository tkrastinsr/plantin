const draggable = document.querySelector(".draggable-circle");
const bindingPoints = document.querySelectorAll(".circle");
const bookImage = document.querySelector(".book-image");
const container = document.querySelector(".draggable-container");
const threadSound = new Audio("./src/assets/thread.mp3");

let currentIndex = 0;
let isDragging = false;

let offsetX = 0;
let offsetY = 0;

const startDrag = (e) => {
  e.preventDefault(); // Disabling default drag
  isDragging = true;

  const rect = draggable.getBoundingClientRect();
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

  const containerRect = container.getBoundingClientRect();
  const x = clientX - containerRect.left - offsetX;
  const y = clientY - containerRect.top - offsetY;

  draggable.style.position = "absolute";
  draggable.style.left = `${x}px`;
  draggable.style.top = `${y}px`;

  bindingPoints.forEach((point) => {
    const rect = point.getBoundingClientRect();
    const draggableRect = draggable.getBoundingClientRect();

    if (
      draggableRect.left < rect.right &&
      draggableRect.right > rect.left &&
      draggableRect.top < rect.bottom &&
      draggableRect.bottom > rect.top
    ) {
      const index = parseInt(point.dataset.index, 10);
      threadSound.play();
      //   console.log("currentIndex:", currentIndex);
      //   console.log(bindingPoints.length);

      if (index === currentIndex + 1) {
        point.style.backgroundColor = "green";
        currentIndex++;
        point.style.pointerEvents = "none";

        // if (currentIndex === bindingPoints.length) {
        //   setTimeout(() => {
        //     bookImage.src = "./src/assets/bok.png";
        //     bookImage.srcset = "./src/assets/bok.png";
        //     bindingPoints.forEach((p) => (p.style.display = "none")); // Hide all points
        //   }, 500);
        // }
        if (currentIndex === 6) {
          setTimeout(() => {
            bookImage.src = "./src/assets/bok.png";
            bookImage.srcset = "./src/assets/bok.png";

            // bookImage.src = "./src/assets/bok.png";
            // bookImage.srcset = "./src/assets/bok.png";

            console.log(bookImage.src);
            console.log(bookImage.srcset);
            bindingPoints.forEach((p) => (p.style.display = "none")); // Hide all points
          }, 500);
        }
        // console.log("src", bookImage.src);
        // console.log(bookImage.srcset);
      }
    }
  });
};

draggable.addEventListener("mousedown", startDrag);
draggable.addEventListener("touchstart", startDrag);
