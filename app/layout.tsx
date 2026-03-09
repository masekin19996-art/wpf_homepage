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
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-wii antialiased">{children}</body>
    </html>
  );
}
