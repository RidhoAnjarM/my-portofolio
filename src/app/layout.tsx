import type { Metadata } from "next";
import {Poppins, Russo_One } from "next/font/google";
import "./globals.css";

// Impor Poppins
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// Impor Russo One
const russoOne = Russo_One({
  weight: "400",
  variable: "--font-russo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ridho Anjar Maulana - Portfolio",
  description: "Portfolio of Ridho Anjar Maulana, a Junior Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${russoOne.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}