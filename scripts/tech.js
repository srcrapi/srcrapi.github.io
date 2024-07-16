const techStack = [
  {
    name: "Html",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    src: "/assets/img/tech/html.svg",
    alt: "Html",
  },
  {
    name: "Css",
    url: "https://www.w3schools.com/Css/",
    src: "/assets/img/tech/css.svg",
    alt: "Css",
  },
  {
    name: "Sass",
    url: "https://sass-lang.com/",
    src: "/assets/img/tech/sass.svg",
    alt: "Sass",
  },
  {
    name: "Python",
    url: "https://www.python.org/",
    src: "/assets/img/tech/python.svg",
    alt: "Python",
  },
];

const createTechStack = () => {
  let tech = document.getElementById("tech");

  techStack.map(({ name, url, src, alt }) => {
    let link = document.createElement("a");
    let image = document.createElement("img");
    let text = document.createElement("h3");

    link.href = url;
    link.rel = "external";
    link.target = "_blank";
    link.classList.add("tech-item");

    image.src = src;
    image.alt = alt;

    text.innerHTML = name;

    link.appendChild(image);
    link.appendChild(text);
    tech.appendChild(link);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  createTechStack();
});
