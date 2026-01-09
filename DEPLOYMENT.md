# 🚀 Deployment Guide

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `restaurant-website` (or your preferred name)
   - **Description**: "Modern restaurant website with interactive menu and reservations"
   - **Visibility**: Choose Public or Private
   - **DON'T** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.**

### Example:
```bash
git remote add origin https://github.com/johndoe/restaurant-website.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy Your Website

You have several hosting options:

### Option A: Cloudflare Pages (Recommended) ⭐

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click **"Create a project"** → **"Connect to Git"**
3. Select your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Astro
5. Click **"Save and Deploy"**
6. Your site will be live at `https://your-project.pages.dev`

### Option B: Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Import Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Astro and configure everything
5. Click **"Deploy"**
6. Your site will be live at `https://your-project.vercel.app`

### Option C: Netlify

1. Go to [Netlify](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose GitHub and select your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**
6. Your site will be live at `https://your-site.netlify.app`

### Option D: GitHub Pages

1. Install the GitHub Pages adapter:
```bash
npm install @astrojs/github-pages
```

2. Update `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME',
  // ... rest of config
});
```

3. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Push to GitHub
5. Go to repo Settings → Pages → Source: gh-pages branch
6. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## 🔧 Troubleshooting

### Issue: "git push" asks for username/password

**Solution**: Use a Personal Access Token (PAT) or SSH key

**Using Personal Access Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate a new token with "repo" permissions
3. Use the token as your password when pushing

**Or use SSH:**
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

### Issue: Build fails on deployment

**Solution**: Check the build logs for errors. Common issues:
- Missing environment variables
- Node version mismatch (ensure Node 18+)
- Missing dependencies

### Issue: Images not loading

**Solution**: Use absolute URLs or properly configured base paths. Update image URLs if needed.

## 📱 Custom Domain

After deploying, you can add a custom domain:

1. Purchase a domain from any registrar (GoDaddy, Namecheap, etc.)
2. In your hosting platform (Vercel/Netlify/Cloudflare), go to Domain settings
3. Add your custom domain
4. Update your domain's DNS records as instructed
5. Wait for DNS propagation (can take 24-48 hours)

## 🎉 You're Done!

Your restaurant website is now live! Share the URL with the world! 🌎

Need help? Open an issue on GitHub or check the hosting platform's documentation.
