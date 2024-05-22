import { Lato } from "next/font/google";
import CustomScroll from "./_ui/CustomScroll";
import "./globals.css";
import "overlayscrollbars/overlayscrollbars.css";
import NavBar from "./_ui/NavBar";
import Footer from "./_ui/Footer";

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
      <body className={inter.className}>
        <CustomScroll>
          <div className="flex h-screen flex-col justify-between">
            <NavBar />
            {children}
            <Footer />
          </div>
        </CustomScroll>
      </body>
    </html>
  );
}
