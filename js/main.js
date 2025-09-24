// Mobile Navigation Toggle
const mobileNav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Simple form validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector('textarea');
        
        if (name.value && email.value && message.value) {
            // In a real implementation, you would send the form data to a server here
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Simple image gallery functionality
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // In a real implementation, you would show a modal with the full-size image
        alert('In a full implementation, this would show the full-size image in a modal.');
    });
});

// Scroll Animation Functionality
const animateOnScroll = () => {
    const elements = document.querySelectorAll(
        '.featured-item, .gallery-item, .about-content, .contact-content, .short-item, .hero-content, .video-intro, .about-text, .about-image'
    );
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('scrolled');
        }
    });
};

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll(
        '.featured-item, .gallery-item, .about-content, .contact-content, .short-item, .hero-content, .video-intro, .about-text, .about-image'
    );
    
    animatedElements.forEach((element, index) => {
        // Add different animation types based on element type
        if (element.classList.contains('featured-item') || element.classList.contains('gallery-item') || element.classList.contains('short-item')) {
            element.classList.add('js-scroll', 'scale-up');
        } else if (element.classList.contains('about-text')) {
            element.classList.add('js-scroll', 'slide-right');
        } else if (element.classList.contains('about-image')) {
            element.classList.add('js-scroll', 'slide-left');
        } else {
            element.classList.add('js-scroll', 'fade-in');
        }
        
        // Stagger animations for grid items
        if (element.classList.contains('featured-item') || element.classList.contains('gallery-item') || element.classList.contains('short-item')) {
            element.style.transitionDelay = `${(index % 3) * 0.1}s`;
        }
    });
    
    // Trigger initial check in case elements are already in view
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Enhanced hero section interactions
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero) {
        // Enhanced parallax effect
        hero.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
            hero.style.transform = `translate(${xAxis}px, ${yAxis}px) scale(1.02)`;
        });
        
        hero.addEventListener('mouseleave', () => {
            hero.style.transform = 'translate(0px, 0px) scale(1)';
        });
        
        // Add a subtle zoom effect on scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < window.innerHeight) {
                const scaleValue = 1 + (scrollPosition / window.innerHeight) * 0.1;
                hero.style.backgroundSize = `${scaleValue * 100}%`;
            }
        });
    }
    
    // Add typing effect to hero text
    const heroText = document.querySelector('.hero h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        heroText.style.opacity = '1';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50);
    }
});