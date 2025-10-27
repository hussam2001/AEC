# 🚀 SakanOman Deployment Guide

This guide covers multiple deployment options for your SakanOman application, from beginner-friendly to advanced setups.

## 📋 Pre-Deployment Checklist

Before deploying, ensure your application is ready:

```bash
# Test the build locally
npm run build

# Check for any linting issues
npm run lint

# Test the production build
npm run start
```

---

## 🌟 Option 1: Vercel (Recommended - Easiest)

Vercel offers the best Next.js hosting experience with zero configuration.

### Method A: Using Vercel CLI (Fastest)

1. **Install Vercel CLI** (already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy your app**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your project name (sakanoman)
   - Confirm deployment settings

4. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Method B: Using Vercel Dashboard (GUI)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub, GitLab, or Bitbucket
3. **Connect your repository**:
   - Push your code to GitHub first
   - Import project from your repository
4. **Configure settings**:
   - Framework: Next.js (auto-detected)
   - Build command: `npm run build`
   - Output directory: `.next`
5. **Deploy!** - Automatic deployments on every git push

### ✅ Vercel Benefits:
- Zero configuration for Next.js
- Automatic HTTPS
- Global CDN
- Automatic deployments from Git
- Free tier available
- Perfect for this project

---

## 🔷 Option 2: Netlify (Great Alternative)

### Method A: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**:
   ```bash
   netlify login
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   netlify deploy --prod --dir=.next
   ```

### Method B: Netlify Dashboard

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop** your `.next` folder after running `npm run build`
3. **Or connect** your Git repository for automatic deployments

### ⚙️ Netlify Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🐳 Option 3: Docker Deployment

Great for VPS, cloud servers, or containerized environments.

### Create Docker Files

1. **Create `.dockerignore`**:
   ```
   node_modules
   .next
   .git
   README.md
   Dockerfile
   .dockerignore
   ```

2. **Create `Dockerfile`**:
   ```dockerfile
   FROM node:18-alpine AS base

   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app

   COPY package.json package-lock.json* ./
   RUN npm ci

   # Build the app
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .

   RUN npm run build

   # Production image
   FROM base AS runner
   WORKDIR /app

   ENV NODE_ENV production

   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

   USER nextjs

   EXPOSE 3000

   ENV PORT 3000
   ENV HOSTNAME "0.0.0.0"

   CMD ["node", "server.js"]
   ```

3. **Build and run**:
   ```bash
   docker build -t sakanoman .
   docker run -p 3000:3000 sakanoman
   ```

---

## ☁️ Option 4: Cloud Platforms

### AWS (Amazon Web Services)

1. **AWS Amplify**:
   ```bash
   npm install -g @aws-amplify/cli
   amplify init
   amplify add hosting
   amplify publish
   ```

2. **AWS EC2** with Docker or PM2

### Google Cloud Platform

1. **Google App Engine**:
   - Create `app.yaml`
   - Deploy with `gcloud app deploy`

2. **Google Cloud Run** with Docker

### Microsoft Azure

1. **Azure Static Web Apps**
2. **Azure App Service**

---

## 🖥️ Option 5: VPS/Server Deployment

For your own server or VPS (DigitalOcean, Linode, etc.)

### Using PM2 (Process Manager)

1. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

2. **Create `ecosystem.config.js`**:
   ```javascript
   module.exports = {
     apps: [{
       name: 'sakanoman',
       script: 'npm',
       args: 'start',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   }
   ```

3. **Deploy**:
   ```bash
   npm run build
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

### Using Nginx (Reverse Proxy)

1. **Install Nginx**
2. **Configure Nginx** (`/etc/nginx/sites-available/sakanoman`):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 🔒 Environment Variables

For production, you might need environment variables:

1. **Create `.env.local`** (for local development):
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
   DATABASE_URL=your_database_url
   WHATSAPP_API_KEY=your_whatsapp_api_key
   ```

2. **Set in deployment platform**:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - Docker: Use `-e` flags or `.env` file

---

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

### For Other Platforms:
1. Point your domain's A record to the server IP
2. Set up SSL certificate (Let's Encrypt recommended)

---

## 📈 Quick Start - Recommended Path

For beginners, I recommend this order:

1. **Start with Vercel** (easiest, free, perfect for Next.js)
2. **Try Netlify** as an alternative
3. **Use Docker** if you need more control
4. **Consider VPS** for high-traffic or custom requirements

### Immediate Deployment (2 minutes):

```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial SakanOman deployment"
git branch -M main
git remote add origin https://github.com/yourusername/sakanoman.git
git push -u origin main

# Then deploy with Vercel
vercel
```

---

## 🛠️ Troubleshooting

### Common Issues:

1. **Build fails**:
   ```bash
   npm run build
   # Fix any TypeScript or linting errors
   ```

2. **Environment variables not working**:
   - Ensure they start with `NEXT_PUBLIC_` for client-side
   - Set them in your deployment platform

3. **Images not loading**:
   - Use Next.js Image optimization
   - Configure image domains in `next.config.js`

4. **Routing issues**:
   - Ensure your hosting supports SPA routing
   - Configure redirects for 404s

---

## 📞 Support

If you encounter issues:

1. Check the deployment platform's documentation
2. Review build logs for specific error messages
3. Test locally with `npm run build && npm run start`
4. Ensure all dependencies are properly installed

**Happy Deploying! 🚀**

Your SakanOman application is ready to help people find homes across Oman! 🏠🇴🇲