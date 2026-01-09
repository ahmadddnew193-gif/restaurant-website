# La Bella Cucina - Modern Restaurant Website 🍽️

A beautiful, modern restaurant website built with Astro, React, and TailwindCSS featuring smooth animations, interactive menu, image gallery, and reservation system.

## ✨ Features

- **Hero Section** - Full-screen animated hero with parallax scrolling effect
- **Interactive Menu** - Tabbed menu with categories (Starters, Main Courses, Desserts, Drinks)
- **Image Gallery** - Stunning food photography with hover effects
- **Reservation System** - Complete booking form with date picker
- **Contact Section** - Google Maps integration and contact information
- **Smooth Animations** - Fade-in, slide-up, and hover transitions throughout
- **Responsive Design** - Mobile-first design that works on all devices
- **Warm Color Palette** - Red, orange, and brown tones with elegant typography

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd restaurant-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

### Deploy to GitHub Pages

1. Update `astro.config.mjs` with your site URL
2. Build the project: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

### Deploy to Cloudflare Workers

```bash
npm run preview
```

Then follow Cloudflare's deployment instructions.

### Deploy to Vercel/Netlify

Simply connect your GitHub repository to Vercel or Netlify and they will automatically build and deploy your site.

## 🛠️ Tech Stack

- **Astro 5** - Static site generator
- **React 19** - UI components
- **TailwindCSS 4** - Styling
- **shadcn/ui** - UI component library
- **Lucide React** - Icons
- **date-fns** - Date formatting

## 📁 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   └── RestaurantShowcase.tsx  # Main restaurant component
│   ├── layouts/
│   │   └── main.astro       # Main layout
│   ├── pages/
│   │   └── index.astro      # Home page
│   └── styles/
│       └── global.css       # Global styles & animations
├── generated/
│   ├── fonts.css            # Webflow fonts
│   └── webflow.css          # Webflow design tokens
└── public/                  # Static assets
```

## 🎨 Customization

### Change Restaurant Name
Edit the restaurant name in `src/components/RestaurantShowcase.tsx`:
```tsx
<h1>La Bella Cucina</h1>
```

### Update Menu Items
Modify the `menuItems` object in `RestaurantShowcase.tsx`:
```tsx
const menuItems = {
  starters: [...],
  mains: [...],
  // ... add your items
}
```

### Change Colors
The color scheme uses CSS variables from Webflow. You can override them in `src/styles/global.css` or modify `generated/webflow.css`.

### Update Contact Information
Edit the contact details in the Contact section of `RestaurantShowcase.tsx`.

### Change Google Maps Location
Replace the Google Maps embed URL in the Contact section with your location.

## 📝 License

MIT License - feel free to use this project for your own restaurant!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, email info@labellacucina.com or open an issue on GitHub.

---

Made with ❤️ and ☕ using Astro and React
