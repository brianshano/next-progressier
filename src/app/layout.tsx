import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWA With Notifications",
  description: "Progressier PWA with notifications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="manifest"
        href="https://progressier.app/IUVNwJ9e3vmpXI5nPhhF/progressier.json"
      />

      <body className={inter.className}>{children}</body>
      <Script
        src="https://progressier.app/IUVNwJ9e3vmpXI5nPhhF/script.js"
        strategy="beforeInteractive"
      />
    </html>
  );
}
