import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sasha Tran | Web Developer",
  description: "Portfolio, CSS, Javascript, React, Vue developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    <GoogleAnalytics gaId="G-2VWNKLFJ0H" />
    </html>
  );
}
