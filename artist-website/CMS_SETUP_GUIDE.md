# Content Management Guide

## 🎨 CMS Setup Options for MALAIKA

Your website is currently using **static data files** (JSON/TypeScript files). Here are your options for giving MALAIKA easy control over content:

---

## ✅ OPTION 1: Decap CMS (Git-Based) - RECOMMENDED

**What it is:** A free admin panel that saves content to your GitHub repository.

**Perfect for:** Artists who want an easy interface without managing a database.

### Setup Steps:

1. **Deploy to Netlify** (or Vercel):
   ```bash
   npm run build
   # Deploy the dist/ folder to Netlify
   ```

2. **Enable Netlify Identity**:
   - Go to Netlify dashboard → Identity tab
   - Click "Enable Identity"
   - Settings → Registration preferences → "Invite only"

3. **Enable Git Gateway**:
   - Identity tab → Services → Git Gateway → "Enable Git Gateway"

4. **Invite MALAIKA**:
   - Identity tab → "Invite users"
   - Send invite to her email
   - She creates password and can login

5. **Access Admin Panel**:
   - Visit: `https://yoursite.com/admin`
   - Login with email/password
   - Start editing!

### Features:
✅ Add/edit/delete songs, tour dates, merch
✅ Upload images directly
✅ Update bio, contact info, social links
✅ No coding required
✅ All changes saved to Git (version control)
✅ Completely FREE

**Files Created:**
- ✅ `/public/admin/config.yml` - CMS configuration
- ✅ `/public/admin/index.html` - Admin panel

---

## 📱 OPTION 2: Notion/Airtable + API (No Code Backend)

**What it is:** Use Notion or Airtable as a database, fetch data via API.

**Perfect for:** If MALAIKA already uses Notion/Airtable.

### How it works:
1. Create tables in Notion/Airtable for music, tour dates, merch
2. Get API keys
3. Fetch data in your React app
4. MALAIKA edits content in Notion/Airtable

**Pros:**
✅ Familiar interface (if already using Notion)
✅ Mobile app available
✅ Free tier available

**Cons:**
❌ Requires API integration
❌ Need to rebuild/redeploy on changes
❌ More complex setup

---

## 🔥 OPTION 3: Simple JSON Files + GitHub (Current Setup)

**What it is:** MALAIKA edits JSON files directly in GitHub.

**Perfect for:** If she's comfortable with basic text editing.

### How it works:
1. Go to GitHub repository
2. Navigate to `src/data/music.ts` (or merch.ts, tour.ts)
3. Click "Edit" button
4. Make changes
5. Commit → Auto-deploys

**Pros:**
✅ Already set up (nothing to do)
✅ Free forever
✅ Simple
✅ Version control

**Cons:**
❌ Needs to understand JSON format
❌ No rich text editor
❌ No image uploader (must use URLs)

---

## 🚀 OPTION 4: Full Backend (Strapi/Sanity/Contentful)

**What it is:** Dedicated headless CMS with database.

**Perfect for:** Large-scale projects with multiple content editors.

**Popular options:**
- **Sanity.io** - Great for media-heavy sites, free tier
- **Strapi** - Open source, self-hosted
- **Contentful** - Enterprise-grade, generous free tier

**Pros:**
✅ Professional admin panel
✅ Rich media handling
✅ Real-time preview
✅ Advanced features

**Cons:**
❌ Costs money (after free tier)
❌ More complex setup
❌ Requires backend hosting
❌ Overkill for single artist site

---

## 💡 MY RECOMMENDATION

**For MALAIKA, I recommend OPTION 1 (Decap CMS)** because:

1. ✅ **Free forever** - No ongoing costs
2. ✅ **Easy to use** - Beautiful admin panel, no coding
3. ✅ **Safe** - All changes version controlled in Git
4. ✅ **Fast setup** - 10 minutes to configure
5. ✅ **Upload images** - Drag and drop interface
6. ✅ **Mobile friendly** - Can update from phone
7. ✅ **No maintenance** - No backend to manage

### What MALAIKA Can Edit:
- ✅ Add new songs with cover art and streaming links
- ✅ Add/remove tour dates
- ✅ Add/edit merchandise items with photos
- ✅ Update bio and press kit
- ✅ Change contact information
- ✅ Update social media links
- ✅ Upload images for everything

### Admin Panel Preview:
Once set up, she visits `yoursite.com/admin` and sees:
- 📝 Simple forms for each content type
- 🖼️ Image upload with preview
- 📅 Calendar picker for dates
- 💾 Save/Publish buttons
- 👁️ Preview before publishing

---

## 📋 Next Steps

**To implement Decap CMS:**

1. I've already created the config files
2. You need to:
   - Deploy to Netlify (free)
   - Enable Netlify Identity
   - Invite MALAIKA
3. Total setup time: ~10 minutes
4. She can start editing immediately

**Want me to:**
- [ ] Set up the content migration (convert current data to CMS format)?
- [ ] Create a detailed setup guide with screenshots?
- [ ] Set up a different CMS option instead?

Let me know which direction you'd like to go!

