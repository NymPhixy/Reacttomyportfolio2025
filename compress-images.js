import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, "public", "assets");
const srcAssetsDir = path.join(__dirname, "src", "assets");

async function compressImages(dir) {
  console.log(`\n📦 Compressing images in: ${dir}`);

  try {
    const files = fs
      .readdirSync(dir)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));

    if (files.length === 0) {
      console.log("  No images found in this directory");
      return;
    }

    for (const file of files) {
      const inputPath = path.join(dir, file);
      const backupPath = path.join(
        dir,
        `${path.parse(file).name}-backup${path.extname(file)}`,
      );

      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);

      try {
        // Create backup first
        fs.copyFileSync(inputPath, backupPath);

        await sharp(inputPath)
          .jpeg({ quality: 80, progressive: true })
          .toFile(inputPath);

        const compressedStats = fs.statSync(inputPath);
        const compressedSize = (compressedStats.size / 1024).toFixed(2);
        const savings = ((1 - compressedStats.size / stats.size) * 100).toFixed(
          1,
        );

        // Remove backup since compression was successful
        fs.unlinkSync(backupPath);

        console.log(`  ✓ ${file}`);
        console.log(
          `    ${originalSize} KB → ${compressedSize} KB (Saved: ${savings}%)`,
        );
      } catch (err) {
        console.error(`  ✗ Error compressing ${file}: ${err.message}`);
        // Restore backup if it exists
        if (fs.existsSync(backupPath)) {
          try {
            fs.copyFileSync(backupPath, inputPath);
            fs.unlinkSync(backupPath);
          } catch {
            console.error(`  ⚠ Warning: Could not restore backup for ${file}`);
          }
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
  }
}

async function run() {
  console.log("🚀 Starting image compression...");
  await compressImages(assetsDir);
  await compressImages(srcAssetsDir);
  console.log("\n✅ Image compression complete!");
}

run().catch(console.error);
