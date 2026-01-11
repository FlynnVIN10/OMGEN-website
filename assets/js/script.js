document.addEventListener('DOMContentLoaded', () => {
    // Utility for safely adding event listeners
    const addEventListenerSafe = (selector, event, handler) => {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener(event, handler);
        }
    };

    const addEventListenersSafe = (selector, event, handler) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.addEventListener(event, handler));
    };

    // --- Mobile Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('active');
        });

        // Close menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Form Handlers ---
    const handleFormSubmission = (event, successMessage) => {
        event.preventDefault();
        const form = event.target;
        const emailInput = form.querySelector('input[type="email"]');

        if (!emailInput || !emailInput.value.includes('@')) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate submission
        console.log('Form submitted:', emailInput.value);
        showNotification(successMessage, 'success');
        form.reset();
    };

    // Attach handlers to forms
    addEventListenerSafe('.solutions__form', 'submit', (e) =>
        handleFormSubmission(e, 'Thank you! Your quote request has been sent.')
    );
    addEventListenerSafe('.newsletter__form', 'submit', (e) =>
        handleFormSubmission(e, 'Nice! You have subscribed to our newsletter.')
    );

    // Notification UI Helper
    const showNotification = (message, type) => {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            padding: 1rem 2rem;
            background: ${type === 'success' ? '#38a169' : '#e53e3e'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Trigger fade in
        setTimeout(() => notification.style.opacity = '1', 10);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };

    // --- Star Rating Interactivity ---
    addEventListenersSafe('.stars', 'mouseenter', (e) => {
        const star = e.currentTarget;
        star.style.color = 'var(--green-accent)';
        star.style.transform = 'scale(1.2)';
        star.style.transition = 'all 0.2s ease';
    });

    addEventListenersSafe('.stars', 'mouseleave', (e) => {
        const star = e.currentTarget;
        star.style.color = '#ffc107';
        star.style.transform = 'scale(1)';
    });

    // --- Lazy Loading (Intersection Observer) ---
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // If we used data-src, we would swap here. 
                    // For now, it's just native lazy loading enhancement.
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => observer.observe(img));
    }
});
