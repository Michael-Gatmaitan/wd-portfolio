// TODO: npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

const textsTL = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power4.out",
  },
});

textsTL.fromTo(
  ".text-stagger",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.15, delay: 0.3 }
);

const navTL = gsap.timeline({
  defaults: {
    duration: 0.5,
  },
});

navTL.fromTo(
  ".nav-buttons",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.15, delay: 0.5 }
);

navTL.fromTo(".bx", {});
