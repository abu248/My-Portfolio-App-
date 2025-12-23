# Modern Portfolio Website

A beautiful, modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, glassmorphism effects, and a fully responsive design.

## Features

- 🎨 Modern UI/UX design with glassmorphism effects
- ✨ Smooth animations and transitions using Framer Motion
- 📱 Fully responsive design for all devices
- 🎯 Clean and semantic code structure
- ⚡ Fast performance with Vite
- 🌈 Beautiful gradient backgrounds and effects
- 🚀 Easy to customize and extend

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Portfolio-App
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):
   - Update the about text
   - Modify statistics and features

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Adjust skill levels (percentage)

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update project details, links, and tags

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Modify social media links
   - Connect form to your backend service

### Styling

- Colors: Edit `tailwind.config.js` to customize the color scheme
- Global styles: Modify `src/index.css`
- Component styles: Each component uses Tailwind classes for easy customization

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Deploy Online (FREE)

Want to share your portfolio online? Deploy it for free! 

**Quickest Method:**
1. Push your code to GitHub
2. Sign up at [Vercel.com](https://vercel.com) (free)
3. Connect your GitHub repository
4. Click Deploy - Your site goes live in 2 minutes! 🚀

📖 **Full deployment guide**: See `DEPLOYMENT.md` for detailed instructions  
⚡ **Quick start**: See `QUICK_DEPLOY.md` for the fastest method

Your site will have a URL like: `https://your-portfolio.vercel.app`

## Project Structure

```
Portfolio-App/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## License

MIT License - feel free to use this project for your own portfolio!

