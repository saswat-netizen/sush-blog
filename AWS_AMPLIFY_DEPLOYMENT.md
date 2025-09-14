# Deploy Sush Blog to AWS Amplify

This guide will walk you through deploying your Next.js blog to AWS Amplify.

## Prerequisites

- AWS Account
- GitHub/GitLab repository with your code
- AWS CLI installed (optional)

## Method 1: Deploy via AWS Amplify Console (Recommended)

### Step 1: Push Code to Repository

1. Initialize git repository:
```bash
cd sush-blog
git init
git add .
git commit -m "Initial commit: Sush Blog Next.js application"
```

2. Push to GitHub:
```bash
git remote add origin https://github.com/yourusername/sush-blog.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Select your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize AWS Amplify to access your repositories
5. Select your `sush-blog` repository
6. Choose the `main` branch

### Step 3: Configure Build Settings

Amplify will auto-detect Next.js. Verify the build configuration:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### Step 4: Environment Variables (if needed)

Add any environment variables in the Amplify console:
- Go to **App settings** → **Environment variables**
- Add variables like `NEXT_PUBLIC_API_URL` if needed

### Step 5: Deploy

1. Click **"Save and deploy"**
2. Wait for the build to complete (usually 2-5 minutes)
3. Your app will be available at: `https://main.d1234567890.amplifyapp.com`

## Method 2: Deploy via Amplify CLI

### Step 1: Install Amplify CLI

```bash
npm install -g @aws-amplify/cli
```

### Step 2: Configure AWS Credentials

```bash
amplify configure
```

Follow the prompts to set up your AWS credentials.

### Step 3: Initialize Amplify

```bash
cd sush-blog
amplify init
```

Configuration options:
- **Project name**: `sushblog`
- **Environment name**: `prod`
- **Default editor**: Your preferred editor
- **App type**: `javascript`
- **Framework**: `react`
- **Source directory**: `src`
- **Build directory**: `.next`
- **Build command**: `npm run build`
- **Start command**: `npm run start`

### Step 4: Add Hosting

```bash
amplify add hosting
```

Choose:
- **Select the plugin module**: `Hosting with Amplify Console`
- **Choose a type**: `Manual deployment`

### Step 5: Deploy

```bash
amplify publish
```

## Custom Domain Setup

### Step 1: Add Custom Domain

1. In Amplify Console, go to **Domain management**
2. Click **"Add domain"**
3. Enter your domain (e.g., `sushblog.com`)
4. Configure DNS settings as instructed

### Step 2: SSL Certificate

Amplify automatically provisions SSL certificates for your domain.

## Build Optimization

### Next.js Configuration

Update `next.config.js` for Amplify:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Package.json Scripts

Ensure your `package.json` has the correct scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  }
}
```

## Environment Variables

For production, you might need:

```bash
# In Amplify Console Environment Variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Monitoring and Analytics

### Enable Amplify Analytics

1. Go to **Analytics** in Amplify Console
2. Enable **Web analytics**
3. View traffic, performance, and user behavior

### Performance Monitoring

- **Build times**: Monitor in Amplify Console
- **Core Web Vitals**: Available in Analytics
- **Error tracking**: Set up CloudWatch integration

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are in `package.json`
   - Review build logs in Amplify Console

2. **Routing Issues**:
   - Ensure `trailingSlash: true` in `next.config.js`
   - Check dynamic routes configuration

3. **Static Assets**:
   - Use `next/image` with `unoptimized: true`
   - Verify public folder structure

### Build Commands Debug

If build fails, try locally:

```bash
npm ci
npm run build
```

## Cost Optimization

- **Free Tier**: 1000 build minutes/month, 15GB served/month
- **Pricing**: $0.01 per build minute, $0.15 per GB served
- **Optimization**: Use caching, optimize images, minimize bundle size

## Security Best Practices

1. **Environment Variables**: Never commit secrets to Git
2. **HTTPS**: Always enabled by default on Amplify
3. **Headers**: Configure security headers in `next.config.js`
4. **Dependencies**: Regularly update packages

## Continuous Deployment

Amplify automatically deploys when you push to your connected branch:

1. **Push changes**: `git push origin main`
2. **Auto-build**: Amplify detects changes and builds
3. **Deploy**: Automatic deployment after successful build
4. **Notifications**: Set up SNS for build status

## Rollback Strategy

If deployment fails:

1. Go to **Deployments** in Amplify Console
2. Find previous successful deployment
3. Click **"Promote to main"** to rollback

## Next Steps

After deployment:

1. **Custom Domain**: Set up your domain
2. **Analytics**: Monitor traffic and performance
3. **SEO**: Submit sitemap to search engines
4. **Content**: Add more blog posts
5. **Features**: Implement comments, search, etc.

Your Sush Blog is now live on AWS Amplify! 🚀