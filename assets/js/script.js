class Burger {
  constructor(burgerSelector, menuSelector) {
    this.burger = document.querySelector(burgerSelector);
    this.menu = document.querySelector(menuSelector);
    this.body = document.querySelector("body");
    this.init();
  }

  init() {
    try {
      this.burger.addEventListener("click", () => {
        this.toggle();
      });
    } catch (error) {
      console.log(`class ${this.burger} not found`);
    }
  }

  toggle() {
    try {
      this.menu.classList.toggle("mobile-menu_active");
      this.body.classList.toggle("hidden");
      this.burger.classList.toggle("burger-active");
    } catch (error) {
      console.log(`class ${this.menu} not found`);
    }
  }
}

const burger = new Burger(".burger", ".menu__list");
const search = document.querySelector(".search");
const btn = document.querySelector(".search__btn");
const input = document.querySelector(".search__input");

btn.addEventListener("click", (e) => {
  search.classList.toggle("search__active");
  input.focus();
});
