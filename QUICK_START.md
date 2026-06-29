# Quick Start Guide - Portfolio Setup in 5 Minutes

Get your portfolio website up and running in just a few minutes!

## ⚡ Step 1: Access Your Portfolio (1 min)

### Windows
1. Open File Explorer
2. Navigate to: `C:\Users\Aashin C\Portfolio\`
3. Double-click **`index.html`** to open in your default browser

### macOS/Linux
1. Open Terminal
2. Navigate to portfolio folder
3. Run: `open index.html` (Mac) or `xdg-open index.html` (Linux)

## 📋 Step 2: Update Your Information (2 min)

Open `index.html` in a text editor and update:

### 1. Contact Email
Find: `aashinsurjith@karunya.edu.in`
Replace with: `your-email@example.com`

### 2. LinkedIn URL
Find: `linkedin.com/in/aashin-surjith-thampi-c-aa0a33378/`
Replace with: Your LinkedIn profile URL

### 3. GitHub URL
Find: `github.com/aashinsurjith-create`
Replace with: Your GitHub profile URL

**Example:**
```html
<!-- Original -->
<a href="https://linkedin.com/in/aashin-surjith-thampi-c-aa0a33378/">

<!-- Updated -->
<a href="https://linkedin.com/in/your-username/">
```

## 📄 Step 3: Add Your Resume (1 min)

1. Prepare your resume as **`resume.pdf`**
2. Place it in: `C:\Users\Aashin C\Portfolio\`
3. The download button will automatically work!

## 🔍 Step 4: Test Everything (1 min)

### Check These:
- ✅ Click "Hire Me" button - should smooth scroll
- ✅ Test navigation menu on mobile (resize browser)
- ✅ Try the contact form (shows success message)
- ✅ Click social icons - should open in new tabs
- ✅ Try download resume button

### Open Browser Developer Tools (F12):
- Check Console for any errors
- Test responsive design (press F12, click mobile icon)

## 🚀 Step 5: Deploy Online (Optional, but Recommended!)

### Easiest: GitHub Pages (Free)

1. **Create GitHub Account** (if you don't have one)
   - Go to github.com
   - Sign up for free

2. **Create New Repository**
   - Click "+" → "New repository"
   - Name: `aashinsurjith-create.github.io`
   - Make it Public
   - Click "Create repository"

3. **Upload Your Files**
   - Click "Add file" → "Upload files"
   - Upload: `index.html`, `styles.css`, `script.js`, `resume.pdf`
   - Click "Commit changes"

4. **Your Site is Live!**
   - Visit: `https://aashinsurjith-create.github.io`
   - Share this link! 🎉

---

## 📱 Quick Customization Tips

### Change Colors
Edit top of `styles.css`:
```css
:root {
    --primary-color: #0066ff;      /* Change this for main color */
    --secondary-color: #00d4ff;    /* Change this for accent color */
    --dark-bg: #0a0e27;            /* Change for dark background */
}
```

### Add More Projects
Find "Featured Projects" section in `index.html`:
```html
<div class="project-card">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Your description here</p>
    <!-- Add your project details -->
</div>
```

### Update Skills
Find "Skills & Technologies" in `index.html`:
```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%;"></div>
    </div>
</div>
```

---

## ✨ Features at a Glance

| Feature | Details |
|---------|---------|
| **Hero Section** | Eye-catching introduction with buttons |
| **About Section** | Personal introduction with stats |
| **Skills** | Visual progress bars for skills |
| **Projects** | Showcase your best work |
| **Experience** | Timeline of your journey |
| **Education** | Your degree and certifications |
| **Contact Form** | Get messages from visitors |
| **Responsive** | Works on phone, tablet, desktop |
| **Smooth Animations** | Modern scroll effects |
| **Dark Theme** | Easy on the eyes |

---

## 🎯 What's Included

```
📦 Portfolio/
├── 📄 index.html          ← Main file (open this!)
├── 🎨 styles.css          ← All styling
├── ⚙️  script.js           ← Interactive features
├── 📖 README.md           ← Full documentation
├── 🚀 DEPLOYMENT.md       ← How to deploy
├── 📋 QUICK_START.md      ← This file
├── ⚙️  config.json        ← Configuration
└── 📄 resume.pdf          ← Add your resume here
```

---

## 🆘 Quick Troubleshooting

### Website won't open
- Make sure index.html is in the Portfolio folder
- Try different browser
- Check if file extensions are showing (.html, .css, .js)

### Styling looks wrong
- Make sure styles.css is in same folder as index.html
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh page (F5)

### Mobile menu doesn't work
- Open in mobile browser or use phone view (F12)
- Test clicking hamburger menu icon
- Check console for JavaScript errors

### Contact form not working
- It's currently set to show a success message
- To send real emails, integrate with Netlify or EmailJS
- See DEPLOYMENT.md for details

---

## 📞 Support Resources

If you get stuck:

1. **Check Console Errors**
   - Press F12 in browser
   - Go to Console tab
   - Look for red errors

2. **Verify File Paths**
   - Make sure all files are in same directory
   - Check file names match exactly

3. **Clear Cache**
   - Ctrl+Shift+Delete (Windows)
   - Cmd+Shift+Delete (Mac)
   - Refresh page

4. **Test in Different Browser**
   - Try Chrome, Firefox, Safari, Edge
   - Helps identify browser-specific issues

---

## 🎓 Next Steps

1. **Deploy Online** - Follow DEPLOYMENT.md
2. **Get Feedback** - Share with friends/mentors
3. **Add Content** - Keep projects and certifications updated
4. **Track Analytics** - See who visits your portfolio
5. **Share Widely** - LinkedIn, GitHub, Twitter, etc.

---

## 📊 Deployment Checklist

Before going live:

- [ ] Updated all personal information
- [ ] Added your resume.pdf
- [ ] Tested all links
- [ ] Tested on mobile
- [ ] Fixed any console errors
- [ ] Customized colors/content
- [ ] Added your projects
- [ ] Verified social media links

---

## 🎉 You're Ready!

Your professional portfolio is now set up and ready to impress!

**Next:** Either open `index.html` in your browser to view locally, or follow DEPLOYMENT.md to put it online.

For questions, check README.md or DEPLOYMENT.md for detailed information.

---

**Version**: 1.0.0
**Last Updated**: June 2026

Happy showcasing! 🚀
