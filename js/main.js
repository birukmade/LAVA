const openHumburgerIconElement = document.querySelector("header .humburger");
const colseHumbergerIconElement = document.querySelector(
  "#mobile-nav .humburger"
);
const mobilelNav = document.querySelector("#mobile-nav");
const backdropElement = document.querySelector(".backdrop");
const mobileNavItemLInkElements =
  document.querySelectorAll(".mobile-nav-item a");

openHumburgerIconElement.addEventListener("click", openSideDrawer);
colseHumbergerIconElement.addEventListener("click", closeSideDrawer);
backdropElement.addEventListener("click", closeSideDrawer);

for (const mobileNavItemLink of mobileNavItemLInkElements) {
  mobileNavItemLink.addEventListener("click", closeSideDrawer);
}

function openSideDrawer() {
  mobilelNav.style.display = "block";
  backdropElement.style.display = "block";
}

colseHumbergerIconElement.addEventListener("click", closeSideDrawer);
function closeSideDrawer() {
  mobilelNav.style.display = "none";
  backdropElement.style.display = "none";
}
