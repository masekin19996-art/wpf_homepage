import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snobby Book Cover",
  description: "A book cover that makes you look smart",
  openGraph: {
    title: "Snobby Book Cover",
    description: "A book cover that makes you look smart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snobby Book Cover",
    description: "A book cover that makes you look smart",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/dqk2gmh.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&family=Instrument+Serif&family=Fjalla+One&family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@500&family=EB+Garamond:ital,wght@0,400;1,400&family=Shippori+Mincho:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-wii antialiased">{children}</body>
    </html>
  );
}
