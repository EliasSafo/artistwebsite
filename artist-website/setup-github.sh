#!/bin/bash

# MALAIKA Website - GitHub Setup Script
# This script will help you connect your project to GitHub

echo "🎵 MALAIKA Website - GitHub Setup"
echo "=================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null
then
    echo "❌ Git is not installed!"
    echo "Please install Git first:"
    echo "  macOS: xcode-select --install"
    echo "  Or visit: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed: $(git --version)"
echo ""

# Check if already a git repository
if [ -d .git ]; then
    echo "⚠️  This is already a Git repository."
    echo ""

    # Check if remote exists
    if git remote -v | grep -q origin; then
        echo "📡 Current remote:"
        git remote -v
        echo ""
        echo "Already connected to GitHub!"
        exit 0
    else
        echo "No remote configured yet."
        echo ""
    fi
else
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
    echo ""
fi

# Create initial commit if needed
if ! git log &> /dev/null; then
    echo "📝 Creating initial commit..."
    git add .
    git commit -m "Initial commit: MALAIKA artist website"
    echo "✅ Initial commit created"
    echo ""
fi

# Rename branch to main if needed
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🔄 Renaming branch to 'main'..."
    git branch -M main
    echo "✅ Branch renamed to 'main'"
    echo ""
fi

echo "🎉 Git setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Create a new repository on GitHub:"
echo "   → Go to https://github.com/new"
echo "   → Name: malaika-website"
echo "   → Don't initialize with README"
echo ""
echo "2. Connect to GitHub (replace YOUR_USERNAME):"
echo "   git remote add origin https://github.com/YOUR_USERNAME/malaika-website.git"
echo "   git push -u origin main"
echo ""
echo "3. Or use SSH:"
echo "   git remote add origin git@github.com:YOUR_USERNAME/malaika-website.git"
echo "   git push -u origin main"
echo ""
echo "📖 For detailed instructions, see GITHUB_SETUP.md"

