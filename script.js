header = document.querySelector(".header");
btnMobileNav = document.querySelector(".btn-mobile-nav");
btnMobileNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const allinks = document.querySelectorAll("a:link");
allinks.forEach((link) => {
  addEventListener("click", function (e) {
    console.log(e);
  });
});
