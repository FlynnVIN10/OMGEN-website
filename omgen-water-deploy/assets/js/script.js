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

        // Lazy loading observer
        try {
          const images = document.querySelectorAll('img[loading="lazy"]');
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src || entry.target.src;
                observer.unobserve(entry.target);
              }
            });
          });
          images.forEach(img => observer.observe(img));
          console.log('Lazy loading enabled');
        } catch (error) {
          console.error('Lazy loading init failed:', error);
        }

        // Mobile menu toggle
        try {
          const hamburger = document.querySelector('.hamburger');
          const mobileMenu = document.querySelector('.mobile-menu');

          if (hamburger && mobileMenu) {
            hamburger.addEventListener('click', () => {
              const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
              hamburger.setAttribute('aria-expanded', !isExpanded);
              mobileMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on links
            mobileMenu.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
              });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
              if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
              }
            });

            console.log('Mobile menu toggle enabled');
          }
        } catch (error) {
          console.error('Mobile menu init failed:', error);
        }

        // Form handlers
        function handleFormSubmit(event) {
          event.preventDefault();
          const form = event.target;
          const email = form.querySelector('input[type="email"]').value;

          if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
          }

          alert('Thank you for your interest! We will contact you soon.');
          form.reset();
        }

        function handleNewsletterSubmit(event) {
          event.preventDefault();
          const form = event.target;
          const email = form.querySelector('input[type="email"]').value;

          if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
          }

          alert('Thank you for subscribing to our newsletter!');
          form.reset();
        }

        // Make functions globally available
        window.handleFormSubmit = handleFormSubmit;
        window.handleNewsletterSubmit = handleNewsletterSubmit;
});

// Mobile menu toggle function (for onclick handlers)
function toggleMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('active');
  }
}

// Make it globally available
window.toggleMobileMenu = toggleMobileMenu;

// Future enhancements
// TODO: Add interactive star ratings for testimonials
// TODO: Add image lazy loading for performance
// TODO: Add form validation for contact forms
// TODO: Add mobile menu toggle functionality
