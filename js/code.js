"use strict";

// nav-open

const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});

// nav-nested-open

const navLinkEls = document.querySelectorAll(".nav-link-has-nested-nav");

navLinkEls.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const nestedNavEl = e.target.nextElementSibling;
    nestedNavEl.classList.toggle("nav-nested-open");
  });
});
