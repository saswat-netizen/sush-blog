# Sush Blog

A modern, responsive blog built with Next.js 14, focusing on technology, programming, and digital innovation.

## ✅ **Complete Next.js Blogging Application**

### **🏗️ Project Structure:**
```
sush-blog/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── posts/[slug]/      # Dynamic blog post pages
│   │   ├── about/             # About page
│   │   ├── categories/        # Categories page
│   │   ├── contact/           # Contact page with form
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   └── Footer.tsx         # Site footer
│   └── lib/
│       └── posts.ts           # Blog posts data & utilities
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind CSS config
├── tsconfig.json             # TypeScript config
└── README.md                 # Documentation
```

### **🚀 Key Features:**

1. **Modern Tech Stack:**
   - Next.js 14 with App Router
   - TypeScript for type safety
   - Tailwind CSS for styling
   - Responsive design

2. **Blog Functionality:**
   - Homepage with post listings
   - Dynamic post pages (`/posts/[slug]`)
   - Categories organization
   - Sample blog posts included

3. **Pages Created:**
   - **Homepage**: Featured posts with cards
   - **Post Pages**: Individual blog post view
   - **About**: Personal/blog information
   - **Categories**: Posts organized by category
   - **Contact**: Contact form

4. **Sample Content:**
   - 3 sample blog posts covering:
     - Next.js 14 tutorial
     - AI trends 2024
     - Cloud-native architecture

### **🎨 Design Features:**
- Clean, modern design
- Gradient text effects
- Card-based layouts
- Hover animations
- Mobile responsive
- Professional typography

### **📝 Content Management:**
- Easy post management in `posts.ts`
- Category-based organization
- Author information
- Date sorting
- Excerpt support

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **Static Generation**: Fast loading with Next.js static generation
- **TypeScript**: Full TypeScript support for better development experience
- **Blog Management**: Easy-to-manage blog posts with markdown support
- **Categories**: Organized content by categories
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Contact Form**: Functional contact page with form validation
- **Responsive Layout**: Mobile-first responsive design

## Adding New Posts

1. Add your post data to `src/lib/posts.ts`
2. Include title, excerpt, content, date, category, and author
3. The post will automatically appear on the homepage and category pages

## Customization

- **Styling**: Modify Tailwind classes in components
- **Content**: Update posts in `src/lib/posts.ts`
- **Layout**: Customize components in `src/components/`
- **Pages**: Add new pages in `src/app/`
- **Colors**: Update color scheme in Tailwind config
- **Typography**: Modify font settings in layout

## Deployment

### AWS Amplify (Recommended)

For detailed AWS Amplify deployment instructions, see [AWS_AMPLIFY_DEPLOYMENT.md](./AWS_AMPLIFY_DEPLOYMENT.md)

Quick steps:
1. Push code to GitHub
2. Connect repository to AWS Amplify Console
3. Deploy automatically with built-in CI/CD

### Vercel

Deploy easily on Vercel:

```bash
npm run build
```

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js and static site generation.

## Development

- **Hot Reload**: Automatic page refresh during development
- **TypeScript**: Full type checking and IntelliSense
- **ESLint**: Code linting for better code quality
- **Tailwind**: Utility-first CSS framework

## License

MIT License - feel free to use this project for your own blog!