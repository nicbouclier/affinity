#!/bin/bash

# Commit script for Affinity chatbot
echo "🚀 Committing Affinity chatbot to repository..."

# Navigate to the repository
cd /home/user/affinity

# Check current branch
echo "📍 Current branch:"
git branch --show-current

# Show status
echo ""
echo "📝 Files to be committed:"
git status --short

# Add all files
echo ""
echo "➕ Adding files..."
git add .

# Create commit
echo ""
echo "💾 Creating commit..."
git commit -m "$(cat <<'EOF'
Add Affinity AI chatbot - Claude-powered customer service assistant

This commit adds a complete Next.js application for an AI-powered customer
service chatbot named Affinity. Built as a PWA with multimodal UI components.

Features:
- Claude 3.5 Sonnet integration via CopilotKit and AG-UI protocol
- Customer service chat interface with intelligent responses
- Internet troubleshooting with step-by-step diagnostics
- Service status checker by ZIP code
- Internet speed test with visual results
- Xfinity-inspired branding (purple/blue color scheme)
- Progressive Web App support for mobile installation
- Responsive design optimized for phone and desktop

Tech Stack:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS with custom Xfinity theme
- CopilotKit for AI integration
- Radix UI components
- Lucide icons
- Recharts for data visualization

Components:
- Interactive troubleshooting steps with progress bars
- Real-time speed testing interface
- Service status dashboard
- AI-powered chat with contextual actions

Ready for deployment to Vercel, Netlify, or similar platforms.
Requires ANTHROPIC_API_KEY environment variable.

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

echo ""
echo "✅ Commit created successfully!"
echo ""
echo "📤 To push to remote, run:"
echo "   git push -u origin $(git branch --show-current)"
