import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thái & Vân Wedding - 12/10/2025",
  description:
    "Trang web đám cưới của Thái và Vân. Cùng chúng mình chia sẻ khoảnh khắc hạnh phúc trong ngày trọng đại 12/10/2025 tại Hải Phòng.",
  keywords: "đám cưới, wedding, Thái, Vân, 2025, Hải Phòng",
  authors: [{ name: "Thái & Vân" }],
  creator: "Thái & Vân",
  publisher: "Thái & Vân",
  openGraph: {
    title: "Thái & Vân Wedding - 12/10/2025",
    description:
      "Trang web đám cưới của Thái và Vân. Cùng chúng mình chia sẻ khoảnh khắc hạnh phúc trong ngày trọng đại 12/10/2025 tại Hải Phòng.",
    url: "https://thaivan-wedding.com",
    siteName: "Thái & Vân Wedding",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thái & Vân Wedding",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thái & Vân Wedding - 12/10/2025",
    description:
      "Trang web đám cưới của Thái và Vân. Cùng chúng mình chia sẻ khoảnh khắc hạnh phúc trong ngày trọng đại 12/10/2025 tại Hải Phòng.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
