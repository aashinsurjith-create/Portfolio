# Aashin Surjith Thampi - Portfolio Website

A modern, responsive portfolio website for Aashin Surjith Thampi, a B.Tech Computer Science Engineering student at Karunya Institute of Technology.

## 🎨 Features

### Design & UX
- **Glassmorphism Design**: Modern glass-effect cards with blur and transparency effects
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in animations, floating effects, and scroll-triggered animations
- **Color Theme**: Professional blue, white, and dark gray color scheme
- **Modern Typography**: Clean, readable fonts with proper hierarchy

### Sections
1. **Hero Section**: Eye-catching introduction with CTA buttons and social links
2. **About Me**: Personal introduction with key skills and statistics
3. **Skills & Technologies**: Organized skill categories with progress bars
4. **Featured Projects**: Showcase of major projects with descriptions and links
5. **Internship Experience**: Timeline view of experience and achievements
6. **Education & Certifications**: Education details and earned certifications
7. **Resume Download**: Direct download link for resume
8. **Contact Form**: Functional contact form with validation
9. **Footer**: Quick links and copyright information

### Interactive Elements
- **Hamburger Menu**: Mobile-friendly navigation menu
- **Scroll Animations**: Intersection Observer for smooth scroll effects
- **Smooth Scrolling**: Native smooth scroll behavior
- **Active Link Highlighting**: Navigation updates based on current section
- **Floating Scroll Indicator**: Visual indicator in hero section
- **Scroll-to-Top Button**: Quick return to top functionality
- **Contact Form**: Client-side form handling with visual feedback

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with animations
├── script.js           # Interactive functionality
├── resume.pdf          # Your resume (add this file)
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side setup required - pure frontend

### Installation

1. **Download the files** to your local machine
2. **Add your resume**: Place your `resume.pdf` in the same directory
3. **Open in browser**: Double-click `index.html` or drag it into your browser

### Using with a Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server
```

Then visit `http://localhost:8000`

## 📝 Customization

### Update Personal Information

#### Contact Information
In `index.html`, find and update:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a>
<a href="https://github.com/your-username" target="_blank">GitHub</a>
```

#### Social Media Links
Update the social icon links in:
- Hero section
- Contact section
- Footer

### Customize Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0066ff;
    --secondary-color: #00d4ff;
    --dark-bg: #0a0e27;
    --dark-secondary: #1a1f3a;
    /* ... more variables ... */
}
```

### Update Projects

Edit the project cards in the "Featured Projects" section:
```html
<div class="project-card">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Your project description</p>
    <a href="project-link">View Project</a>
</div>
```

### Update Skills

Add or modify skills in the "Skills & Technologies" section:
```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%;"></div>
    </div>
</div>
```

## 🎯 Sections Overview

### Hero Section
- Main heading and subtitle
- "Hire Me" and "View Work" buttons
- Social media links
- Floating card animation

### About Section
- Personal introduction
- Key focus areas
- Statistics cards (Projects, Certifications, CGPA, Languages)

### Skills Section
- Programming Languages
- Web Development Tools
- Tools & Technologies
- Concepts & Specializations (badge style)

### Projects Section
- Resume Craft Project
- Fashin AI Chatbot Project
- IoT Smart System Project
- Tech stack tags
- Project links

### Experience Section
- Timeline visualization
- Current roles and achievements
- Academic projects

### Education Section
- B.Tech Information
- CGPA and coursework
- 5+ Professional Certifications

### Contact Section
- Contact information and links
- Contact form with fields for:
  - Name
  - Email
  - Subject
  - Message

## 🔧 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 💡 Tips for Best Results

1. **Resume**: Ensure your `resume.pdf` is in the same directory as `index.html`
2. **Images**: If you want to add a profile image, modify the hero section
3. **Contact Form**: Currently shows a success message on submit - integrate with a backend service for actual email sending
4. **Performance**: All animations are GPU-accelerated for smooth performance

## 🔗 Integration with Backend (Optional)

To enable actual email sending from the contact form:

1. Use services like:
   - EmailJS (https://www.emailjs.com/)
   - Formspree (https://formspree.io/)
   - Netlify Forms
   - AWS SES

2. Update the contact form handler in `script.js`

## 📞 Contact Information

- **Email**: aashinsurjith@karunya.edu.in
- **LinkedIn**: linkedin.com/in/aashin-surjith-thampi-c-aa0a33378/
- **GitHub**: github.com/aashinsurjith-create

## 📄 License

This portfolio template is free to use and modify for personal use.

## ✨ Features to Consider Adding

- Blog section
- Testimonials/Recommendations
- Case studies for projects
- Dark/Light theme toggle
- Language switcher
- SEO optimization
- Analytics integration
- Comment system

## 🐛 Troubleshooting

### Mobile menu not working
- Ensure `script.js` is properly linked in `index.html`
- Check browser console for JavaScript errors

### Animations not working
- Verify that `styles.css` is properly linked
- Check if CSS animations are enabled in browser

### Contact form not submitting
- Currently shows a success message without backend
- For actual email delivery, integrate with a backend service

### External links not opening
- Check that URLs are correct and include `https://`
- Verify `target="_blank"` attribute is present for external links

## 🎓 Credits

Portfolio built with:
- HTML5
- CSS3 (with animations and glassmorphism)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts

---

**Last Updated**: June 2026
**Version**: 1.0.0

Enjoy your new portfolio website! 🚀
