// ============================================
// PREMIUM PORTFOLIO - JAVASCRIPT
// ============================================

// DOM Elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const skillTabs = document.querySelectorAll('.tab-btn');
const skillsGrids = document.querySelectorAll('.skills-grid');
const contactForm = document.getElementById('contactForm');
const skillProgresses = document.querySelectorAll('.skill-progress');

// ============================================
// NAVIGATION
// ============================================

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Close menu when link clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
    });
});

// Navbar blur on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.7)';
        navbar.style.boxShadow = 'none';
    }
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SKILLS SECTION
// ============================================

skillTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const tabName = e.target.getAttribute('data-tab');

        // Remove active class from all tabs
        skillTabs.forEach(t => t.classList.remove('active'));
        skillsGrids.forEach(grid => grid.classList.remove('active'));

        // Add active class to clicked tab
        e.target.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// ============================================
// INTERSECTION OBSERVER
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            
            // Animate skill bars
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.skill-card, .project-card, .about-card, .timeline-content, .education-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Animate skill bars on section visibility
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

const skillsSectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !skillsAnimated) {
        skillProgresses.forEach(progress => {
            const width = progress.style.width;
            progress.style.width = '0';
            setTimeout(() => {
                progress.style.width = width;
            }, 100);
        });
        skillsAnimated = true;
    }
}, { threshold: 0.5 });

if (skillsSection) {
    skillsSectionObserver.observe(skillsSection);
}

// ============================================
// CONTACT FORM
// ============================================

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button');
    const originalText = submitBtn.innerHTML;

    // Show success state
    submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
    submitBtn.style.background = '#10b981';
    submitBtn.disabled = true;

    // Reset form
    contactForm.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
    }, 3000);

    console.log('Form submitted:', {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        subject: contactForm.querySelectorAll('input[type="text"]')[1].value,
        message: contactForm.querySelector('textarea').value
    });
});

// ============================================
// SCROLL TO TOP
// ============================================

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.setAttribute('aria-label', 'Back to top');
    button.style.display = 'none';
    button.style.position = 'fixed';
    button.style.bottom = '30px';
    button.style.right = '30px';
    button.style.zIndex = '999';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
}

createScrollToTopButton();

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// PAGE LOAD
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%cWelcome to Aashin\'s Premium Portfolio! 👋', 'color: #2563EB; font-size: 16px; font-weight: bold;');
console.log('%c✨ Designed with modern UI/UX principles inspired by top tech companies', 'color: #06B6D4; font-size: 12px;');
console.log('%cFeel free to explore and get in touch!', 'color: #10b981; font-size: 12px;');
