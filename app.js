window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const menuBtn = document.querySelector(".menu-btn");
  const navBtn = document.querySelector(".navbar");
  const navLink = document.querySelectorAll(".nav-link");
  const scrollBtn = document.querySelector(".scrollToBtn");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navBtn.classList.toggle("active");
  });

  navLink.forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navBtn.classList.remove("active");
    });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 50);
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHead = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;
      if (revealTop < windowHead - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
