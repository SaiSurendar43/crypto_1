import Navbar from "@/Components/Navbar";
import type { Metadata } from "next";
import {Jost} from 'next/font/google'
import Footer from "@/Components/Footer";
import "./globals.css";

const jost = Jost({
  subsets:['latin'],
  weight:['100','200','500'],
  variable:'--font-jost',
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.variable}>
        <Navbar/>
        <main className="relative ove">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
