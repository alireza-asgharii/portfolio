import type { Metadata } from "next";
import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const vazirMatn = Vazirmatn({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vazirMatn.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
