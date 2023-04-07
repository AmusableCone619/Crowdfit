document.getElementById('cta-button').addEventListener('click', function() {
    alert('Welcome to CrowdFit Pro!');
});

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const body = document.querySelector("body");
  
    navToggle.addEventListener("click", function () {
        body.classList.toggle("menu-open");
    });
  
    // Close menu when a link is clicked
    const navItems = document.querySelectorAll(".nav-links li a");
  
    navItems.forEach((navItem) => {
      navItem.addEventListener("click", function () {
        body.classList.remove("menu-open");
      });
    });
});
