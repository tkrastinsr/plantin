const map = document.getElementById("map");
const pathCircles = document.querySelectorAll(".circle.path");
const paths = {
  start: ["1", "3"],
  1: ["4"],
  3: ["2", "4"],
  2: ["5"],
  4: ["5", "6"],
  5: ["end"],
  6: ["end"],
};
let currentPosition = "start";
let selectedPath = [];

const createLine = (fromElem, toElem) => {
  const { left: x1, top: y1, width, height } = fromElem.getBoundingClientRect();
  const { left: x2, top: y2 } = toElem.getBoundingClientRect();

  const line = document.createElement("div");
  line.classList.add("line");

  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  line.style = `
    width: ${length}px;
    height: 2px;
    top: ${y1 + height / 2}px;
    left: ${x1 + width / 2}px;
    transform: rotate(${angle}deg);
  `;

  map.appendChild(line);
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
  pathCircles.forEach((circle) => {
    circle.removeEventListener("click", handleCircleClick);
  });
  pathCircles.forEach((circle) => {
    circle.classList.add("visually-hidden");
  });
};

const init = () => {
  Object.keys(paths).forEach((from) => {
    paths[from].forEach((to) => {
      const fromElem = document.querySelector(`[data-id="${from}"]`);
      const toElem = document.querySelector(`[data-id="${to}"]`);
      createLine(fromElem, toElem);
    });
  });

  pathCircles.forEach((circle) => {
    circle.addEventListener("click", handleCircleClick);
  });
};

init();
