// ============================================
// DOM ELEMENTS
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('.navbar');

// ============================================
// MOBILE MENU TOGGLE
// ============================================
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLL & ACTIVE LINK HIGHLIGHTING
// ============================================
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

    // Navbar background on scroll
    if (window.scrollY > 50) {
        navBar.style.background = 'rgba(10, 14, 39, 0.95)';
        navBar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navBar.style.background = 'rgba(10, 14, 39, 0.8)';
        navBar.style.boxShadow = 'none';
    }
});

// ============================================
// CONTACT FORM SUBMISSION
// ============================================
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
        name: contactForm.querySelector('input[type="text"]').value,
        email: contactForm.querySelector('input[type="email"]').value,
        subject: contactForm.querySelectorAll('input[type="text"]')[1].value,
        message: contactForm.querySelector('textarea').value
    };

    try {
        // Show success message
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)';

        // Clear form
        contactForm.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);

        console.log('Message data:', data);
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again.');
    }
});

// ============================================
// SCROLL ANIMATIONS - Intersection Observer
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
        }
    });
}, observerOptions);

// Observe skill items and project cards
document.querySelectorAll('.skill-item, .project-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// SKILL PROGRESS BAR ANIMATION
// ============================================
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

const animateSkills = () => {
    if (skillsAnimated) return;

    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
    skillsAnimated = true;
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

// ============================================
// TYPEWRITER EFFECT (OPTIONAL)
// ============================================
function typewriterEffect(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';

    const typeInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

// Apply typewriter effect to hero subtitle if needed
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && heroSubtitle.textContent) {
        // Uncomment below to enable typewriter effect
        // const text = heroSubtitle.textContent;
        // typewriterEffect(heroSubtitle, text, 50);
    }
});

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// ============================================
// ACTIVE NAV LINK STYLING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS for active nav link
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #00d4ff;
        }
        .nav-link.active::after {
            width: 100%;
        }
        
        @media (max-width: 768px) {
            .nav-menu.active {
                display: flex !important;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(10, 14, 39, 0.98);
                flex-direction: column;
                gap: 1rem;
                padding: 2rem;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(8px, 8px);
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(8px, -8px);
            }
        }
    `;
    document.head.appendChild(style);
});

// ============================================
// THEME TOGGLE (Optional - if needed in future)
// ============================================
// localStorage can be used to save theme preference
// function toggleTheme() {
//     document.body.classList.toggle('light-theme');
//     localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
// }

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 999;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;

    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 6px 20px rgba(0, 102, 255, 0.4)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 15px rgba(0, 102, 255, 0.3)';
    });

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
};

createScrollToTopButton();

// ============================================
// ADD PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// EMAIL LINK HANDLING
// ============================================
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.getAttribute('href').replace('mailto:', '');
        window.location.href = `mailto:${email}`;
    });
});

// ============================================
// EXTERNAL LINK HANDLING
// ============================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add tracking if needed
        console.log('Opening external link:', link.href);
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%cWelcome to Aashin\'s Portfolio! 👋', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
console.log('%cFeeling curious? Check out the projects and feel free to reach out!', 'color: #0066ff; font-size: 14px;');
