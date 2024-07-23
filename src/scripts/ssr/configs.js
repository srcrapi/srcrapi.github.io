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
    altImage: "Profile",
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
  nijika: {
    title: "Nijika",
    description:
      "O programa baseia-se em pegar imagens de um diretório e lista-las",
    date: "Posted by rap1 on November 18, 2023",
    banner: "url('/assets/img/Projects/banners/nijika-wallpaper.jpg')",
    contents: [
      "Usage",
      "Example video",
      "Errors",
      "How-to-resolve",
      "Issues",
      "Conclusion",
    ],
    github: "https://github.com/srcrapi/NIJIKA",
  },
  ryo: {
    title: "Ryo",
    description:
      "Ryo é um instalador de aplicativos para fazer uma instalação de um aplicativo desejado",
    date: "Posted by rap1 on December 22, 2023",
    banner: "url('/assets/img/Projects/banners/ryo_image.png')",
    github: "https://github.com/srcrapi/ryo",
    contents: ["Usage", "Previews", "Example video", "Issues", "Conclusion"],
  },
  kita: {
    title: "Kita",
    description:
      "Kita é uma interface CLI feita para ajudar novos usuários do git.",
    date: "Posted by rap1 on January 26, 2024",
    banner: "url('/assets/img/Projects/banners/kita_image.jpg')",
    github: "https://github.com/srcrapi/kita",
    contents: ["Usage", "Previews", "Example video", "Issues", "Conclusion"],
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
