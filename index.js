// Carousel for Events
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselWrapper = document.querySelector('.event-carousel-wrapper');
const cards = document.querySelectorAll('.event-card');
let index = 0;

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    carouselWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (index < cards.length - 1) {
        index++;
    } else {
        index = 0; // Loop back to the first card
    }
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = cards.length - 1; // Loop back to the last card
    }
    updateCarousel();
});

// Initialize carousel position
updateCarousel();

// Handle automatic sliding
const interval = 5000; // Time in milliseconds
let autoSlide = setInterval(() => {
    nextButton.click();
}, interval);

// Testimonials Carousel
const testimonialPrevButton = document.querySelector('.testimonials .prev');
const testimonialNextButton = document.querySelector('.testimonials .next');
const testimonialCarousel = document.querySelector('.testimonials .carousel');
const testimonials = document.querySelectorAll('.testimonials .testimonial');
let testimonialIndex = 0;

function updateTestimonialCarousel() {
    const testimonialWidth = testimonials[0].offsetWidth;
    testimonialCarousel.style.transform = `translateX(-${testimonialIndex * testimonialWidth}px)`;
    updateTestimonialDots();
}

function updateTestimonialDots() {
    const dots = document.querySelectorAll('.testimonials .dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === testimonialIndex);
    });
}

testimonialNextButton.addEventListener('click', () => {
    if (testimonialIndex < testimonials.length - 1) {
        testimonialIndex++;
    } else {
        testimonialIndex = 0; // Loop back to the first testimonial
    }
    updateTestimonialCarousel();
});

testimonialPrevButton.addEventListener('click', () => {
    if (testimonialIndex > 0) {
        testimonialIndex--;
    } else {
        testimonialIndex = testimonials.length - 1; // Loop back to the last testimonial
    }
    updateTestimonialCarousel();
});

// Initialize testimonials carousel position
updateTestimonialCarousel();

// Handle automatic sliding for testimonials
const testimonialInterval = 5000; // Time in milliseconds
let testimonialAutoSlide = setInterval(() => {
    testimonialNextButton.click();
}, testimonialInterval);

// Handle window resize to adjust carousel width
window.addEventListener('resize', () => {
    updateCarousel();
    updateTestimonialCarousel();
});

// gallery dropdown 

document.addEventListener('DOMContentLoaded', (event) => {
    const galleryBtn = document.getElementById('galleryBtn');
    const galleryDropdown = document.getElementById('galleryDropdown');
  
    galleryBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default link behavior
      if (galleryDropdown.style.display === 'block') {
        galleryDropdown.style.display = 'none';
      } else {
        galleryDropdown.style.display = 'block';
      }
    });
  
    // Close the dropdown if clicked outside
    window.addEventListener('click', (e) => {
      if (!galleryBtn.contains(e.target) && !galleryDropdown.contains(e.target)) {
        galleryDropdown.style.display = 'none';
      }
    });
  });


//   nav-bar
const menuIcon = document.querySelector('.hamburger-menu .menu-icon');
const closeIcon = document.querySelector('.hamburger-menu .close-icon');
const navBar = document.querySelector('.nav-bar');
const mobileNav = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', () => {
  navBar.classList.add('active');
  mobileNav.style.display = 'flex';
  menuIcon.style.display = 'none';
  closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  navBar.classList.remove('active');
  mobileNav.style.display = 'none';
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});

// Toggle mobile dropdown menu
const mobileGalleryBtn = document.getElementById('mobileGalleryBtn');
const mobileGalleryDropdown = document.getElementById('mobileGalleryDropdown');

mobileGalleryBtn.addEventListener('click', (event) => {
  event.preventDefault();
  mobileGalleryDropdown.style.display = mobileGalleryDropdown.style.display === 'block' ? 'none' : 'block';
});

  
  
