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
/*Кэширование изображений*/
function preloadSummerImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/summer/${i}.jpg`;
  }
}
function preloadWinterImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/winter/${i}.jpg`;
  }
}
function preloadSpringImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/spring/${i}.jpg`;
  }
}
function preloadAutumnImages() {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/autumn/${i}.jpg`;
  }
}
preloadSummerImages();
preloadAutumnImages();
preloadSpringImages();
preloadWinterImages();

const portfolioButton = document.querySelectorAll(".portfolio-button");
//const timeOfTheYear = document.querySelector.dataset.season(".portfolio-button");

const winterButton = document.querySelector(".winter-button");
const springButton = document.querySelector(".spring-button");
const summerButton = document.querySelector(".summer-button");
const autumnButton = document.querySelector(".autumn-button");

const portfolioButtons = document.querySelector(".portfolio-buttons");
const portfolioImages = document.querySelectorAll(".photo");

autumnButton.classList.add("active");

portfolioButtons.addEventListener("click", changeImage);
function changeImage(event) {
  /* if (event.target.classList.contains("portfolio-button")) {
    let a = document.querySelector.dataset.season;
    // let a = event.target.classList.contains("data-season");
    
    portfolioImages.forEach(
      (img, index) => (img.src = `./assets/img/${a}/${index + 1}.jpg`)
    );
  }*/
  winterButton.classList.remove("active");
  springButton.classList.remove("active");
  summerButton.classList.remove("active");
  autumnButton.classList.remove("active");

  if (event.target.classList.contains("winter-button")) {
    winterButton.classList.add("active");
    portfolioImages.forEach(
      (img, index) => (img.src = `./assets/img/winter/${index + 1}.jpg`)
    );
  }
  if (event.target.classList.contains("spring-button")) {
    springButton.classList.add("active");
    portfolioImages.forEach(
      (img, index) => (img.src = `./assets/img/spring/${index + 1}.jpg`)
    );
  }
  if (event.target.classList.contains("summer-button")) {
    summerButton.classList.add("active");
    portfolioImages.forEach(
      (img, index) => (img.src = `./assets/img/summer/${index + 1}.jpg`)
    );
  }
  if (event.target.classList.contains("autumn-button")) {
    autumnButton.classList.add("active");
    portfolioImages.forEach(
      (img, index) => (img.src = `./assets/img/autumn/${index + 1}.jpg`)
    );
  }
}

//});

portfolioButton.classList.add("active");

//button.classList.remove("active");

/*button.addEventListener("click", () => {
  button.classList.add("active");
});*/

//winterButton.classList.add("active"); // присваиваем класс с нужным свойством элементу
