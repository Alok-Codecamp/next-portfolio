import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "./theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alok Portfolio",
  description: "Alok is a MERN Stack Developer specializing in building modern, scalable, and responsive web applications. Expert in React, Next.js, Node.js, and MongoDB. Check out his portfolio to see innovative projects and cutting-edge web solutions.",
};

export default function RootLayout({
  children,
}:{children:ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
       <ThemeProvider>
       <Navbar/>
        {children}
        </ThemeProvider> 
        
      </body>
    </html>
  );
}
