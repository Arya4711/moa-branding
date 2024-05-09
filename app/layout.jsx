import { Lato } from "next/font/google";
import SmoothScroll from "./_ui/SmoothScroll";
import "./globals.css";
import "overlayscrollbars/overlayscrollbars.css";

const inter = Lato({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "MOA Branding",
  description: "Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta name="darkreader-lock" />
      </head>
      <body className={inter.className}><SmoothScroll>{children}</SmoothScroll></body>
    </html>
  );
}
