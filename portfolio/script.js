// Infinite Typing Effect for About Section
function autoTypeText() {
    const textElement = document.querySelector(".auto-typing");
    const texts = [
      "Front-End Developer",
      "Problem Solver",
      "Creative Coder"
    ]; // Add more phrases if needed
    let textIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Typing speed
      } else {
        setTimeout(() => {
          deleteText(); // Start deleting after typing
        }, 1500); // Pause before deleting
      }
    }
  
    function deleteText() {
      if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50); // Deleting speed
      } else {
        textIndex = (textIndex + 1) % texts.length; // Move to next phrase
        setTimeout(type, 500); // Pause before typing new text
      }
    }
  
    type(); // Start typing
  }
  
  // Scroll Animation for About Section
  function animateAboutSection() {
    const section = document.querySelector(".about-section");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible"); // Remove this line if animation should run only once
    }
  }
  
  // Event Listeners
  document.addEventListener("DOMContentLoaded", () => {
    autoTypeText();
    animateAboutSection();
  });
  window.addEventListener("scroll", animateAboutSection);

  

// Scroll Animation for Skills Section
function animateSkillsSection() {
    const section = document.querySelector(".skills-section");
    const cards = document.querySelectorAll(".skill-card");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, index * 200); // Staggered animation for each card
      });
    } else {
      section.classList.remove("visible");
      cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
      });
    }
  }
  
  // Add Event Listener for Scroll
  window.addEventListener("scroll", animateSkillsSection);

  

  // Scroll Animation for Projects Section
function animateProjectsSection() {
    const section = document.querySelector(".projects-section");
    const cards = document.querySelectorAll(".project-card");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, index * 200); // Staggered animation for each card
      });
    } else {
      section.classList.remove("visible");
      cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
      });
    }
  }
  
  // Add Event Listener for Scroll
  window.addEventListener("scroll", animateProjectsSection);

  
 // Scroll Animation for Services Section
function animateServicesSection() {
    const section = document.querySelector(".services-section");
    const cards = document.querySelectorAll(".service-card");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, index * 200); // Staggered animation for each card
      });
    } else {
      section.classList.remove("visible");
      cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
      });
    }
  }
  
  // Add Event Listener for Scroll
  window.addEventListener("scroll", animateServicesSection);

 // Scroll Animation for Contact Section
function animateContactSection() {
    const section = document.querySelector(".contact-section");
    const infoBox = document.querySelector(".contact-info");
    const formContainer = document.querySelector(".contact-form-container");
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
      infoBox.style.opacity = "1";
      infoBox.style.transform = "translateX(0)";
      formContainer.style.opacity = "1";
      formContainer.style.transform = "translateY(0)";
    } else {
      section.classList.remove("visible");
      infoBox.style.opacity = "0";
      infoBox.style.transform = "translateX(-50px)";
      formContainer.style.opacity = "0";
      formContainer.style.transform = "translateY(50px)";
    }
  }
  
  // Add Event Listener for Scroll
  window.addEventListener("scroll", animateContactSection);
  