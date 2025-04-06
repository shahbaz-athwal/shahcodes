export const slideUpTransition = () => {
  try {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
        {
          opacity: 0,
          transform: "translate(0, -100px)",
        },
      ],
      {
        duration: 500,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-old(top-bar)",
      },
    );

    document.documentElement.animate(
      [
        {
          opacity: 0,
          transform: "translate(0, 200px)",
        },
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
      ],
      {
        duration: 500,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-new(top-bar)",
      },
    );
  } catch (error) {
    console.log("Transition animation error:", error);
  }
};

export const slideDownTransition = () => {
  try {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
        {
          opacity: 0,
          transform: "translate(0, 100px)",
        },
      ],
      {
        duration: 500,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-old(top-bar)",
      },
    );

    document.documentElement.animate(
      [
        {
          opacity: 0,
          transform: "translate(0, -100px)",
        },
        {
          opacity: 1,
          transform: "translate(0, 0)",
        },
      ],
      {
        duration: 500,
        easing: "ease",
        fill: "forwards",
        pseudoElement: "::view-transition-new(top-bar)",
      },
    );
  } catch (error) {
    console.log("Transition animation error:", error);
  }
};
