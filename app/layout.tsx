import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


//i have 2 fonts 1 default for all, another should be applied
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  
  title: "Nikhil  Purohit",
  description: "portfolio site of Nikhil Purohit | Computer Science and Engineering Student ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}