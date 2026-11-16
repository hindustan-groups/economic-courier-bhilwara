import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const sourceLogo = path.resolve('public/assets/logo/ecs-logo-512.png');

if (!fs.existsSync(sourceLogo)) {
  console.error(`Source logo not found: ${sourceLogo}`);
  process.exit(1);
}

// Function to generate a real multi-resolution Windows ICO
async function createIco(sourcePng, outIcoPath, sizes = [16, 32, 48]) {
  const pngBuffers = [];
  
  for (const s of sizes) {
    const buf = await sharp(sourcePng)
      .resize(s, s, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size: s, buffer: buf });
  }

  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = sizes.length;
  let offset = headerSize + (dirEntrySize * numImages);

  const outBuffer = Buffer.alloc(offset + pngBuffers.reduce((sum, img) => sum + img.buffer.length, 0));

  // Write header: 2 bytes reserved (0), 2 bytes type (1 = icon), 2 bytes image count
  outBuffer.writeUInt16LE(0, 0);
  outBuffer.writeUInt16LE(1, 2);
  outBuffer.writeUInt16LE(numImages, 4);

  let curOffset = offset;
  for (let i = 0; i < numImages; i++) {
    const { size, buffer } = pngBuffers[i];
    const entryOffset = headerSize + (i * dirEntrySize);
    
    outBuffer.writeUInt8(size >= 256 ? 0 : size, entryOffset); // Width
    outBuffer.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1); // Height
    outBuffer.writeUInt8(0, entryOffset + 2); // Colors
    outBuffer.writeUInt8(0, entryOffset + 3); // Reserved
    outBuffer.writeUInt16LE(1, entryOffset + 4); // Planes
    outBuffer.writeUInt16LE(32, entryOffset + 6); // Bits per pixel
    outBuffer.writeUInt32LE(buffer.length, entryOffset + 8); // Size
    outBuffer.writeUInt32LE(curOffset, entryOffset + 12); // Offset

    buffer.copy(outBuffer, curOffset);
    curOffset += buffer.length;
  }

  fs.writeFileSync(outIcoPath, outBuffer);
  console.log(`Generated binary ICO: ${outIcoPath} (${outBuffer.length} bytes, sizes: ${sizes.join(', ')})`);
}

async function main() {
  console.log('Generating Google-compliant Favicon and Touch Icon Assets...');

  // Multiples of 48 (Google Favicon Search guideline)
  const sizes = [
    { name: 'public/favicon-48x48.png', size: 48 },
    { name: 'public/favicon-96x96.png', size: 96 },
    { name: 'public/favicon-144x144.png', size: 144 },
    { name: 'public/favicon-192x192.png', size: 192 },
    { name: 'public/favicon-512x512.png', size: 512 },
    { name: 'public/apple-touch-icon.png', size: 180 },
    { name: 'src/app/icon.png', size: 512 },
    { name: 'src/app/apple-icon.png', size: 180 },
  ];

  for (const { name, size } of sizes) {
    const outPath = path.resolve(name);
    await sharp(sourceLogo)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
    console.log(`Generated PNG: ${name} (${size}x${size})`);
  }

  // Generate ICO files
  await createIco(sourceLogo, path.resolve('public/favicon.ico'), [16, 32, 48]);
  await createIco(sourceLogo, path.resolve('src/app/favicon.ico'), [16, 32, 48]);

  // Generate clean SVG favicon using data URI embedding for crisp rendering
  const svgPngBase64 = (await sharp(sourceLogo).resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toBuffer()).toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="100%" height="100%">
  <image width="192" height="192" href="data:image/png;base64,${svgPngBase64}"/>
</svg>\n`;
  fs.writeFileSync(path.resolve('public/favicon.svg'), svgContent, 'utf-8');
  console.log('Generated SVG: public/favicon.svg');

  console.log('All favicon assets generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
