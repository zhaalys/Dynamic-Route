// Fallback images strictly from /public/image
// Duplicate entries to ensure galleries and thumbnails always have content
export function getFallbackImages() {
  const single = "/image/TBIMG.png";
  return [single, single, single, single, single, single];
}


