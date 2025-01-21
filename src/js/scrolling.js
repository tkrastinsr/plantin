const init = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".antwerp-image__container", {
    scrollTrigger: {
      trigger: ".antwerp-image__container",
      start: "top bottom",
      end: "top top",
      scrub: 2,
    },
    y: "100px",
  });
};

init();
