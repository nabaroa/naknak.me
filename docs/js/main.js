// Navigation button
const buttonNavOpen = document.querySelector(".js-menu-toggle");
const navOpen = document.querySelector(".js-menu");
const closeByClick = document.getElementsByClassName(".menu__item");

buttonNavOpen.onclick = () => navOpen.classList.toggle("is-open");

closeByClick.onclick = () => console.log('nak');
