import { throttle } from "throttle-debounce";

const scrollup = document.querySelector(".ui-scrollup");
const stickyMenu = document.querySelector('.s-header__menu')
const stickyMenuPoint = stickyMenu.offsetTop
const scrollHandler = throttle(10, () => {
  if (window.scrollY > 400) {
    scrollup.classList.add("ui-scrollup_fixed");
  } else {
    scrollup.classList.remove("ui-scrollup_fixed");
  }

  if (window.pageYOffset >= stickyMenuPoint) {
    stickyMenu.classList.add('s-header__menu_sticky')
  } else {
    stickyMenu.classList.remove('s-header__menu_sticky')
  }
});

window.addEventListener("scroll", scrollHandler);

const scrolls = document.querySelectorAll("[data-scroll]") || [];
scrolls.forEach((scroll) =>
  scroll.addEventListener("click", (e) => {
    e.preventDefault();

    const menus = document.querySelectorAll('.s-header__menu') || []
    menus.forEach((menu) => {
      menu.classList.remove('s-header__menu_opened')
    })

    let offset = 0;
    let top = 0;
    let left = 0;
    if (scroll.dataset.scroll) {
      let target = document.querySelector(scroll.dataset.scroll);
      if (target) {
        top = target.offsetTop - offset;
      }
    }

    top = top * $('html').css('zoom') || 1

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: top,
      },
      2000
    );
  })
);
