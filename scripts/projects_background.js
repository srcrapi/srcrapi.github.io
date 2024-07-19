// Ordenado na ordem que ta no html
const backgrounds = ["nijika-wallpaper.jpg", "ryo_image.png", "kita_image.jpg"];
const basePath = "/assets/img/Projects/banners";

const setBackground = () => {
  let cards = document.querySelectorAll(".project-card");

  cards.forEach((card, i) => {
    if (!backgrounds[i]) console.log("Missing image for", card);

    card.style.backgroundImage = `url(${basePath}/${backgrounds[i]})`;
  });
};

document.addEventListener("DOMContentLoaded", setBackground);
