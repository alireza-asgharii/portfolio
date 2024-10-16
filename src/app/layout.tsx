import type { Metadata } from "next";
import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";

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
        <ThemeProvider defaultTheme="dark">
          <main className="dark:bg-primaryColor">
            <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
