# NPM Commands Cheat Sheet

## 🚀 Development

```bash
# Install all dependencies
npm install

# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 📦 Package Management

```bash
# Add a new dependency
npm install package-name

# Add a dev dependency
npm install --save-dev package-name

# Remove a dependency
npm uninstall package-name

# Update all dependencies
npm update

# Check for outdated packages
npm outdated
```

## 🧹 Cleanup

```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear npm cache (if having issues)
npm cache clean --force
```

## 🔍 Troubleshooting

If you encounter issues:

1. Make sure you have Node.js 16+ installed:
   ```bash
   node --version
   ```

2. Clear cache and reinstall:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Check for port conflicts:
   - Default port is 5173
   - If busy, Vite will use next available port

## 🎯 Quick Start

```bash
cd artist-website
npm install
npm run dev
```

Then open http://localhost:5173 in your browser!

