import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ['latin']})



export const metadata: Metadata = {
  title: "Muse",
  description: "Spotify clone project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
        {children}
      </body>
    </html>
  );
}
