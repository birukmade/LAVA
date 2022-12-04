const openHumburgerIconElement = document.querySelector("header .humburger");
const colseHumbergerIconElement = document.querySelector(
  "#mobile-nav .humburger"
);
const mobilelNav = document.querySelector("#mobile-nav");

openHumburgerIconElement.addEventListener("click", openSideDrawer);
function openSideDrawer() {
  mobilelNav.style.display = "block";
}

colseHumbergerIconElement.addEventListener("click", closeSideDrawer);
function closeSideDrawer() {
  mobilelNav.style.display = "none";
}
