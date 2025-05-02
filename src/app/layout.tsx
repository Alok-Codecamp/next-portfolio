import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/lib/providers/Providers";
import { Source_Code_Pro } from 'next/font/google'
const source = Source_Code_Pro({
  subsets: ['cyrillic'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Alok Portfolio",
  description: "Alok is a MERN Stack Developer specializing in building modern, scalable, and responsive web applications. Expert in React, Next.js, Node.js, and MongoDB. Check out his portfolio to see innovative projects and cutting-edge web solutions.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${source.className} antialiased px-10`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </Providers>

  );
}
