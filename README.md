# Build Clarity Website

A modern, high-converting website for Build Clarity - a pre-purchase renovation consulting service based in Knutsford, UK.

## Features

- **Modern Design**: Clean, professional design with a focus on conversion
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimised for speed with Next.js and Vercel
- **SEO Optimized**: Built with SEO best practices in mind
- **Accessible**: Follows accessibility guidelines

## Tech Stack

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vercel**: Hosting and deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Header.tsx      # Site header/navigation
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── ServicesOverview.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   └── CTA.tsx
└── public/             # Static assets
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Professional navy blue
- Accent colors: Gold/amber for highlights

### Content

Update content in:
- Component files in `/components`
- Page files in `/app`

## License

© 2024 MP Consulting Limited. All rights reserved.

