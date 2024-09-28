document.addEventListener("DOMContentLoaded", () => {
  gsap.set("nav", {
    y: "-150",
  });
  gsap.to(".hero-img > img", {
    clipPath: "polygon(100% 0%,0% 0% ,0% 100%,100% 100%)",
    stagger: 0.2,
    ease: "power4.inOut",
    duration: 1,
  });

  gsap.to(".hero", {
    padding: "0",
    duration: 3,
    ease: "power3.inOut",
  });
  gsap.to("nav", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.5,
  });
  gsap.to(".header > h1 > span", {
    top: "0px",
    duration: 1,
    ease: "back.inOut",
    delay: 1.5,
    stagger: 0.1,
  });
});

const splitTextIntoSpan = (element) => {
  const content = document.querySelector(element);

  let text = content.textContent;
  let splittext = text.split("");
  let clutter = "";
  splittext.forEach((char) => {
    clutter = clutter + `<span>${char}</span>`;

    content.innerHTML = clutter;
  });
};

splitTextIntoSpan(".header > h1");
