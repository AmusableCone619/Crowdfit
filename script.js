document.getElementById('cta-button').addEventListener('click', function() {
    alert('Welcome to CrowdFit Pro!');
});
document.addEventListener("DOMContentLoaded", function () {
    let parallax = document.querySelector("#parallax");
    
    if (parallax) {
      window.addEventListener("scroll", function () {
        let scrolledHeight = window.pageYOffset,
          limit = parallax.offsetTop + parallax.offsetHeight;
        
        if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
          parallax.querySelector("::before").style.transform = `translateY(${(scrolledHeight - parallax.offsetTop) * 0.5}px)`;
        } else {
          parallax.querySelector("::before").style.transform = "translateY(50%)";
        }
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Navbar scrolling effect
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header.classList.toggle("scrolled", window.scrollY > 0);
    });
  
    // Responsive navigation
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    navToggle.addEventListener("click", function () {
      document.body.classList.toggle("menu-open");
      navLinks.classList.toggle("menu-open");
    });
  
    // Close menu when link is clicked
    const navItems = document.querySelectorAll(".nav-links li a");
  
    navItems.forEach((navItem) => {
      navItem.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        navLinks.classList.remove("menu-open");
      });
    });
  });
  
