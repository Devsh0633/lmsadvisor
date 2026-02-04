import type { Metadata } from "next";
// We are using Google Fonts via CSS import in globals.css for simplicity as requested, 
// but sticking to standard next/font/google is also fine. 
// Given the specific instruction for "Inter / Source Sans", let's use the CSS import in globals.css 
// to ensure we match the exact weights requested easily.
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LMS Advisors",
  description: "Practical guidance for choosing Learning Management Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
