// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");
const closeMenuBtn = document.getElementById("close-menu");
const navbar = document.getElementById("navbar");

// Hamburger lines
const line1 = document.querySelector(".hamburger-line-1");
const line2 = document.querySelector(".hamburger-line-2");
const line3 = document.querySelector(".hamburger-line-3");

function openMobileMenu() {
  mobileMenu.classList.add("open");
  mobileOverlay.classList.remove("opacity-0", "invisible");
  mobileOverlay.classList.add("opacity-100", "visible");
  document.body.style.overflow = "hidden";

  // Animate hamburger to X
  line1.style.transform = "rotate(45deg) translate(5px, 5px)";
  line2.style.opacity = "0";
  line3.style.transform = "rotate(-45deg) translate(7px, -6px)";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  mobileOverlay.classList.add("opacity-0", "invisible");
  mobileOverlay.classList.remove("opacity-100", "visible");
  document.body.style.overflow = "";

  // Reset hamburger
  line1.style.transform = "";
  line2.style.opacity = "";
  line3.style.transform = "";
}

mobileMenuBtn.addEventListener("click", openMobileMenu);
closeMenuBtn.addEventListener("click", closeMobileMenu);
mobileOverlay.addEventListener("click", closeMobileMenu);

// Close mobile menu when clicking on nav links
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("glass-solid");
    navbar.classList.remove("glass");
  } else {
    navbar.classList.add("glass");
    navbar.classList.remove("glass-solid");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active link highlighting
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section, div[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Escape key to close mobile menu
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
    closeMobileMenu();
  }
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements untuk animasi dengan delay
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  const cardElements = document.querySelectorAll(".card-hover");

  fadeElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  cardElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(el);
  });
});

// Smooth scrolling untuk navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhanced hover effects
document.querySelectorAll(".card-hover").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
  });
});

// Parallax effect untuk decorative elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const decorativeElements = document.querySelectorAll(".hero-animation");

  decorativeElements.forEach((el, index) => {
    const speed = 0.3 + index * 0.1;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function (e) {
    // Create ripple effect
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation
const style = document.createElement("style");
style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
document.head.appendChild(style);

// Initialize animations
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  const cardElements = document.querySelectorAll(".card-hover");

  // Add staggered delays
  fadeElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
  });

  cardElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(el);
  });
});

// Smooth scrolling untuk navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhanced parallax effect
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroElements = document.querySelectorAll(".hero-animation");

  heroElements.forEach((el, index) => {
    const speed = 0.2 + index * 0.1;
    const yPos = scrolled * speed;
    el.style.transform = `translateY(${yPos}px)`;
  });
});
