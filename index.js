const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Retouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};
export default i18Obj;

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
