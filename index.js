function toggleMenu() {
  const getToggleMenu = document.getElementById("mobile-menu");

  if (
    getToggleMenu.style.display == "none" ||
    getToggleMenu.style.display == ""
  ) {
    showMenu(getToggleMenu);
  } else {
    hideMenu(getToggleMenu);
  }
}

function showMenu(element) {
  element.classList.add("mobile-menu__visible");
}

function hideMenu(element) {
  element.classList.remove("mobile-menu__visible");
}
