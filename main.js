const burgirIcon = document.querySelector(".bi-list");
const XIcon = document.querySelector(".bi-x-lg");
const menu__section = document.querySelector(".menu__section");
const navbar = document.querySelector("nav.NAv");

burgirIcon.addEventListener("click", () => {
  menu__section.style.opacity = "1";

  burgirIcon.classList.remove("nav_active");
  XIcon.classList.add("nav_active");
  menu__section.classList.add("ul_active");
});

XIcon.addEventListener("click", () => {
  XIcon.classList.remove("nav_active");
  burgirIcon.classList.add("nav_active");
  menu__section.classList.remove("ul_active");
  menu__section.style.opacity = "0.2";
});

if (document.body.offsetWidth < 1152) {
  onlyMoba();
}

function onlyMoba() {
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 9845) {
      navbar.style.bottom = "-65px";
    } else {
      navbar.style.bottom = "16px";
    }
  });
}
