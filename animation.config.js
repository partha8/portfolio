export const list = {
  visible: {
    opacity: 1,
    transition: {
      type: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    // transition: {
    //   when: "afterChildren",
    // },
  },
};

export const item = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "easeIn", duration: 0.65 },
  },
  hidden: {
    opacity: 0,
    y: 200,
  },
};
