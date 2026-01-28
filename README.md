# A'SHERIV Website

A premium placeholder website for A'SHERIV — an AI-driven maritime operations platform. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Single-page scrolling landing page with anchor navigation
- Responsive design (mobile-first)
- Contact form with API endpoint
- Privacy policy page
- SEO optimized with OpenGraph tags
- Performance optimized for Lighthouse scores

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel or Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
asheriv_website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── components/
│   │   ├── Navigation.tsx        # Sticky navigation with mobile menu
│   │   ├── ContactForm.tsx       # Contact form component
│   │   └── Footer.tsx            # Footer component
│   ├── privacy/
│   │   └── page.tsx              # Privacy policy page
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main landing page
├── public/
│   ├── favicon.ico               # Favicon (placeholder - replace with actual icon)
│   └── onepager.pdf              # One-pager PDF (placeholder)
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

2. Import your project in [Vercel](https://vercel.com):
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. Your site will be live at `https://your-project.vercel.app`

4. To use a custom domain (`www.asheriv.com`):
   - Go to Project Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

### Cloudflare Pages

1. Push your code to a Git repository.

2. In Cloudflare Dashboard:
   - Go to Pages → Create a project
   - Connect your Git repository
   - Build settings:
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `.next`
   - Click "Save and Deploy"

3. For custom domain:
   - Go to your project → Custom domains
   - Add `www.asheriv.com`
   - Update DNS records as instructed

### Environment Variables

Currently, no environment variables are required. When you integrate an email service for the contact form, you'll need to add API keys:

- Create `.env.local` for local development
- Add environment variables in your deployment platform:
  - **Vercel**: Project Settings → Environment Variables
  - **Cloudflare Pages**: Settings → Environment Variables

## Contact Form Integration

The contact form currently logs submissions server-side. To integrate an email service:

1. Choose a service (e.g., Resend, SendGrid, AWS SES)
2. Install the SDK: `npm install resend` (example)
3. Update `/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In POST handler:
await resend.emails.send({
  from: 'contact@asheriv.com',
  to: 'a.asliilhan@gmail.com',
  subject: `Contact form: ${company}`,
  html: `<p>From: ${name} (${email})</p><p>Company: ${company}</p><p>Role: ${role}</p><p>Message: ${message}</p>`,
});
```

4. Add `RESEND_API_KEY` to environment variables.

## Customization

### Colors

The accent color is defined in `tailwind.config.ts`. To change it:

```typescript
colors: {
  accent: "#0066CC", // Change this hex value
}
```

### Content

All content is in `app/page.tsx`. Edit the text directly in the component.

### Favicon

Replace `/public/favicon.ico` with your actual favicon. You can generate one at [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net).

## Performance

The site is optimized for:
- Fast initial load
- Smooth scrolling
- Mobile responsiveness
- SEO best practices

Run Lighthouse audits to verify performance scores.

## License

Private - A'SHERIV

