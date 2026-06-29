# Customization Guide

Complete guide to customizing your portfolio to match your personal brand.

## 🎨 Color Customization

### Changing the Color Scheme

All colors are defined at the top of `styles.css` in the `:root` section:

```css
:root {
    --primary-color: #0066ff;           /* Main blue color */
    --secondary-color: #00d4ff;         /* Accent cyan color */
    --dark-bg: #0a0e27;                 /* Dark background */
    --dark-secondary: #1a1f3a;          /* Secondary dark */
    --text-light: #ffffff;              /* Light text */
    --text-muted: #6b7280;              /* Muted text */
}
```

### Popular Color Combinations

**Modern Blue** (Current)
```css
--primary-color: #0066ff;
--secondary-color: #00d4ff;
--dark-bg: #0a0e27;
```

**Purple & Pink**
```css
--primary-color: #a855f7;
--secondary-color: #ec4899;
--dark-bg: #1f0933;
```

**Green & Teal**
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
--dark-bg: #051f15;
```

**Orange & Yellow**
```css
--primary-color: #f97316;
--secondary-color: #fbbf24;
--dark-bg: #2d1810;
```

**Red & Rose**
```css
--primary-color: #ef4444;
--secondary-color: #f43f5e;
--dark-bg: #27030a;
```

## ✏️ Content Customization

### 1. Personal Information

Find these sections and replace with your info:

**Email:**
```html
<a href="mailto:aashinsurjith@karunya.edu.in">
```

**Phone:** (Add if desired)
```html
<a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
```

**LinkedIn:**
```html
<a href="https://linkedin.com/in/aashin-surjith-thampi-c-aa0a33378/">
```

**GitHub:**
```html
<a href="https://github.com/aashinsurjith-create">
```

### 2. Hero Section

**Title:**
```html
<h1 class="hero-title">Your Name Here</h1>
```

**Subtitle:**
```html
<p class="hero-subtitle">Your Title | Your Focus | Your Passion</p>
```

**Description:**
```html
<p class="hero-description">
    Your compelling introduction about yourself
</p>
```

**Call-to-Action Buttons:**
```html
<a href="#contact" class="btn btn-primary">
    <i class="fas fa-briefcase"></i> Hire Me
</a>
```

### 3. About Section

Replace the about text with your story:

```html
<p class="lead">
    Your headline about yourself (50-80 words)
</p>
<p>
    Longer description of who you are and what you do...
</p>
```

**Update Statistics:**
```html
<div class="stat-card">
    <div class="stat-number">2+</div>
    <div class="stat-label">Major Projects</div>
</div>
```

### 4. Skills Section

**Add Programming Languages:**
```html
<div class="skill-item">
    <span class="skill-name">Your Language</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%;"></div>
    </div>
</div>
```

**Add Skill Badges:**
```html
<div class="skill-badges">
    <span class="badge">Your Skill 1</span>
    <span class="badge">Your Skill 2</span>
    <span class="badge">Your Skill 3</span>
</div>
```

### 5. Projects Section

**Add a New Project:**
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-icon">
            <i class="fas fa-icon-name"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-subtitle">Short tagline</p>
        <p class="project-description">
            Detailed description of the project
        </p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="project-url" class="project-link">
                <i class="fas fa-external-link-alt"></i> View Project
            </a>
            <a href="github-url" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

### 6. Experience Section

**Add Timeline Item:**
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3 class="experience-title">Your Position</h3>
        <p class="experience-company">Company Name</p>
        <p class="experience-period">2024 - Present</p>
        <p class="experience-description">
            Description of your role and responsibilities
        </p>
        <ul class="experience-highlights">
            <li>Achievement 1</li>
            <li>Achievement 2</li>
            <li>Achievement 3</li>
        </ul>
    </div>
</div>
```

### 7. Education Section

**Update Education Details:**
```html
<h4>Your Degree Name</h4>
<p class="institution">Your University Name</p>
<p class="period">Start Year - End Year</p>
<p class="details">
    <strong>GPA/CGPA:</strong> Your Score
</p>
<p class="coursework">
    <strong>Related Coursework:</strong> Subject 1, Subject 2, Subject 3
</p>
```

**Add Certifications:**
```html
<div class="cert-item">
    <i class="fas fa-check-circle"></i>
    <span>Your Certification Name</span>
</div>
```

## 🎯 Typography Customization

### Change Fonts

Replace font-family in `styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}

.section-title {
    font-family: 'Your Font', serif;
}
```

**Popular Font Combinations:**

Import from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

Then use:
```css
:root {
    --heading-font: 'Playfair Display', serif;
    --body-font: 'Poppins', sans-serif;
}
```

## 🖼️ Adding Images

### Profile Picture in Hero Section

Replace the floating card with an image:

```html
<div class="hero-image">
    <img src="profile.jpg" alt="Profile" style="width: 300px; border-radius: 12px;">
</div>
```

### Project Images

Add images to project cards:

```html
<div class="project-image">
    <img src="project-image.jpg" alt="Project Name" style="width: 100%; height: 200px; object-fit: cover;">
</div>
```

### Image Optimization Tips

1. Resize images to appropriate dimensions
2. Use tools like TinyPNG to compress
3. Use WebP format for better performance
4. Add alt text for accessibility

## 📱 Responsive Breakpoints

Customize responsive behavior in `styles.css`:

### Current Breakpoints:
```css
@media (max-width: 768px) { }    /* Tablets */
@media (max-width: 480px) { }    /* Mobile phones */
```

### Add Custom Breakpoint:
```css
@media (max-width: 1400px) {
    .container {
        max-width: 90%;
    }
}
```

## ⚡ Animation Customization

### Adjust Animation Speed

In `styles.css`, find animations:

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

Apply with duration:
```css
animation: fadeInUp 0.8s ease-out;  /* Change 0.8s to your preference */
```

### Disable Animations

In `script.js`, comment out:
```javascript
// observer.observe(el);  // Disable scroll animations
```

Or add to CSS:
```css
* {
    animation: none !important;
    transition: none !important;
}
```

## 🔧 JavaScript Customization

### Change Form Submission Behavior

Edit `script.js` contact form section:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Your custom handling here
    console.log('Form submitted');
    
    // Show custom message
    alert('Custom message here');
});
```

### Integrate Email Service

For actual email sending, use:

**Option 1: EmailJS**
```javascript
emailjs.init("PUBLIC_KEY");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_id', 'template_id', contactForm)
        .then(() => console.log('Email sent!'))
        .catch(err => console.log(err));
});
```

**Option 2: Formspree**
```html
<form action="https://formspree.io/f/your_form_id" method="POST">
    <!-- form fields -->
</form>
```

## 🎨 Advanced Styling

### Glass Morphism Customization

Adjust blur and transparency:

```css
.glass-card {
    background: rgba(255, 255, 255, 0.05);  /* Change transparency */
    backdrop-filter: blur(10px);             /* Change blur amount */
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Gradient Effects

Create custom gradients:

```css
background: linear-gradient(135deg, #0066ff 0%, #00d4ff 50%, #00ff88 100%);
```

### Shadow Customization

```css
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);  /* Adjust X, Y, blur, spread, color, opacity */
```

## 📊 Adding Analytics

### Google Analytics

Add to index.html before closing `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

### Event Tracking

```javascript
gtag('event', 'page_view', {
    'page_title': 'Portfolio',
    'page_path': '/'
});
```

## 🔐 SEO Optimization

### Update Meta Tags

```html
<meta name="description" content="Your professional description">
<meta name="keywords" content="developer, portfolio, keywords">
<meta name="author" content="Your Name">

<!-- Open Graph Tags -->
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="og-image.png">
<meta property="og:url" content="https://yourdomain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name">
<meta name="twitter:description" content="Your description">
```

### Update Favicon

Add to `<head>`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
```

## 🚀 Performance Optimization

### Minify CSS and JavaScript

Use online tools or build tools to minify files.

### Optimize Images

```html
<img src="image.webp" alt="Description" loading="lazy">
```

### Enable Caching

In `.htaccess`:
```
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType text/css "access plus 1 week"
</IfModule>
```

---

## 📝 Common Customizations Summary

| Need | Location | Change |
|------|----------|--------|
| Change Colors | styles.css :root | --primary-color, etc |
| Update Text | index.html | Edit content directly |
| Add Project | index.html | Duplicate project-card |
| Change Font | styles.css | font-family property |
| Adjust Animation | styles.css @keyframes | animation duration |
| Add Image | index.html | Add img tag |
| Change Layout | styles.css | grid-template-columns |
| Modify Button | styles.css .btn | Update styles |

---

## 🎓 Resources

- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [CSS Gradients](https://cssgradient.io/)
- [Box Shadow Generator](https://www.cssmatic.com/box-shadow)

---

**Version**: 1.0.0
**Last Updated**: June 2026

Happy customizing! 🎨
