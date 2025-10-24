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

        // Stars interactivity
        try {
          document.querySelectorAll('.stars').forEach(star => {
            star.addEventListener('mouseenter', () => {
              star.style.color = 'var(--green-accent)';
              star.style.transform = 'scale(1.1)';
            });
            star.addEventListener('mouseleave', () => {
              star.style.color = '#ffc107';
              star.style.transform = 'scale(1)';
            });
          });
          console.log('Interactive stars enabled');
        } catch (error) {
          console.error('Stars init failed:', error);
        }

        // Form stub validation
        try {
          const form = document.querySelector('.solutions__form');
          if (form) {
            form.addEventListener('submit', (e) => {
              e.preventDefault();
              const email = form.querySelector('input[type="email"]').value;
              if (email) {
                console.log('Quote request submitted:', email);
                alert('Thank you! Quote sent to ' + email);
              } else {
                alert('Please enter email');
              }
            });
            console.log('Form stub enabled');
          }
        } catch (error) {
          console.error('Form init failed:', error);
        }
});

// Future enhancements
// TODO: Add interactive star ratings for testimonials
// TODO: Add image lazy loading for performance
// TODO: Add form validation for contact forms
// TODO: Add mobile menu toggle functionality
