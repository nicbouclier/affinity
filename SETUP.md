# Affinity Chatbot - Setup Guide

Welcome to your Affinity chatbot! This guide will walk you through setting up and running your AI-powered customer service assistant.

## What You Have

I've built a complete Next.js application with:

- ✅ **Claude AI Integration** via CopilotKit and AG-UI protocol
- ✅ **Xfinity-Inspired Design** with purple (#6138F5), red (#E6004A), and blue (#1F69FF) colors
- ✅ **Customer Service Features** for internet troubleshooting
- ✅ **Interactive UI Components**:
  - Step-by-step troubleshooting with progress bars
  - Internet speed test interface
  - Service status checker by ZIP code
- ✅ **PWA Support** for installation on mobile devices
- ✅ **Responsive Design** optimized for phone and desktop

## Quick Start

### 1. Install Dependencies

All dependencies are already installed! But if you need to reinstall:

\`\`\`bash
npm install
\`\`\`

### 2. Configure Your API Key

**IMPORTANT:** You need to add your Anthropic API key!

1. Open the file `.env.local` in the root directory
2. Replace `your_api_key_here_replace_this` with your actual Anthropic API key
3. Save the file

Your `.env.local` should look like:
\`\`\`
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
\`\`\`

> Get your API key from: https://console.anthropic.com/

### 3. Generate Proper App Icons (Optional but Recommended)

The app currently has placeholder icons. For a professional look:

**Option A: Use Online Tool (Recommended)**
1. Visit https://realfavicongenerator.net/
2. Upload your Affinity logo (512x512 PNG recommended)
3. Download the generated icons
4. Replace `public/icon-192.png` and `public/icon-512.png`

**Option B: Use ImageMagick**
\`\`\`bash
# If you have ImageMagick installed
convert public/icon.svg -resize 192x192 public/icon-192.png
convert public/icon.svg -resize 512x512 public/icon-512.png
\`\`\`

**Option C: Use the Icon Script**
\`\`\`bash
node scripts/generate-icons.js
\`\`\`

### 4. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000 in your browser!

### 5. Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Installing on Your Phone

### For iPhone (Safari)

1. Open the app URL in Safari (must be HTTPS in production)
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it "Affinity" and tap "Add"

### For Android (Chrome)

1. Open the app URL in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home screen"
4. Tap "Add"

**Note:** PWA installation requires HTTPS. For local development, use tools like ngrok or deploy to a hosting service.

## Deployment Options

### Vercel (Recommended - Easiest)

1. Push your code to GitHub:
   \`\`\`bash
   git add .
   git commit -m "Initial Affinity chatbot setup"
   git push
   \`\`\`

2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Add Environment Variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key
6. Click "Deploy"

Vercel provides HTTPS by default, so PWA features will work automatically!

### Other Hosting Options

- **Netlify:** Similar to Vercel, supports Next.js
- **Railway:** Easy deployment with environment variables
- **AWS Amplify:** Enterprise-grade hosting
- **Digital Ocean App Platform:** Good for custom configurations

All require setting the `ANTHROPIC_API_KEY` environment variable.

## Features Overview

### 1. AI Chat Interface
- Powered by Claude 3.5 Sonnet
- Natural conversation for customer service
- Context-aware responses

### 2. Internet Troubleshooting
- Diagnoses connection issues
- Provides step-by-step solutions
- Shows progress with animated progress bars
- Categories: slow, disconnected, intermittent

### 3. Speed Test
- Simulated internet speed testing
- Shows download, upload, and ping
- Beautiful gradient cards with icons

### 4. Service Status Checker
- Check service status by ZIP code
- Real-time status indicators
- Uptime and support information

## Customization

### Changing Colors

Edit `tailwind.config.ts` to modify the Xfinity color palette:

\`\`\`typescript
xfinity: {
  purple: "#6138F5",  // Change to your primary color
  red: "#E6004A",     // Change to your secondary color
  blue: "#1F69FF",    // Change to your tertiary color
  // ...
}
\`\`\`

### Adding New AI Actions

Edit `app/api/copilotkit/route.ts` to add new capabilities:

\`\`\`typescript
{
  name: "my_custom_action",
  description: "What this action does",
  parameters: [ /* ... */ ],
  handler: async ({ params }) => {
    // Your logic here
    return result;
  }
}
\`\`\`

### Adding New UI Components

Create new components in the `components/` folder. See existing components for examples.

## Troubleshooting

### "API Key Not Found" Error
- Make sure `.env.local` exists
- Verify the API key is correct
- Restart the dev server after changing `.env.local`

### Build Errors
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Check for TypeScript errors with `npm run lint`

### PWA Not Installing
- Must be served over HTTPS (deploy to Vercel, Netlify, etc.)
- Check manifest.json is accessible at `/manifest.json`
- Verify icons are proper PNG files (not placeholder text files)

### Icons Not Showing
- Replace placeholder icon files with actual PNG images
- Use https://realfavicongenerator.net/
- Make sure files are named `icon-192.png` and `icon-512.png`

## File Structure

\`\`\`
affinity/
├── app/
│   ├── api/copilotkit/
│   │   └── route.ts          # Claude AI integration
│   ├── globals.css            # Xfinity-themed styles
│   ├── layout.tsx             # Root layout with PWA config
│   └── page.tsx               # Main chat page
├── components/
│   ├── AffinityChat.tsx       # Main chat interface
│   ├── ServiceStatus.tsx      # Service status widget
│   ├── SpeedTest.tsx          # Speed test widget
│   └── TroubleshootingSteps.tsx # Troubleshooting UI
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── icon.svg               # Source icon
│   ├── icon-192.png           # App icon 192x192
│   └── icon-512.png           # App icon 512x512
├── scripts/
│   └── generate-icons.js      # Icon generation helper
├── .env.local                 # Environment variables (API key)
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind config with Xfinity colors
└── next.config.ts             # Next.js configuration
\`\`\`

## Next Steps

1. ✅ Add your Anthropic API key to `.env.local`
2. ✅ Run `npm run dev` to start the server
3. ✅ Test the chatbot at http://localhost:3000
4. ✅ Generate proper PNG icons
5. ✅ Deploy to Vercel for HTTPS and PWA support
6. ✅ Install on your phone and demo!

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **CopilotKit Docs:** https://docs.copilotkit.ai/
- **Anthropic API:** https://docs.anthropic.com/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **PWA Guide:** https://web.dev/progressive-web-apps/

---

**Built with ❤️ using Next.js, Claude AI, and AG-UI protocol**
