import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sultan Perde İstanbul",
  description: "Sultan Perde İstanbul",
  icons: {
    icon: '/logos/logo_green.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body>
        <div className="">
          <Header></Header>

          <main>
            <div className="mx-auto">
              {children}
            </div>
          </main>

          <Footer></Footer>

        </div>
      </body>
    </html>
  );
}