gsap.registerPlugin(ScrollTrigger);
const screenWidth = window.innerWidth;

const interactive = () => {
  gsap.utils.toArray(".interaction-circle").forEach((circle) => {
    gsap.from(circle, {
      scrollTrigger: {
        trigger: circle,
        start: "center bottom",
        end: "center center",
        scrub: 2,
      },
      scale: 0.3,
      opacity: 0,
    });
  });
};

const hero = () => {
  gsap.to(".hero__title", {
    scrollTrigger: {
      trigger: ".hero__title",
      start: "bottom center",
      end: "bottom top",
      scrub: 3,
    },
    opacity: 0,
  });
  gsap.from(".intro__quote", {
    scrollTrigger: {
      trigger: ".intro__quote",
      start: "center bottom",
      end: "center center",
      scrub: 2,
    },
    x: "-100px",
    opacity: 0,
  });
};

const chapterOne = () => {
  gsap.from(".antwerp-image__container", {
    scrollTrigger: {
      trigger: ".antwerp-image__container",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 2,
    },
    y: "200px",
  });
  gsap.from(".bag-coin__image", {
    scrollTrigger: {
      trigger: ".ship__container",
      start: "top top",
      scrub: 2,
    },
    y: "-110%",
    rotation: 36,
    zIndex: 1,
  });
  gsap.from(".plantin-plantin-image", {
    scrollTrigger: {
      trigger: ".plantin-plantin-image",
      start: "center bottom",
      scrub: 2,
    },
    y: "10%",
  });
  gsap.from(".binding-points", {
    scrollTrigger: {
      trigger: ".binding-points",
      start: "center bottom",
      end: "center center",
      scrub: 2,
    },
    opacity: 0,
  });
  gsap.from(".box-image", {
    scrollTrigger: {
      trigger: ".box-image",
      start: "top bottom",
      end: "center center",
      scrub: 2,
    },
    y: "100px",
  });
  gsap.fromTo(
    ".chest__bottom",
    { opacity: 1, y: -110 },
    {
      opacity: 0,
      y: "100px",
      scrollTrigger: {
        trigger: ".chest__bottom",
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    }
  );
  gsap.from(".chest__text", {
    scrollTrigger: {
      trigger: ".chest__text",
      start: "bottom bottom",
      scrub: 2,
    },
    opacity: 0,
  });
};

const chpaterTwo = () => {
  gsap.from(".interaction-three__end-image", {
    scrollTrigger: {
      trigger: ".interaction-three__end-image",
      start: "bottom bottom",
      end: "bottom center",
      scrub: 2,
    },
    opacity: 0,
    x: "+50vw",
  });
  gsap.utils.toArray(".chapter-two__quotes p").forEach((quote) => {
    gsap.from(quote, {
      scrollTrigger: {
        trigger: quote,
        start: "bottom bottom",
        end: "top center",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
    });
  });
};

const chapaterThree = () => {
  gsap.from(".print-image", {
    scrollTrigger: {
      trigger: ".print-image",
      start: "top bottom",
      end: "top center",
      scrub: 2,
    },
    opacity: 0,
    y: "+10%",
  });
  gsap.from(".compass-image", {
    scrollTrigger: {
      trigger: ".compass-image",
      start: "top bottom",
      end: "top center",
      scrub: 2,
    },
    opacity: 0,
    x: "+10%",
  });
  gsap.from(".communication__quote", {
    scrollTrigger: {
      trigger: ".communication__quote",
      start: "center bottom",
      end: "center center",
      scrub: 3,
    },
    x: "-10%",
    opacity: 0,
  });
  gsap.from(".thomas-image__scroll", {
    scrollTrigger: {
      trigger: ".thomas-image__scroll",
      start: "top bottom",
      end: "center center",
      scrub: 2,
    },
    y: "20%",
  });
  gsap.from(".book__conatainer", {
    scrollTrigger: {
      trigger: ".book__conatainer",
      start: "top bottom",
      end: "top top",
      scrub: 2,
    },
    y: "20%",
  });
};

const molds = () => {
  if (screenWidth > 767) {
    gsap.from(".molds-image__container", {
      scrollTrigger: {
        trigger: ".print-image",
        start: "top bottom",
        end: "top center",
        scrub: 2,
      },
      x: "200px",
      y: "-70%",
      rotation: 40,
    });
    gsap.from(".molds-two-image__container", {
      scrollTrigger: {
        trigger: ".print-image",
        start: "top bottom",
        end: "top center",
        scrub: 2,
      },
      x: "-200px",
      y: "70%",
      rotation: 40,
    });
  } else {
    gsap.from(".molds-image__container", {
      scrollTrigger: {
        trigger: ".print-image",
        start: "bottom center",
        scrub: 2,
      },
      y: "-35%",
      rotation: 55,
    });
  }
};

const chapterFour = () => {
  gsap.from(".skull-image", {
    scrollTrigger: {
      trigger: ".skull-image",
      start: "top bottom",
      end: "center center",
      scrub: 2,
    },
    x: "-20%",
  });
};

const chapterFive = () => {
  gsap.from(".letter__scroll", {
    scrollTrigger: {
      trigger: ".letter__scroll",
      start: "center bottom",
      end: "center center",
      scrub: 3,
    },
    x: "-10%",
    opacity: 0,
  });
};

const finaleSection = () => {
  gsap.from(".printing-house__image", {
    scrollTrigger: {
      trigger: ".printing-house__image",
      start: "center bottom",
      end: "center center",
      scrub: 3,
    },
    x: "-10%",
  });
  gsap.from(".ending__circle", {
    scrollTrigger: {
      trigger: ".ending__circle",
      start: "center bottom",
      end: "center center",
      scrub: 3,
    },
    scale: 0,
  });
};

const startAnimations = () => {
  interactive();
  hero();
  chapterOne();
  chpaterTwo();
  chapaterThree();
  molds();
  chapterFour();
  chapterFive();
  finaleSection();
};

const init = () => {
  startAnimations();
};

init();
