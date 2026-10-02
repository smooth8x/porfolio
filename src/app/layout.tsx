import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { CustomCursor } from "@/components/common/CustomCursor";
import { PageLoader } from "@/components/common/PageLoader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/smooth8x/akash-portfolio"),
  title: "Akash | WordPress Developer & Creative Digital Professional",
  description:
    "Portfolio of Akash — WordPress Developer & Creative Digital Professional specializing in custom WordPress architectures, Elementor design, DaVinci Resolve color grading, video editing, and digital marketing.",
  keywords: [
    "Akash",
    "WordPress Developer",
    "Creative Digital Professional",
    "Elementor Expert",
    "DaVinci Resolve Colorist",
    "Video Editor",
    "Web Designer",
    "Digital Marketing",
  ],
  authors: [{ name: "Akash" }],
  creator: "Akash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/smooth8x",
    title: "Akash | WordPress Developer & Creative Digital Professional",
    description:
      "Combining technical web development with cinematic creative production. Bespoke WordPress architectures, responsive UI, and color grading.",
    siteName: "Akash Portfolio",
    images: [
      {
        url: "/images/akash-profile.png",
        width: 800,
        height: 800,
        alt: "Akash - WordPress Developer & Creative Digital Professional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash | WordPress Developer & Creative Digital Professional",
    description:
      "Combining technical web development with cinematic creative production.",
    images: ["/images/akash-profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#08080a] text-[#f4f4f6] font-sans antialiased selection:bg-[#E5A93C] selection:text-black">
        <SmoothScroll>
          <PageLoader />
          <CustomCursor />
          <Navbar />
          <main className="relative min-h-screen z-10 flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
