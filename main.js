// navbar toggler - - - - -
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".header");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});
