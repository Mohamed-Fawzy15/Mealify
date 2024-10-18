const hamburger = document.getElementsByClassName(".hamburger");
const navbarList = document.getElementsByClassName(".navbar-list");

hamburger.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});
