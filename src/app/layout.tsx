import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBanner from "@/components/layout/TopBanner";
import ScrollToTop from "@/components/ui/ScrollToTop";
import AdmissionsChat from "@/components/ui/AdmissionsChat";

export const metadata: Metadata = {
  title: "JAIN (Deemed-to-be University) | Empowering Minds",
  description: "India's Trusted Destination for Higher Education & Research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <AdmissionsChat />
      </body>
    </html>
  );
}