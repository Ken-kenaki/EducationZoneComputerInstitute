import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import components
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Education Zone Computer Institute | Lalbandi, Nepal",
  description:
    "Education Zone Computer Institute is a leading IT training center in Lalbandi, Sarlahi, Nepal. Committed to excellence in education since 2071 B.S. (2014 A.D).",
  keywords: [
    "Education Zone",
    "Computer Institute Lalbandi",
    "Computer Courses Nepal",
    "IT Training Sarlahi",
    "Basic Computer Course",
    "Diploma in Computer Application",
    "Nepal Computer Education",
  ],
  authors: [
    {
      name: "Education Zone Computer Institute",
      url: "https://educationzone.com.np",
    },
  ],
  creator: "Education Zone Computer Institute",
  publisher: "Education Zone Computer Institute",
  metadataBase: new URL("https://educationzone.com.np"),
  openGraph: {
    title: "Education Zone Computer Institute",
    description:
      "Dedicated to providing affordable and high-quality computer education in Lalbandi, Sarlahi, Nepal. Established in 2071 B.S. (2014 A.D).",
    url: "https://educationzone.com.np",
    siteName: "Education Zone Computer Institute",
    locale: "en_NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Zone Computer Institute",
    description:
      "Explore quality computer courses and IT training in Lalbandi. Recognized by the Government of Nepal.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
