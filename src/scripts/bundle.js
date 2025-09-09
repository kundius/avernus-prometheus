import "./forms";
import "./modals";
import "./scrolls";
import "./accordion";
import { throttle } from 'throttle-debounce';

const removeFocusableListener = () => {
  document.querySelector("body").classList.remove("page-focusable");
  document.removeEventListener("click", removeFocusableListener);
};

document.addEventListener(
  "keyup",
  function (e) {
    if (e.keyCode === 9) {
      document.querySelector("body").classList.add("page-focusable");
      document.addEventListener("click", removeFocusableListener);
    }
  },
  false
);

const days = document.querySelectorAll('.section-schedule__days-value') || []
let maxWidth = 0
days.forEach((item) => {
  maxWidth = Math.max(maxWidth, item.offsetWidth)
})
days.forEach((item) => {
  item.style.width = `${maxWidth}px`
})

const menuToggles = document.querySelectorAll('.s-header__menu-toggle') || []
menuToggles.forEach((menuToggle) => {
  const menu = menuToggle.closest('.s-header__menu')
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('s-header__menu_opened')
  })
})
