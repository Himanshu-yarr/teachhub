const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle on click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Hide menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});
