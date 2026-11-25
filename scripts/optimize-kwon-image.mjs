import sharp from "sharp";
import { stat } from "node:fs/promises";
import { resolve } from "node:path";

// Optimizes the existing, genuine representative photo at build time.
// The original public/kwon-profile.png remains unchanged for archival use.
const original = resolve("public/kwon-profile.png");
const webp = resolve("public/kwon-profile-optimized.webp");
const social = resolve("public/kwon-profile-social.jpg");
const fallback = resolve("public/kwon-profile-fallback.jpg");

const originalMetadata = await sharp(original).metadata();
if (!originalMetadata.width || !originalMetadata.height) {
  throw new Error("The original representative photo is not a valid image.");
}

await sharp(original)
  .rotate()
  .resize({ width: 960, withoutEnlargement: true })
  .webp({ quality: 86, effort: 6 })
  .toFile(webp);

// Portrait JPEG fallback uses the same dimensions and framing as the display WebP.
await sharp(original)
  .rotate()
  .resize({ width: 960, withoutEnlargement: true })
  .flatten({ background: "#ffffff" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(fallback);

// Square preview preserves both the face and natural upper-body pose in search previews.
await sharp(original)
  .rotate()
  .resize(900, 900, { fit: "cover", position: "north" })
  .flatten({ background: "#ffffff" })
  .jpeg({ quality: 87, mozjpeg: true })
  .toFile(social);

const [before, webpStats, socialStats, fallbackStats] = await Promise.all(
  [original, webp, social, fallback].map((file) => stat(file))
);
console.log("Representative photo optimized:", {
  originalBytes: before.size,
  displayWebpBytes: webpStats.size,
  socialJpegBytes: socialStats.size,
  fallbackJpegBytes: fallbackStats.size,
});
