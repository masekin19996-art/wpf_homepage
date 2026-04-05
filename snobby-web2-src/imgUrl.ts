import type { StaticImageData } from "next/image";

export type ImgSrc = string | StaticImageData;

/** Next の静的画像 import は StaticImageData になるため、素の <img> 向けに URL へ正規化する */
export function imgUrl(src: ImgSrc): string {
  return typeof src === "string" ? src : src.src;
}
