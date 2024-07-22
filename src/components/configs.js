export default {
  routes: {
    home: "home",
    about: "about",
    projects: "projects",
  },
  home: {
    title: "rap1",
    message: "Hi, I'm",
    description: [
      "I'm a software developer who's really",
      "loves linux and terminals",
    ],
    fullDescription:
      "I'm a software developer who's really loves linux and terminals",
    altImage: "Profile picture image",
  },
  about: {
    title: "About",
    description:
      "I'm a developer who enjoys open source and learning new technologies, currently I'm learning python. I also love watching anime and reading manga!",
    banner: "url('/assets/img/About/ryo-city.jpg')",
  },
  projects: {
    title: "Projects",
    description: "all my projects",
    banner: "url('/assets/img/Projects/hutao_cool.jpg')",
  },
  footer: {
    message: "Made by",
  },
  404: {
    title: "404 Not Found",
    description:
      "Either you insert the wrong url or this page as not implemented yet",
    alt: "Ryo go home",
  },
};
