/* ========================================
   OMGEN WATER - JavaScript Shell
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  try {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          console.warn('Target section not found:', this.getAttribute('href'));
        }
      });
    });
    console.log('OMGEN WATER Loaded - Smooth scroll enabled');
  } catch (error) {
    console.error('Smooth scroll init failed:', error);
  }
});

// Future enhancements
// TODO: Add interactive star ratings for testimonials
// TODO: Add image lazy loading for performance
// TODO: Add form validation for contact forms
// TODO: Add mobile menu toggle functionality
