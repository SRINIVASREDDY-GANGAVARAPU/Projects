// Toggle menu functionality
document.getElementById("menu-icon").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
  });
  
  // Close the menu when clicking on a navbar link (mobile optimization)
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".navbar").classList.remove("active");
    });
  });
  
  // Typing effect for the 'I'm a Front-End Developer' text in the Home section
  new Typed(".typewriter-text", {
    strings: ["Front-End Developer", "JavaScript Enthusiast", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  
  // Smooth scroll to sections on navbar link click
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for header height
        behavior: "smooth"
      });
    });
  });
  
  // Add functionality to the "Download CV" button
  document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault();
    // Replace 'cv.pdf' with the actual path to your CV file
    window.open('Images/Frontend_Developer_Resume_Srinivasulu_Reddy.pdf');
  });
  