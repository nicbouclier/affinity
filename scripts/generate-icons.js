#!/usr/bin/env node

/**
 * Simple icon generator script
 * This creates basic PNG icons from the SVG
 * For production, use a proper tool like https://realfavicongenerator.net/
 */

const fs = require('fs');
const path = require('path');

const sizes = [192, 512];
const publicDir = path.join(__dirname, '..', 'public');

console.log('📱 Generating placeholder app icons...\n');

// For now, just copy the SVG with different names as placeholders
// Users should replace these with actual PNG files
sizes.forEach(size => {
  const targetPath = path.join(publicDir, `icon-${size}.png`);
  const svgPath = path.join(publicDir, 'icon.svg');

  if (!fs.existsSync(targetPath)) {
    // Create a placeholder file with instructions
    const placeholder = `
⚠️  PLACEHOLDER FILE - REPLACE WITH ACTUAL ${size}x${size} PNG ⚠️

To generate proper icons:
1. Visit https://realfavicongenerator.net/
2. Upload your logo/icon
3. Download and replace this file with icon-${size}.png

Or use ImageMagick:
convert icon.svg -resize ${size}x${size} icon-${size}.png
    `.trim();

    fs.writeFileSync(targetPath, placeholder);
    console.log(`✓ Created placeholder: icon-${size}.png`);
  }
});

console.log('\n✅ Icon placeholders created!');
console.log('\n📝 Next steps:');
console.log('   1. Replace icon-192.png and icon-512.png with actual PNG files');
console.log('   2. Use https://realfavicongenerator.net/ for best results');
console.log('   3. Or use ImageMagick: convert icon.svg -resize 192x192 icon-192.png\n');
