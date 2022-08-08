"use strict";

// nav-open

const navBtnEl = document.querySelector(".btn-mobile-nav");
const htmlEl = document.querySelector("html");

navBtnEl.addEventListener("click", (e) => {
  htmlEl.classList.toggle("nav-open");
  htmlEl.classList.toggle("sticky");
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
