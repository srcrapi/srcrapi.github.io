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
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.flexDirection = "column";
}

function hideMenu(element) {
  element.style.display = "none";
}
