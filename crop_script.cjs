const sharp = require('sharp');
const path = require('path');

const inputPath = path.resolve(__dirname, 'public/bg-hero-4-new.png');
const outputPath = path.resolve(__dirname, 'public/bg-hero-4-cropped.png');

sharp(inputPath)
  .metadata()
  .then(metadata => {
    const { width, height } = metadata;
    const topOffset = Math.floor(height * 0.3);
    const newHeight = height - topOffset;

    return sharp(inputPath)
      .extract({ left: 0, top: topOffset, width: width, height: newHeight })
      .toFile(outputPath);
  })
  .then(info => {
    console.log('Crop successful:', info);
  })
  .catch(err => {
    console.error('Error cropping:', err);
  });
