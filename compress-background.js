import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, "src", "assets", "bgwallpaperv1.jpg");
const outputPath = inputPath;

async function compressImage() {
  try {
    console.log("🖼️  Compressing background image...");

    const originalSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize(1920, 1080, {
        fit: "cover",
        withoutEnlargement: true,
      })
      .jpeg({ quality: 75, progressive: true })
      .toFile(outputPath + ".tmp");

    fs.renameSync(outputPath + ".tmp", outputPath);

    const newSize = fs.statSync(outputPath).size;
    const savings = originalSize - newSize;
    const percent = ((savings / originalSize) * 100).toFixed(1);

    console.log(`✅ Image compressed successfully!`);
    console.log(`📏 Original: ${(originalSize / 1024).toFixed(0)} KB`);
    console.log(`📏 Compressed: ${(newSize / 1024).toFixed(0)} KB`);
    console.log(`💾 Saved: ${(savings / 1024).toFixed(0)} KB (${percent}%)`);
  } catch (error) {
    console.error("❌ Error compressing image:", error);
  }
}

compressImage();
