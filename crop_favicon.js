import Jimp from 'jimp';

async function processImage() {
  const image = await Jimp.read('src/assets/logo.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  // Find column sums (alpha channel)
  const colAlpha = new Array(width).fill(0);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const idx = (width * y + x) << 2;
      const alpha = image.bitmap.data[idx + 3];
      if (alpha > 10) {
        colAlpha[x] += alpha;
      }
    }
  }

  // Find the first block of non-transparent columns
  let startX = -1;
  let endX = -1;
  let hasText = false;
  
  const gapThreshold = Math.max(5, Math.floor(width * 0.05));

  for (let x = 0; x < width; x++) {
    if (colAlpha[x] > 0 && startX === -1) {
      startX = x;
    }
    if (startX !== -1 && colAlpha[x] === 0) {
      // Look ahead to see if gap persists
      let isRealGap = true;
      for (let lookahead = 1; lookahead < Math.min(gapThreshold, width - x); lookahead++) {
        if (colAlpha[x + lookahead] > 0) {
          isRealGap = false;
          x += lookahead;
          break;
        }
      }
      if (isRealGap) {
        endX = x;
        console.log(`Found symbol boundaries: startX=${startX}, endX=${endX}`);
        hasText = true;
        break;
      }
    }
  }

  if (endX === -1) {
    console.log("No gap found, using full image...");
    endX = width;
  }

  // Crop the symbol
  const cropWidth = endX - startX;
  image.crop(startX, 0, cropWidth, height);
  image.autocrop();
  
  const maxDim = Math.max(image.bitmap.width, image.bitmap.height);
  
  new Jimp(maxDim, maxDim, 0x00000000, (err, square) => {
    if (err) throw err;
    const xOffset = Math.floor((maxDim - image.bitmap.width) / 2);
    const yOffset = Math.floor((maxDim - image.bitmap.height) / 2);
    
    square.composite(image, xOffset, yOffset);
    
    square.write('public/favicon.png', () => {
      console.log('Favicon cropped and saved as 512x512 square.');
    });
  });
}

processImage().catch(console.error);
