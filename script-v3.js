// ============================================
// MODERN DARK PORTFOLIO - V3 JAVASCRIPT
// ============================================

// Navigation & Smooth Scroll
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

// Active nav highlighting
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
let isDarkMode = true;

themeToggle?.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>Sent!</span> <i class="fas fa-check"></i>';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    contactForm.reset();
    
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
    }, 3000);
});

// Skill bar animation on scroll
const skillBars = document.querySelectorAll('.bar-fill');
const skillsSection = document.getElementById('skills');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

const skillsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkills();
        skillsObserver.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Scroll to top on load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

console.log('%cWelcome to Aashin\'s Portfolio!', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
console.log('%c✨ Modern Dark Design V3', 'color: #7c3aed; font-size: 12px;');
