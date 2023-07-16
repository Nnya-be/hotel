/** This file implements all the functionalities of the nav bar */

/** navigation point selectors */
const navigation = document.querySelector(".navigation");
const sideNav = document.querySelector(".side-nav");
const sideNavItem = document.querySelector(".side-nav__item");
const sideNavIcon = document.querySelector(".side-nav__icon");
const sideNavText = document.querySelector("side-nav__text");
const sideNavLink = document.querySelector(".side-nav__link");
const copy = document.querySelector(".copy");

/** end of the nav bar navigation selectors */

sideNav.addEventListener("click", (el) => {
  const select = el.target.closest(".side-nav__item");
  const children = [...select.parentElement.children];
  /** selecting the child nodes of the parent node of where the event occured */
  children.forEach((val) => {
    val.classList.remove("side-nav__item-active");
  });

  /** adding the active class to the selected element */
  select.classList.add("side-nav__item-active");
});
