import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rootDir = path.join(process.cwd(), 'public');
const exts = new Set(['.png', '.jpg', '.jpeg']);

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!exts.has(ext)) return;
  const targetPath = filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
  try {
    await sharp(filePath).webp({ quality: 75 }).toFile(targetPath);
    console.log(`Converted: ${path.relative(rootDir, filePath)} -> ${path.relative(rootDir, targetPath)}`);
  } catch (err) {
    console.error(`Failed to convert ${filePath}:`, err.message);
  }
}

async function walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else {
      await convertFile(fullPath);
    }
  }
}

(async () => {
  if (!fs.existsSync(rootDir)) {
    console.error('Public directory not found:', rootDir);
    process.exit(1);
  }
  await walk(rootDir);
})();
