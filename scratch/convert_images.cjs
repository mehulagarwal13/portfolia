const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = 'public/images';
const files = ['Maxlife.png', 'Solidx.png', 'bond.png', 'radix.png', 'sapphire.png', 'broki.png', 'callhq.png'];

async function convert() {
    for (const file of files) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
        
        if (fs.existsSync(inputPath)) {
            console.log(`Converting ${file}...`);
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);
            console.log(`Saved to ${outputPath}`);
        } else {
            console.warn(`File not found: ${inputPath}`);
        }
    }
}

convert().catch(console.error);
