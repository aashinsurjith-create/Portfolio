# How to Host Your Portfolio on Vercel

Vercel is a modern hosting platform perfect for deploying static websites and web applications. Follow these steps to deploy your cyberpunk portfolio.

## Step 1: Prepare Your Project

Your portfolio is already ready! Make sure you have:
- ✅ `index-cyberpunk.html`
- ✅ `styles-cyberpunk.css`
- ✅ `script-cyberpunk.js`
- ✅ `resume.html`

## Step 2: Create a Git Repository (if not already done)

Open PowerShell in your portfolio folder and run:

```powershell
cd "c:\Users\Aashin C\Portfolio"
git init
git add .
git commit -m "Initial cyberpunk portfolio commit"
```

## Step 3: Push to GitHub

1. Go to [GitHub.com](https://github.com)
2. Sign in or create an account
3. Click **New Repository**
4. Name it `portfolio` (or any name you prefer)
5. Copy the commands shown and run in PowerShell:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [Vercel.com](https://vercel.com)
2. Click **Sign Up** or **Sign In**
3. Choose **GitHub** as your login method
4. Click **Import Project**
5. Find your `portfolio` repository
6. Click **Import**
7. In the configuration:
   - **Framework Preset**: Select `Other` (since it's a static site)
   - **Root Directory**: Leave as default
   - Click **Deploy**

**That's it!** Vercel will give you a live URL like: `https://your-portfolio-vercel.app`

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```powershell
npm install -g vercel
```

2. Deploy from your portfolio folder:
```powershell
cd "c:\Users\Aashin C\Portfolio"
vercel
```

3. Follow the prompts:
   - Link to Vercel account
   - Select project name
   - Confirm settings
   - Deploy

## Step 5: Configure Your Domain (Optional)

### Using a Custom Domain

1. In Vercel Dashboard, go to your project
2. Click **Settings**
3. Go to **Domains**
4. Add your custom domain (e.g., `aashin.dev`)
5. Follow DNS configuration instructions

### Free Alternative - Use Vercel's Subdomain

Your site will automatically get a free `.vercel.app` domain.

## Step 6: Set Up Auto-Deployments

Vercel automatically deploys when you push to GitHub:

```powershell
# Make changes to your files
git add .
git commit -m "Update portfolio"
git push origin main
```

Your website updates automatically within seconds!

## Step 7: Continuous Updates

Whenever you want to update your portfolio:

1. **Edit your files** locally
2. **Commit and push to GitHub**:
```powershell
git add .
git commit -m "Your update message"
git push
```
3. **Vercel automatically deploys** the new version

## Troubleshooting

### Issue: Files not found
- Make sure all CSS and JS files are in the same folder
- Check that file paths are correct (use `styles-cyberpunk.css` not `/styles-cyberpunk.css`)

### Issue: Styles not loading
- Verify file names match exactly (case-sensitive)
- Check browser console for 404 errors

### Issue: Can't push to GitHub
- Run: `git config --global user.name "Your Name"`
- Run: `git config --global user.email "your@email.com"`
- Try pushing again

## Environment Setup Summary

Before deploying, ensure you have:
- ✅ Git installed (check: `git --version`)
- ✅ Node.js installed (check: `node --version`)
- ✅ GitHub account
- ✅ Vercel account

## Quick Deploy Checklist

- [ ] All files in one folder
- [ ] Git repository initialized
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Repository linked to Vercel
- [ ] Deployment complete
- [ ] Visit your live URL

## Your Deployment Command Summary

```powershell
# 1. Navigate to portfolio folder
cd "c:\Users\Aashin C\Portfolio"

# 2. Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# 3. Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main

# 4. Deploy with Vercel CLI (alternative to dashboard)
vercel
```

## Next Steps

1. **Get GitHub**: https://github.com
2. **Get Vercel**: https://vercel.com
3. **Watch Tutorial**: Search "Deploy static site to Vercel" on YouTube
4. **Get Custom Domain**: Use Namecheap or GoDaddy for domains

## Your Live URLs Will Be

- **Vercel Default**: `https://portfolio-RANDOMID.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if you add one)
- **GitHub Pages**: Alternative option at `https://USERNAME.github.io/portfolio`

## Support

- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Contact Vercel Support: https://vercel.com/support

---

**Congratulations!** Your portfolio will be live for the world to see! 🚀