# Affinity - AI-Powered Customer Service Assistant

A modern, AI-powered chatbot built with Next.js, CopilotKit, and Claude AI. Designed as a prototype for an intelligent customer service and internet troubleshooting assistant.

## Features

- **AI-Powered Chat**: Powered by Claude 3.5 Sonnet for intelligent conversations
- **Internet Troubleshooting**: Step-by-step diagnostics and resolution guides
- **Speed Testing**: Built-in internet speed test functionality
- **Service Status Checker**: Real-time service status by ZIP code
- **Progressive Web App**: Install on your phone for native-like experience
- **Multimodal UI**: Dynamic components including progress bars, charts, and interactive elements
- **Xfinity-Inspired Design**: Professional branding with purple and blue color scheme

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **AI Integration**: CopilotKit + Anthropic Claude API
- **Styling**: Tailwind CSS with custom Xfinity theme
- **UI Components**: Radix UI, Lucide Icons, Recharts
- **Language**: TypeScript
- **PWA**: Full Progressive Web App support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd affinity-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Edit `.env.local` and add your Anthropic API key:
\`\`\`
ANTHROPIC_API_KEY=sk-ant-...
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Creating PWA Icons

Before deploying, create proper app icons:

1. Create a 512x512px icon with the Affinity logo
2. Use a tool like [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator) to generate all icon sizes
3. Place the generated icons in the `public` folder:
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)

## Installing as PWA on Mobile

### iOS (Safari)
1. Open the app in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### Android (Chrome)
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home screen"
4. Tap "Add"

## Project Structure

\`\`\`
affinity-app/
├── app/
│   ├── api/copilotkit/     # CopilotKit API endpoint with Claude integration
│   ├── globals.css         # Global styles with Xfinity theme
│   ├── layout.tsx          # Root layout with PWA metadata
│   └── page.tsx            # Main chat page
├── components/
│   ├── AffinityChat.tsx    # Main chat interface
│   ├── ServiceStatus.tsx   # Service status checker
│   ├── SpeedTest.tsx       # Internet speed test
│   └── TroubleshootingSteps.tsx  # Step-by-step troubleshooting UI
├── public/
│   └── manifest.json       # PWA manifest
└── package.json
\`\`\`

## Customization

### Colors

The app uses Xfinity-inspired colors defined in `tailwind.config.ts`:
- Primary Purple: `#6138F5`
- Red Accent: `#E6004A`
- Blue: `#1F69FF`
- Dark Purple: `#280061`

To customize, edit the `xfinity` color palette in the Tailwind config.

### AI Actions

Add custom actions for the AI in `app/api/copilotkit/route.ts`. The current actions include:
- `diagnose_internet`: Internet troubleshooting
- `check_service_status`: Service status checking

### UI Components

All custom UI components are in the `components/` folder and can be easily modified or extended.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the `ANTHROPIC_API_KEY` environment variable in Vercel's settings
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway

Make sure to set the `ANTHROPIC_API_KEY` environment variable in your deployment platform.

## Development

### Adding New Features

1. **New UI Components**: Add to `components/` folder
2. **New AI Actions**: Define in `app/api/copilotkit/route.ts`
3. **New Pages**: Create in `app/` folder
4. **Styling**: Use Tailwind classes or extend in `tailwind.config.ts`

### Testing

Run the development server and test in your browser:
\`\`\`bash
npm run dev
\`\`\`

For production build testing:
\`\`\`bash
npm run build
npm start
\`\`\`

## Troubleshooting

### API Key Issues
- Ensure your `.env.local` file exists and contains a valid `ANTHROPIC_API_KEY`
- Restart the development server after adding environment variables

### Build Errors
- Delete `.next` folder and `node_modules`, then run `npm install` again
- Ensure you're using Node.js 18 or higher

### PWA Not Installing
- The app must be served over HTTPS (production) for PWA features to work
- Check that `manifest.json` is accessible at `/manifest.json`

## License

MIT

## Credits

- Built with [Next.js](https://nextjs.org/)
- AI powered by [Anthropic Claude](https://www.anthropic.com/)
- AG-UI protocol via [CopilotKit](https://www.copilotkit.ai/)
- Icons from [Lucide](https://lucide.dev/)
