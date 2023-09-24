var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})
let header = document.querySelector("header")
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};
// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.toggle("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.toggle("active");
  }
};
