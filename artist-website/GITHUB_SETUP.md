# How to Connect MALAIKA Website to GitHub

This guide will walk you through connecting your project to GitHub step by step.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Initialize Git Repository

Open your terminal in the project directory and run:

```bash
cd /Users/elias.safo/IdeaProjects/ArtistWebsite/artist-website
git init
```

### Step 2: Add All Files to Git

```bash
git add .
git commit -m "Initial commit: MALAIKA artist website"
```

### Step 3: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** button (top right) → **"New repository"**
3. Repository name: `malaika-website` (or your preferred name)
4. Description: `Official website for MALAIKA - Electronic music artist`
5. **Keep it Private** (or Public if you want)
6. **DO NOT** check "Initialize with README" (you already have files)
7. Click **"Create repository"**

### Step 4: Connect Local Project to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/malaika-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

---

## 📋 Detailed Instructions

### If You Don't Have Git Installed

**Check if Git is installed:**
```bash
git --version
```

**If not installed:**
- **macOS**: Install Xcode Command Line Tools:
  ```bash
  xcode-select --install
  ```
- Or download from: https://git-scm.com/downloads

### Creating Your First Commit

```bash
# Navigate to project
cd /Users/elias.safo/IdeaProjects/ArtistWebsite/artist-website

# Initialize Git (if not done)
git init

# Check status
git status

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: MALAIKA artist website with React, TypeScript, and TailwindCSS"
```

### Connecting to GitHub Repository

**Option 1: HTTPS (Easier for beginners)**
```bash
git remote add origin https://github.com/YOUR_USERNAME/malaika-website.git
git push -u origin main
```

You'll be prompted for your GitHub username and password (or personal access token).

**Option 2: SSH (More secure, one-time setup)**

First, set up SSH keys (if you haven't):
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub
```

Add the SSH key to GitHub:
1. Go to GitHub → Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your public key

Then use SSH URL:
```bash
git remote add origin git@github.com:YOUR_USERNAME/malaika-website.git
git push -u origin main
```

---

## 🔄 Daily Git Workflow

After making changes to your code:

```bash
# See what changed
git status

# Add changes
git add .

# Commit with message
git commit -m "Update tour dates and add new merch items"

# Push to GitHub
git push
```

### Common Git Commands

```bash
# See commit history
git log --oneline

# Discard local changes
git checkout -- filename.tsx

# Create a new branch
git checkout -b feature/new-design

# Switch branches
git checkout main

# Pull latest changes
git pull
```

---

## 🌐 Deploy to Netlify (Free Hosting)

Once your code is on GitHub, deploy it for free:

### Step 1: Build Your Site
```bash
npm run build
```

### Step 2: Deploy to Netlify

**Method 1: Netlify UI (Recommended)**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub**
5. Select your `malaika-website` repository
6. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **"Deploy site"**

**Method 2: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

### Step 3: Custom Domain (Optional)

In Netlify dashboard:
1. Go to **Domain settings**
2. Add custom domain: `malaikamusic.com`
3. Follow DNS setup instructions

---

## 🎨 Enable CMS Admin Panel (After Deploying)

Once deployed to Netlify:

### 1. Enable Netlify Identity
- Netlify dashboard → **Identity** tab
- Click **"Enable Identity"**
- **Settings** → **Registration** → Set to **"Invite only"**

### 2. Enable Git Gateway
- **Identity** → **Services** → **Git Gateway**
- Click **"Enable Git Gateway"**

### 3. Add Identity Widget to Site

This is already done! Check `index.html` - we'll add the script there.

### 4. Invite MALAIKA
- **Identity** tab → **"Invite users"**
- Enter her email
- She'll receive an invite to set a password

### 5. Access Admin Panel
- Visit: `https://your-site.netlify.app/admin`
- Login with email/password
- Start managing content!

---

## 🔒 Important: Environment Variables

If you add API keys later, use Netlify environment variables:

1. Netlify dashboard → **Site settings** → **Environment variables**
2. Add your keys (never commit them to Git!)
3. Access in code via `import.meta.env.VITE_API_KEY`

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Code is on GitHub
- [ ] Site is live on Netlify
- [ ] Custom domain works (if using)
- [ ] Admin panel accessible at `/admin`
- [ ] MALAIKA can login to CMS
- [ ] Changes in CMS trigger auto-deploy

---

## 🆘 Troubleshooting

### "Permission denied" when pushing
- You need to authenticate with GitHub
- Use personal access token instead of password
- Or set up SSH keys (see above)

### "Git is not recognized"
- Install Git: https://git-scm.com/downloads
- Restart terminal after installation

### Netlify build fails
- Check build command: `npm run build`
- Check publish directory: `dist`
- Look at deploy logs for errors

### CMS not working
- Make sure Netlify Identity is enabled
- Make sure Git Gateway is enabled
- Check `/admin` is accessible
- Clear browser cache

---

## 📚 Useful Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Decap CMS Docs](https://decapcms.org/docs/)

---

## 🎯 Next Steps

1. ✅ Connect to GitHub (follow steps above)
2. ✅ Deploy to Netlify
3. ✅ Enable CMS
4. ✅ Invite MALAIKA
5. ✅ Share the admin URL with her
6. 🎉 She can now manage the website!

---

Need help? Just ask! 🚀

