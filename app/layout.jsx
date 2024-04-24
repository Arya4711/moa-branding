import { Lato } from "next/font/google";
import "./globals.css";

const inter = Lato({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "MOA Branding",
  description: "Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta name="darkreader-lock" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}