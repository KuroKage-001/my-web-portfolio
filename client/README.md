# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and React Router DOM. Features dark mode support, accessible design, and a clean, professional interface perfect for showcasing your work as a developer.

## ✨ Features

- **Responsive Design**: Mobile-first approach that works seamlessly on all devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Accessible**: WCAG 2.1 Level AA compliant with keyboard navigation and screen reader support
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Modern Stack**: React 18+ with functional components and hooks
- **Client-Side Routing**: Smooth navigation with React Router DOM
- **Project Filtering**: Filter projects by technology tags
- **Contact Form**: Validated contact form with success/error states

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite 5+
- **Styling**: Tailwind CSS 3+
- **Routing**: React Router DOM 6+
- **State Management**: React Context API
- **Code Quality**: ESLint

## 📁 Project Structure

```
client/
├── src/
│   ├── assets/
│   │   └── images/          # Image assets
│   ├── components/          # Reusable UI components
│   │   ├── Nav.jsx          # Navigation with mobile menu
│   │   ├── Hero.jsx         # Hero section component
│   │   ├── ProjectCard.jsx  # Project display card
│   │   ├── ContactForm.jsx  # Contact form with validation
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── Button.jsx       # Reusable button component
│   │   └── ThemeToggle.jsx  # Dark/light mode toggle
│   ├── context/
│   │   └── ThemeContext.jsx # Theme state management
│   ├── hooks/
│   │   ├── useForm.js       # Form state and validation hook
│   │   └── useFetch.js      # Data fetching hook
│   ├── layouts/
│   │   └── MainLayout.jsx   # Main layout wrapper
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   ├── Projects.jsx     # Projects page with filtering
│   │   └── Contact.jsx      # Contact page
│   ├── utils/
│   │   └── projectsData.js  # Sample project data
│   ├── App.jsx              # Main app with routes
│   ├── index.css            # Global styles and Tailwind
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/` directory)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Update Personal Information

1. **Portfolio Content**: Edit the placeholder content in the page components:
   - `src/pages/Home.jsx` - Update name, role, and tagline
   - `src/pages/About.jsx` - Update bio, skills, and timeline
   - `src/pages/Contact.jsx` - Update email and phone number

2. **Projects**: Edit `src/utils/projectsData.js` to add your own projects:
```javascript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Project description',
  tags: ['React', 'Tailwind', 'JavaScript'],
  repoUrl: 'https://github.com/username/repo',
  liveUrl: 'https://project-demo.com',
  featured: true  // Show on home page
}
```

3. **Social Links**: Update social media links in `src/components/Footer.jsx`

4. **Theme Colors**: Customize colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

### Add Images

1. Place images in `src/assets/images/`
2. Import and use in components:
```javascript
import myImage from '../assets/images/my-image.jpg'
<img src={myImage} alt="Description" loading="lazy" />
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
6. Click "Deploy site"

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist/` directory contains your production-ready files
3. Upload the contents to any static hosting service (GitHub Pages, AWS S3, etc.)

## ♿ Accessibility Features

- Semantic HTML elements throughout
- Skip-to-content link for keyboard navigation
- Visible focus indicators on all interactive elements
- ARIA labels where appropriate
- Sufficient color contrast in both light and dark modes
- Keyboard navigation support
- Lazy loading for images

## 🎯 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

Your Name - your@email.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

Built with ❤️ using React, Vite, and Tailwind CSS
