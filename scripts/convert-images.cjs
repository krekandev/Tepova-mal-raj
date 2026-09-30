const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const images = [
    {
      src: 'public/hero-bg.jpg',
      destWebp: 'public/hero-bg.webp',
      maxWidth: 1920,
      quality: 80
    },
    {
      src: 'src/assets/images/hero-bg.jpg',
      destWebp: 'src/assets/images/hero-bg.webp',
      maxWidth: 1920,
      quality: 80
    },
    {
      src: 'src/assets/images/voskovaniekaroseria.jpg',
      destWebp: 'src/assets/images/voskovaniekaroseria.webp',
      maxWidth: 1200,
      quality: 80
    },
    {
      src: 'src/assets/images/nabytok.jfif',
      destWebp: 'src/assets/images/nabytok.webp',
      maxWidth: 1200,
      quality: 80
    },
    {
      src: 'src/assets/images/interiersluzby.jfif',
      destWebp: 'src/assets/images/interiersluzby.webp',
      maxWidth: 1200,
      quality: 80
    },
    {
      src: 'public/logo_dark_header.png',
      destWebp: 'public/logo_dark_header.webp',
      maxWidth: 400,
      quality: 85
    },
    {
      src: 'src/assets/images/logo_dark_header.png',
      destWebp: 'src/assets/images/logo_dark_header.webp',
      maxWidth: 400,
      quality: 85
    },
    {
      src: 'public/logo_light.png',
      destWebp: 'public/logo_light.webp',
      maxWidth: 400,
      quality: 85
    },
    {
      src: 'src/assets/images/logo_light.png',
      destWebp: 'src/assets/images/logo_light.webp',
      maxWidth: 400,
      quality: 85
    }
  ];

  for (const img of images) {
    if (fs.existsSync(img.src)) {
      const origSize = fs.statSync(img.src).size;
      await sharp(img.src)
        .resize({ width: img.maxWidth, withoutEnlargement: true })
        .webp({ quality: img.quality })
        .toFile(img.destWebp);
      const newSize = fs.statSync(img.destWebp).size;
      console.log(`Optimized ${img.src} (${Math.round(origSize / 1024)} KB) -> ${img.destWebp} (${Math.round(newSize / 1024)} KB)`);
    }
  }
}

optimizeImages().catch(console.error);
