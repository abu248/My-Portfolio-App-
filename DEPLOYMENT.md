# Deployment Guide - Free Hosting Options

This guide will show you how to deploy your portfolio website online for free using various platforms.

## Option 1: Vercel (Recommended - Easiest) ⭐

Vercel is the easiest and fastest way to deploy your Vite React app.

### Steps:

1. **Build your project first** (test locally):
   ```bash
   npm run build
   ```

2. **Create a GitHub account** (if you don't have one):
   - Go to [github.com](https://github.com) and sign up

3. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

4. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Vite settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes! 🚀

5. **Your website URL**:
   - Vercel will give you a URL like: `https://your-project-name.vercel.app`
   - You can customize the domain name in project settings

---

## Option 2: Netlify

Netlify is another excellent free hosting option.

### Steps:

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Push to GitHub** (same as Vercel steps 2-3)

3. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Your site will be live! 🎉

4. **Your website URL**:
   - Netlify gives you a URL like: `https://random-name-123456.netlify.app`
   - You can customize it in Site settings → Domain management

---

## Option 3: GitHub Pages (Free, No Sign-ups Needed)

If you already use GitHub, you can host directly on GitHub Pages.

### Steps:

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add these lines:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js**:
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/portfolio-website/' // Replace with your repo name
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your GitHub repository
   - Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at: `https://YOUR_USERNAME.github.io/portfolio-website`

---

## Option 4: Cloudflare Pages

Cloudflare Pages offers fast global CDN.

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Cloudflare Pages**:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up/login with GitHub
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"
   - Done! Your site is live! ✨

---

## Option 5: Render

Render offers free static site hosting.

### Steps:

1. **Push to GitHub**

2. **Deploy on Render**:
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New" → "Static Site"
   - Connect your repository
   - Settings:
     - Build Command: `npm run build`
     - Publish Directory: `dist`
   - Click "Create Static Site"
   - Your site will be live!

---

## Quick Comparison

| Platform | Ease of Use | Speed | Custom Domain | Best For |
|----------|------------|-------|---------------|----------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ⚡⚡⚡⚡⚡ | Free | **Recommended** |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⚡⚡⚡⚡ | Free | Great alternative |
| **GitHub Pages** | ⭐⭐⭐ | ⚡⚡⚡ | Custom (paid) | GitHub users |
| **Cloudflare Pages** | ⭐⭐⭐⭐ | ⚡⚡⚡⚡⚡ | Free | Performance-focused |
| **Render** | ⭐⭐⭐⭐ | ⚡⚡⚡⚡ | Free | General purpose |

## Recommended: Start with Vercel! 🚀

Vercel is the easiest and most developer-friendly option. It:
- Auto-detects Vite projects
- Provides instant deployments
- Has a free custom domain
- Includes automatic HTTPS
- Updates on every git push

## Important Notes

- All platforms offer free tiers with generous limits
- Your site will have a URL like: `your-project.vercel.app` or `your-project.netlify.app`
- You can add a custom domain later (most platforms offer this for free)
- Updates are automatic when you push to GitHub

## Need Help?

If you get stuck, the documentation for each platform is excellent:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://pages.github.com)

Good luck with your deployment! 🎉

