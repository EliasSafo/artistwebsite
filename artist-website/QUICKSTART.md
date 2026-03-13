# QUICK START GUIDE

## 🚀 Get Started in 3 Steps

1. **Install dependencies:**
   ```bash
   cd artist-website
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - Visit http://localhost:5173
   - The site should load with demo content!

## ✅ What's Included

✨ **6 Complete Pages:**
- Home (Hero, latest release, tour preview, merch preview, video)
- Music (Discography with filters)
- Tour (Upcoming/past dates toggle)
- Merch (Shopping cart with localStorage)
- About (Bio, stats, press kit)
- Contact (Form with validation, contact info)

🎨 **Design System:**
- Reusable components (Button, Card, SectionTitle)
- Responsive mobile-first design
- Dark theme with purple accent
- Smooth animations

🛒 **Features:**
- Working shopping cart
- Form validation
- Keyboard navigation
- SEO-friendly page titles
- Loading skeletons

## 📝 Customize Your Site

### Step 1: Change Artist Name
Search and replace "NOVA" with your artist name in:
- `index.html`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/pages/Home.tsx`

### Step 2: Update Colors
Edit `tailwind.config.js` and change the `primary` color values.

### Step 3: Add Your Content
Edit these data files:
- `src/data/music.ts` - Your releases
- `src/data/tour.ts` - Tour dates
- `src/data/merch.ts` - Products
- `src/data/socials.ts` - Social media links

### Step 4: Update Contact Info
Edit `src/pages/Contact.tsx` with your:
- Email addresses
- Management info
- Booking contact

### Step 5: Replace Images
Add your images to `public/` and update URLs in the data files.

## 🎯 Common Tasks

### Add a new tour date:
Open `src/data/tour.ts` and add to the `tourDates` array:
```typescript
{
  id: 'unique-id',
  date: '2026-06-15',
  city: 'Your City',
  venue: 'Venue Name',
  country: 'Country',
  ticketLink: 'https://tickets.example.com',
}
```

### Add a new release:
Open `src/data/music.ts` and add to the `releases` array.

### Add a new product:
Open `src/data/merch.ts` and add to the `merchItems` array.

## 🚀 Deploy Your Site

When ready to launch:

```bash
npm run build
```

Upload the `dist/` folder to:
- Vercel (easiest)
- Netlify
- GitHub Pages
- Any static hosting

## 💡 Need Help?

Check the full README.md for detailed documentation!

