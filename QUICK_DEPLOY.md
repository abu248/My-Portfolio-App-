# 🚀 Quick Deploy Guide - Get Your Site Online in 5 Minutes!

## Easiest Method: Vercel (Recommended)

### Step 1: Create GitHub Account & Repository
1. Go to [github.com](https://github.com) and sign up (free)
2. Click the "+" icon → "New repository"
3. Name it: `portfolio-website`
4. Click "Create repository"

### Step 2: Upload Your Code to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download [GitHub Desktop](https://desktop.github.com)
2. Install and sign in
3. File → Add Local Repository → Select your `Portfolio-App` folder
4. Commit and push to GitHub

**Option B: Using Command Line**
Open terminal/PowerShell in your `Portfolio-App` folder and run:
```bash
git init
git add .
git commit -m "My portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your GitHub username)*

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Choose "Continue with GitHub"
3. Click "Add New Project"
4. Find and select your `portfolio-website` repository
5. Click "Deploy" (Vercel auto-detects Vite settings)
6. Wait 1-2 minutes... ✨ **Your site is live!**

### Step 4: Get Your URL
- Vercel will show your live URL: `https://your-project.vercel.app`
- Share this URL with anyone!
- Every time you push updates to GitHub, Vercel automatically updates your site

---

## Alternative: Netlify (Just as Easy)

1. Push code to GitHub (same as Step 1-2 above)
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. "Add new site" → "Import an existing project"
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"
8. Done! Your URL: `https://your-project.netlify.app`

---

## That's It! 🎉

Your portfolio is now online and accessible to anyone with your URL!

**Pro Tips:**
- Both platforms are completely FREE
- You can customize the URL in project settings
- You can add your own domain name later (also free)
- Updates happen automatically when you push to GitHub

---

## Need to Update Your Site Later?

1. Make changes to your code
2. Push to GitHub (same as Step 2)
3. Your site updates automatically! (No extra steps needed)

Questions? Check the full `DEPLOYMENT.md` guide for more details.

