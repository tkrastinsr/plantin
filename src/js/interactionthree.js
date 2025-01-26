const $map = document.getElementById("map");
const $pathCircles = document.querySelectorAll(".waypoint.path");
const $pathStart = document.querySelector(".waypoint-start");
const $pathEnd = document.querySelector(".waypoint-end");
const $bloodImage = document.querySelector(".blood-stain__image");
const $interactionName = document.getElementById("interaction-three__name");
const $interactionText = document.getElementById(
  "interaction-three__explanation"
);
const $interactionImage = document.getElementById(
  "interaction-three-image__container"
);
const paths = {
  start: ["1", "2"],
  1: ["3"],
  2: ["4"],
  3: ["4", "5"],
  4: ["3", "6"],
  5: ["6", "7"],
  6: ["8"],
  7: ["8"],
  8: ["end"],
};
const $swordSound = document.getElementById("swordSound");
let currentPosition = "start";
let selectedPath = [];

const createLine = (fromElem, toElem) => {
  const mapRect = $map.getBoundingClientRect();
  const { left: x1, top: y1, width, height } = fromElem.getBoundingClientRect();
  const { left: x2, top: y2 } = toElem.getBoundingClientRect();

  const line = document.createElement("div");
  line.classList.add("line");

  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  line.style = `
    width: ${length}px;
    height: 2px;
    top: ${y1 + height / 2 - mapRect.top}px;
    left: ${x1 + width / 2 - mapRect.left}px;
    transform: rotate(${angle}deg);
  `;

  $map.appendChild(line);
};

const handleCircleClick = (event) => {
  const circle = event.target;
  const id = circle.dataset.id;

  if (paths[currentPosition]?.includes(id)) {
    selectedPath.push(id);
    currentPosition = id;

    if (currentPosition >= 5) {
      console.log("DONE");
      interactionEnding();
    }
    circle.classList.add("selected");
  }
};

const interactionEnding = () => {
  $pathCircles.forEach((circle) => {
    circle.removeEventListener("click", handleCircleClick);
  });
  $pathCircles.forEach((circle) => {
    circle.classList.add("visually-hidden");
  });
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    line.classList.add("visually-hidden");
  });
  $pathStart.classList.add("visually-hidden");
  $pathEnd.classList.add("visually-hidden");
  $bloodImage.classList.remove("visually-hidden");
  $swordSound.play();
};

const hasJs = () => {
  $interactionName.classList.remove("visually-hidden");
  $interactionText.classList.remove("visually-hidden");
  $interactionImage.classList.remove("visually-hidden");
  $pathStart.classList.remove("visually-hidden");
  $pathEnd.classList.remove("visually-hidden");
};

const init = () => {
  hasJs();
  Object.keys(paths).forEach((from) => {
    paths[from].forEach((to) => {
      const fromElem = document.querySelector(`[data-id="${from}"]`);
      const toElem = document.querySelector(`[data-id="${to}"]`);
      createLine(fromElem, toElem);
    });
  });

  $pathCircles.forEach((circle) => {
    circle.addEventListener("click", handleCircleClick);
    circle.classList.remove("visually-hidden");
  });
};

init();
