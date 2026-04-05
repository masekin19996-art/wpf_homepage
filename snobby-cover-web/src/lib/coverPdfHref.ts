/** Cover PDF paths under `public/downloads/Type{X}/` */
export type CoverTypeLetter = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

export type CoverSizeKey = "bunko" | "shinsho" | "b6" | "46" | "a5";

export function coverPdfHref(type: CoverTypeLetter, size: CoverSizeKey): string {
  const prefix = `Type${type}`;
  const file: Record<CoverSizeKey, string> = {
    bunko: `${prefix}_bunko.pdf`,
    shinsho: `${prefix}_shinsho.pdf`,
    b6: `${prefix}_B6.pdf`,
    "46": `${prefix}_46.pdf`,
    a5: `${prefix}_A5.pdf`,
  };
  return `/downloads/${prefix}/${file[size]}`;
}
