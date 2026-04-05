/** Single row in DOWNLOAD Cover Data dropdown — hover: black bg, white text, download icon right */
export function DownloadSizeAnchor({
  name,
  href,
  download,
  onClick,
  className,
}: {
  name: string;
  href: string;
  download?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(download ? { download: true as const } : {})}
      onClick={onClick}
      className={`group flex w-full items-center justify-between gap-3 bg-white px-[15px] py-[10px] text-left text-black transition-colors hover:bg-black hover:text-white ${className ?? ""}`}
    >
      <span className="font-['Noto_Sans_JP:Light',sans-serif] text-[14px]">{name}</span>
      <svg
        className="h-[18px] w-[18px] shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1.5A2.5 2.5 0 006.5 20h11a2.5 2.5 0 002.5-2.5V16M8 12l4 4m0 0l4-4m-4 4V4"
        />
      </svg>
    </a>
  );
}
