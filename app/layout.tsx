import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wii Menu",
  description: "A Wii-inspired portfolio menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&family=Instrument+Serif&family=Fjalla+One&family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@500&family=EB+Garamond:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-wii antialiased">{children}</body>
    </html>
  );
}
