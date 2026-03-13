# NOVA - Artist Website

A production-ready, modern artist website built with React, TypeScript, and TailwindCSS.

## 🚀 Features

- **Multi-page site** with Home, Music, Tour, Merch, About, and Contact pages
- **Responsive design** - mobile-first approach, works on all devices
- **Dark theme** with custom color scheme
- **Accessible** - keyboard navigation, ARIA labels, focus states
- **Shopping cart** with localStorage persistence
- **Tour date management** with upcoming/past filter
- **Music discography** with streaming links and filters
- **Contact form** with validation
- **Smooth scrolling** and animations
- **SEO-friendly** with dynamic page titles

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **TailwindCSS** - Styling
- **No backend required** - Pure static site with mock data

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 16+ and npm

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd artist-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit `http://localhost:5173` (or the URL shown in terminal)

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization Guide

### Change Artist Name & Branding

**Global Brand Name:**
- Update `NOVA` in `index.html` (title tag)
- Update logo text in `src/components/Navbar.tsx`
- Update footer text in `src/components/Footer.tsx`
- Update hero section in `src/pages/Home.tsx`

**Colors:**
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#8b5cf6', // Your brand color
    dark: '#7c3aed',
    light: '#a78bfa',
  },
}
```

### Update Content

**Music/Releases:**
- Edit `src/data/music.ts`
- Add/remove releases, update cover art URLs, streaming links

**Tour Dates:**
- Edit `src/data/tour.ts`
- Add new dates, venues, ticket links

**Merchandise:**
- Edit `src/data/merch.ts`
- Add products, prices, images, sizes

**Social Links:**
- Edit `src/data/socials.ts`
- Update URLs to your social media profiles

**About Page:**
- Edit `src/pages/About.tsx`
- Update bio, stats, press kit link

**Contact Info:**
- Edit `src/pages/Contact.tsx`
- Update email addresses, management info

### Replace Images

All placeholder images use Unsplash. Replace with your own:

1. Add images to `public/` folder
2. Update image paths in:
   - `src/data/music.ts` (album covers)
   - `src/data/merch.ts` (product images)
   - `src/pages/About.tsx` (press photos)
   - `src/pages/Home.tsx` (featured video)

### Add Press Kit PDF

1. Add your PDF file to `public/press-kit.pdf`
2. The download link in About page will work automatically

## 📁 Project Structure

```
artist-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── Footer.tsx
│   │   ├── MerchItemCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── ReleaseCard.tsx
│   │   ├── SectionTitle.tsx
│   │   └── TourDateRow.tsx
│   ├── data/           # Mock data
│   │   ├── merch.ts
│   │   ├── music.ts
│   │   ├── socials.ts
│   │   └── tour.ts
│   ├── hooks/          # Custom React hooks
│   │   ├── useDocumentTitle.ts
│   │   └── useLocalStorage.ts
│   ├── pages/          # Route pages
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Merch.tsx
│   │   ├── Music.tsx
│   │   └── Tour.tsx
│   ├── types/          # TypeScript types
│   │   └── index.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Key Features Explained

### Shopping Cart
- Persists in localStorage
- Supports size selection
- Quantity controls
- Mock checkout flow (opens external URL)

### Tour Dates
- Auto-filters upcoming vs past based on current date
- Sold out badge support
- Responsive date display

### Music Page
- Filter by release type (Album/Single/EP)
- Links to Spotify, Apple Music, YouTube
- Tracklist display for albums

### Contact Form
- Client-side validation
- Success/error states
- Keyboard accessible

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy Options

**Vercel (Recommended):**
1. Push to GitHub
2. Import project on Vercel
3. Deploy automatically

**Netlify:**
1. Push to GitHub
2. Import project on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

**GitHub Pages:**
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Alt text on images
- Form validation with error messages

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues:
- Open an issue on GitHub
- Contact: info@novamusic.com (update with your email)

## 🎵 Happy Building!

Created with ❤️ for artists who want a stunning web presence.

