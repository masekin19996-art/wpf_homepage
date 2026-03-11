/**
 * Shopify STORY_GUM / STORY_KISS のメディア設定
 * shopify:// の参照は Shopify CDN URL に置き換えてください。
 * 未設定時は public/gummygummy/ または public/hickeytattoo/ 内のファイルを使用します。
 */

/** Shopify CDN のベースURL（ストアのファイル用）。未設定時は public 内のパスを使用 */
const SHOPIFY_CDN = ""; // 例: "https://cdn.shopify.com/s/files/1/xxxx/files"

const mediaUrl = (basePath: string, subPath: string, filename: string) =>
  SHOPIFY_CDN ? `${SHOPIFY_CDN}/${subPath}/${filename}` : `${basePath}/${filename}`;

/** STORY_GUM（gummygummy 用）: gummybond 動画・画像 */
export const STORY_GUM = {
  sections: [
    { type: "video" as const, video: "gummybond_film01_web.mov", videoUrl: "https://www.youtube.com/watch?v=_9VUPq3SxOc" },
    { type: "image" as const, image: "38.png" },
    { type: "video" as const, video: "gummybond_film03_web.mov", videoUrl: "https://www.youtube.com/watch?v=_9VUPq3SxOc" },
    { type: "image" as const, image: "39.png" },
    { type: "video" as const, video: "gummybond_film02_web.mov", videoUrl: "https://www.youtube.com/watch?v=_9VUPq3SxOc" },
    { type: "image" as const, image: "40.png" },
    { type: "image" as const, image: "gum2.png" },
  ],
  getVideoUrl: (filename: string) => mediaUrl("/gummygummy", "videos", filename),
  getImageUrl: (filename: string) => mediaUrl("/gummygummy", "shop_images", filename),
};

/** STORY_KISS（hickeytattoo 用）: 同構造。KISS用メディアに差し替える場合は sections を編集 */
export const STORY_KISS = {
  sections: [
    { type: "video" as const, video: "gummybond_film01_web.mov", videoUrl: "https://www.youtube.com/watch?v=_9VUPq3SxOc" },
    { type: "image" as const, image: "38.png" },
    { type: "video" as const, video: "gummybond_film03_web.mov", videoUrl: "https://www.youtube.com/watch?v=_9VUPq3SxOc" },
    { type: "image" as const, image: "39.png" },
    { type: "video" as const, video: "gummybond_film02_web.mov", videoUrl: "https://www.youtube.com/watch?v=_9VUPq3SxOc" },
    { type: "image" as const, image: "40.png" },
    { type: "image" as const, image: "gum2.png" },
  ],
  getVideoUrl: (filename: string) => mediaUrl("/hickeytattoo", "videos", filename),
  getImageUrl: (filename: string) => mediaUrl("/hickeytattoo", "shop_images", filename),
};
