const backgrounds = {
  "nijika.html": "nijika-wallpaper.jpg",
  "ryo.html": "ryo_image.png",
  "kita.html": "kita_image.jpg",
};

const basePath = "/assets/img/Projects/banners";

const setBanners = () => {
  let banners = document.querySelectorAll(".background-projects-content");
  let currentPage = window.location.pathname.split("/").pop();

  banners.forEach((banner) => {
    if (!backgrounds[currentPage]) console.log("Missing banner:", banner);

    banner.style.backgroundImage = `url(${basePath}/${backgrounds[currentPage]})`;
  });
};

document.addEventListener("DOMContentLoaded", setBanners);
