export const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.9, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const fadeInRight = {
  initial: {
    x: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
