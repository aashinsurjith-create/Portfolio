// ==========================================
// CYBERPUNK PORTFOLIO - JAVASCRIPT
// ==========================================

// PARTICLE SYSTEM
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.init();
    }

    init() {
        // Create particles
        for (let i = 0; i < 50; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const tx = (Math.random() - 0.5) * 100;
        
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        this.container.appendChild(particle);
        
        // Recreate particle after animation
        setTimeout(() => {
            particle.remove();
            this.createParticle();
        }, (duration + Math.random() * 5) * 1000);
    }
}

// MOUSE GLOW EFFECT
class MouseGlow {
    constructor() {
        this.glowElement = document.getElementById('mouseGlow');
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => this.updateGlow(e));
        document.addEventListener('mouseenter', () => {
            document.body.classList.add('mouse-active');
        });
        document.addEventListener('mouseleave', () => {
            document.body.classList.remove('mouse-active');
        });
    }

    updateGlow(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        this.glowElement.style.left = (x - 150) + 'px';
        this.glowElement.style.top = (y - 150) + 'px';
    }
}

// SMOOTH SCROLL NAVIGATION
class SmoothNavigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section');
        this.init();
    }

    init() {
        // Click handlers
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                    this.updateActiveLink(link);
                }
            });
        });

        // Scroll event for active link highlighting
        window.addEventListener('scroll', () => {
            this.updateActiveOnScroll();
        });
    }

    updateActiveLink(link) {
        this.navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }

    updateActiveOnScroll() {
        let current = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
}

// TERMINAL ANIMATION
class TerminalAnimation {
    constructor() {
        this.terminalLines = document.querySelectorAll('.terminal-line');
        this.init();
    }

    init() {
        // Terminal lines are already animated with CSS
        // This can be enhanced with dynamic content if needed
    }
}

// SCROLL ANIMATIONS
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);

        // Observe skill chips and project cards
        document.querySelectorAll('.skill-chip, .project-card, .feature-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    }
}

// FORM HANDLING
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        // Validate
        if (!this.validate(data)) {
            alert('Please fill in all fields correctly');
            return;
        }

        // Create mailto link
        const subject = encodeURIComponent(data.subject || 'Contact from Portfolio');
        const body = encodeURIComponent(
            `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        
        window.location.href = `mailto:aashinsurjith@karunya.edu.in?subject=${subject}&body=${body}`;
        
        // Show success message
        this.showSuccess();
    }

    validate(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return data.name && emailRegex.test(data.email) && data.subject && data.message;
    }

    showSuccess() {
        const button = this.form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = 'MESSAGE SENT!';
        button.style.background = 'linear-gradient(135deg, #00d9ff, #7c3aed)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            this.form.reset();
        }, 3000);
    }
}

// STATS COUNTER ANIMATION
class StatsCounter {
    constructor() {
        this.statBoxes = document.querySelectorAll('.stat-value');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.hasAnimated = true;
                    this.animateStats();
                }
            });
        }, observerOptions);

        this.statBoxes.forEach(box => observer.observe(box.parentElement));
    }

    animateStats() {
        this.statBoxes.forEach(box => {
            const finalValue = box.textContent;
            const numericValue = parseFloat(finalValue);
            const isDecimal = finalValue.includes('.');
            
            if (isNaN(numericValue)) return;

            let currentValue = 0;
            const increment = numericValue / 30;
            const interval = setInterval(() => {
                currentValue += increment;
                
                if (currentValue >= numericValue) {
                    box.textContent = finalValue;
                    clearInterval(interval);
                } else {
                    box.textContent = isDecimal ? 
                        currentValue.toFixed(2) : 
                        Math.floor(currentValue) + '+';
                }
            }, 30);
        });
    }
}

// BUTTON GLOW EFFECT
class ButtonGlow {
    constructor() {
        this.buttons = document.querySelectorAll('.btn');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => this.handleMouseMove(e, button));
            button.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, button));
        });
    }

    handleMouseMove(e, button) {
        const glow = button.querySelector('.btn-glow');
        if (!glow) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.left = (x - 50) + 'px';
        glow.style.top = (y - 50) + 'px';
        glow.style.opacity = '1';
    }

    handleMouseLeave(e, button) {
        const glow = button.querySelector('.btn-glow');
        if (glow) {
            glow.style.opacity = '0';
        }
    }
}

// MOBILE MENU TOGGLE (if needed)
class MobileMenu {
    constructor() {
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        // Add mobile menu logic if hamburger is added
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.navMenu.style.display = '';
            }
        });
    }
}

// INITIALIZE ALL
document.addEventListener('DOMContentLoaded', () => {
    // Initialize systems
    new ParticleSystem(document.getElementById('particlesContainer'));
    new MouseGlow();
    new SmoothNavigation();
    new TerminalAnimation();
    new ScrollAnimations();
    new ContactForm();
    new StatsCounter();
    new ButtonGlow();
    new MobileMenu();

    console.log('Cyberpunk Portfolio initialized');
});

// Add smooth scroll polyfill for older browsers
if (!Element.prototype.scrollIntoView) {
    Element.prototype.scrollIntoView = function() {
        this.scrollTop = this.offsetTop;
    };
}