"use strict";

// nav-open

const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
console.log(navBtnEl);

navBtnEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});
