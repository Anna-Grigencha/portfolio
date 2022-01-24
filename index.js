(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header-nav");
  const menuCloseItem = document.querySelector(".header-nav-close");
  const menuLinks = document.querySelectorAll(".header-nav");
  burger.addEventListener("click", () => {
    menu.classList.add("header-nav-open");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-nav-open");
  });
  // if (window.innerWidth < 769) {
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener("click", () => {
      menu.classList.remove("header-nav-open");
    });
  }
  // }
})();
