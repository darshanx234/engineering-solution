const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const logosPath = path.join(__dirname, '..', 'public');
const inputLogo = path.join(logosPath, 'logo_new.png');
const outputIcon = path.join(logosPath, 'favicon.png');

async function generateFavicons() {
  try {
    console.log('Generating single high-quality favicon from logo_new.png...\n');

    if (!fs.existsSync(inputLogo)) {
      throw new Error(`Input file not found: ${inputLogo}`);
    }

    await sharp(inputLogo)
      .png({ quality: 100, compressionLevel: 0 })
      .toFile(outputIcon);

    console.log('✅ Created favicon.png using original logo quality');

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
