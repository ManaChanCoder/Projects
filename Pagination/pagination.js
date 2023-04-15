let slide1 = document.querySelector(".pagination-1");
let slide2 = document.querySelector(".pagination-2");
let slide3 = document.querySelector(".pagination-3");
let currentNumber = 1;

function backSlide() {
  if (currentNumber == 3) {
    currentNumber -= 1;
    slide3.style.display = "none";
    slide2.style.display = "block";
  } else if (currentNumber == 2) {
    currentNumber -= 1;
    slide2.style.display = "none";
    slide1.style.display = "block";
  } else if (currentNumber == 1) {
    currentNumber += 2;
    slide1.style.display = "none";
    slide3.style.display = "block";
  }
}

function forwardSlide() {
  if (currentNumber == 1) {
    currentNumber += 1;
    slide1.style.display = "none";
    slide2.style.display = "block";
  } else if (currentNumber == 2) {
    currentNumber += 1;
    slide2.style.display = "none";
    slide3.style.display = "block";
  } else if (currentNumber == 3) {
    currentNumber -= 2;
    slide3.style.display = "none";
    slide1.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  let query = window.matchMedia("(max-width:962px)");

  if (query.matches) {
    function goHome() {
      menu.style.display = "none";
      hideMenu.style.display = "none";
      showMenu.style.display = "block";
    }

    function aboutMe() {
      menu.style.display = "none";
      hideMenu.style.display = "none";
      showMenu.style.display = "block";
    }

    function goContact() {
      menu.style.display = "none";
      hideMenu.style.display = "none";
      showMenu.style.display = "block";
    }
  }
}

let showMenu = document.querySelector("#open-menu");
let hideMenu = document.querySelector("#close-menu");
let menu = document.querySelector(".navbar");

function openMenu() {
  showMenu.style.display = "none";
  hideMenu.style.display = "block";

  menu.style.display = "block";
}

function closeMenu() {
  showMenu.style.display = "block";
  hideMenu.style.display = "none";

  menu.style.display = "none";
}