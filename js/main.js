// ========================================
// HGs Business Firm - Main JavaScript
// Navigation, Hero Carousel, and Interactions
// ========================================

// ========== HEADER SCROLL EFFECT ==========
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
}

// Close mobile menu when a link is clicked
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
  });
});

// ========== HERO CAROUSEL ==========
let currentSlide = 0;
let autoPlayInterval;
const heroSlides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.hero-nav.prev');
const nextBtn = document.querySelector('.hero-nav.next');

function showSlide(n) {
  // Remove active class from all slides and indicators
  heroSlides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  
  // Add active class to current slide and indicator
  if (heroSlides[n]) {
    heroSlides[n].classList.add('active');
  }
  if (indicators[n]) {
    indicators[n].classList.add('active');
  }
  
  // Update hero content text if heroContent is defined
  if (typeof heroContent !== 'undefined' && heroContent[n]) {
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
    if (heroTitle) heroTitle.textContent = heroContent[n].title;
    if (heroDescription) heroDescription.textContent = heroContent[n].description;
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  showSlide(currentSlide);
}

function goToSlide(n) {
  currentSlide = n;
  showSlide(currentSlide);
  resetAutoPlay();
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// Event listeners for carousel
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
if (nextBtn) nextBtn.addEventListener('click', nextSlide);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => goToSlide(index));
});

// Initialize carousel
if (heroSlides.length > 0) {
  showSlide(0);
  startAutoPlay();
}

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#contact') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .section-content').forEach(element => {
  observer.observe(element);
});

// ========== FORM HANDLING (if needed) ==========
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    this.reset();
  });
}

// ========== UTILITY FUNCTIONS ==========

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========== PAGE NAVIGATION ==========
function navigateTo(page) {
  window.location.href = page + '.html';
}

// ========== INITIALIZE ==========
console.log('HGs Business Firm - Website Loaded');
