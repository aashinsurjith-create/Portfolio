# Portfolio Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 📋 Prerequisites

- Your portfolio files (HTML, CSS, JS)
- Your resume PDF
- A GitHub account (recommended)
- Domain name (optional)

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

Perfect for hosting a static portfolio website for free.

#### Steps:

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Name it `aashinsurjith-create.github.io`
   - Make it Public
   - Initialize with README

2. **Upload Your Files**
   - Clone the repository locally
   - Copy all portfolio files into the repository folder
   - Commit and push:
     ```bash
     git add .
     git commit -m "Initial portfolio commit"
     git push -u origin main
     ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Save

4. **Access Your Portfolio**
   - Your site will be live at: `https://aashinsurjith-create.github.io`
   - Or use a custom domain if you have one

#### Custom Domain with GitHub Pages:

1. Purchase a domain from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Hostinger

2. Configure DNS Records:
   - Add `A` records pointing to GitHub:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add `CNAME` record: `www.yourdomain.com` → `aashinsurjith-create.github.io`

3. In Repository Settings > Pages:
   - Add your custom domain
   - Enable HTTPS

---

### Option 2: Netlify (FREE + Advanced Features)

Netlify offers better build tools and easy continuous deployment.

#### Steps:

1. **Create Netlify Account**
   - Sign up at https://netlify.com
   - Connect your GitHub account

2. **Deploy Your Repository**
   - Click "New site from Git"
   - Select GitHub
   - Choose your portfolio repository
   - Build command: (leave empty for static sites)
   - Publish directory: (leave as is)
   - Click "Deploy site"

3. **Configure Custom Domain**
   - Go to Site Settings > Domain Management
   - Add custom domain
   - Update DNS records with Netlify's nameservers

#### Enable Continuous Deployment:
- Any push to main branch automatically redeploys your site
- No manual deployment needed!

#### Contact Form Integration (Optional):

Add Netlify Forms functionality:

```html
<form name="contact" method="POST" netlify>
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <input type="text" name="subject" placeholder="Subject">
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

---

### Option 3: Vercel (FREE)

Similar to Netlify, with excellent performance.

#### Steps:

1. **Sign Up**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your portfolio repository
   - Configure project settings
   - Click "Deploy"

3. **Custom Domain**
   - Go to Project Settings > Domains
   - Add your domain
   - Follow DNS configuration

---

### Option 4: Traditional Web Hosting

For more control and additional features.

#### Popular Options:
- Bluehost ($2.95/month)
- SiteGround ($2.99/month)
- Hostinger ($2.99/month)
- DreamHost ($2.59/month)

#### Steps:

1. **Purchase Hosting Plan**
   - Choose a hosting provider
   - Purchase domain + hosting

2. **Upload Files**
   - Connect via FTP or File Manager
   - Upload all portfolio files to `public_html` folder

3. **Set Up Email (Optional)**
   - Configure email accounts
   - Update contact form to send emails

---

### Option 5: AWS S3 + CloudFront (Enterprise)

For large-scale deployments with CDN and advanced features.

#### Steps:

1. **Create S3 Bucket**
   ```bash
   aws s3api create-bucket --bucket aashin-portfolio --region us-east-1
   ```

2. **Enable Static Website Hosting**
   - Bucket Settings > Static website hosting
   - Index document: index.html

3. **Upload Files**
   ```bash
   aws s3 sync . s3://aashin-portfolio
   ```

4. **Set Up CloudFront**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Associate custom domain

---

## 🔧 Pre-Deployment Checklist

- [ ] All links are working correctly
- [ ] Resume PDF is included and accessible
- [ ] Social media links are correct
- [ ] Contact email is up-to-date
- [ ] No console errors in browser DevTools
- [ ] Website is responsive on mobile devices
- [ ] All images load properly
- [ ] Navigation menu works on mobile
- [ ] Forms submit without errors
- [ ] Page loads quickly (< 3 seconds)

---

## 📊 Post-Deployment Setup

### 1. **Analytics**

Add Google Analytics:

```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. **SEO Optimization**

Update meta tags in index.html:

```html
<meta name="description" content="Portfolio of Aashin Surjith Thampi - Full-Stack Developer and AI Enthusiast">
<meta name="keywords" content="developer, portfolio, web development, AI, IoT">
<meta name="author" content="Aashin Surjith Thampi">
<meta property="og:title" content="Aashin Surjith Thampi - Portfolio">
<meta property="og:description" content="Full-Stack Developer & AI Enthusiast">
<meta property="og:image" content="https://your-domain.com/og-image.png">
```

### 3. **Performance Optimization**

- Enable GZIP compression
- Minify CSS and JavaScript
- Optimize images
- Enable caching

### 4. **Security**

- Enable HTTPS (automatic on most platforms)
- Set security headers
- Enable HSTS

---

## 🆚 Comparison Chart

| Platform | Cost | Setup | Custom Domain | CDN | SSL | Analytics |
|----------|------|-------|----------------|-----|-----|-----------|
| GitHub Pages | FREE | Easy | Yes | Yes | Yes | No |
| Netlify | FREE/Paid | Very Easy | Yes | Yes | Yes | Yes |
| Vercel | FREE/Paid | Very Easy | Yes | Yes | Yes | Yes |
| Traditional Hosting | $2.99+/mo | Moderate | Yes | No* | Yes | Yes |
| AWS S3 + CloudFront | $1-5/mo | Complex | Yes | Yes | Yes | Yes |

---

## 📱 Testing Before Deployment

### Local Testing

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using Ruby
ruby -run -ehttpd . -p8000
```

Visit http://localhost:8000

### Browser Testing Checklist

- [ ] Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Tablet (iPad, Android tablets)
- [ ] Mobile (iPhone, Android phones)
- [ ] Mobile menu functionality
- [ ] Form submission
- [ ] External links
- [ ] Download links (Resume)

### Tools

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🆘 Troubleshooting

### Images Not Loading
- Check image file paths
- Ensure images are in the correct directory
- Use relative paths

### CSS/JS Not Loading
- Verify file names are correct
- Check file paths in HTML
- Clear browser cache (Ctrl+Shift+R)

### Contact Form Not Working
- Verify form handler is configured
- Check browser console for errors
- Ensure form fields have correct names

### Slow Loading
- Optimize images (compress)
- Minify CSS and JavaScript
- Enable browser caching
- Use CDN

### Mobile Menu Not Working
- Check JavaScript is loading
- Verify CSS media queries
- Test in actual mobile browser

---

## 🔄 Continuous Integration/Deployment

### Set Up Auto-Deploy with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
```

---

## 📈 After Deployment

1. **Monitor Analytics**
   - Track visitor behavior
   - Monitor page performance

2. **Collect Feedback**
   - Get user feedback
   - Fix reported issues
   - Improve based on analytics

3. **Keep Updated**
   - Update projects regularly
   - Keep content fresh
   - Fix broken links
   - Update social links

4. **Promotion**
   - Share on LinkedIn
   - Share on GitHub
   - Include in email signature
   - Share with recruiters

---

## 🎓 Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [MDN Web Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)

---

**Last Updated**: June 2026
**Version**: 1.0.0

Choose the deployment option that best fits your needs. GitHub Pages is recommended for getting started quickly!
