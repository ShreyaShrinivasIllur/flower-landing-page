// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.getElementById('toggler');
    const navbar = document.querySelector('.navbar');
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggler.checked = false;
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('header') && toggler.checked) {
            toggler.checked = false;
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to cart functionality (basic)
document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Add visual feedback
        this.style.background = '#27ae60';
        this.textContent = 'Added!';
        
        setTimeout(() => {
            this.style.background = '#333';
            this.textContent = 'add to cart';
        }, 1500);
    });
});

// Contact form validation
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#e74c3c';
            } else {
                input.style.borderColor = '#27ae60';
            }
        });
        
        if (isValid) {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            inputs.forEach(input => {
                input.style.borderColor = 'rgba(0,0,0,.1)';
            });
        } else {
            alert('Please fill in all required fields.');
        }
    });
}