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

const BASE_URL = "https://cruise-schedule-web-page-north-euro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "호구 안 당하고 북유럽 크루즈 VIP 가는 법",
  description:
    "덴마크·독일·노르웨이까지, 호텔 이동 없이 내 방 발코니에서 피오르 감상",
  openGraph: {
    title: "호구 안 당하고 북유럽 크루즈 VIP 가는 법",
    description:
      "덴마크·독일·노르웨이까지, 호텔 이동 없이 내 방 발코니에서 피오르 감상",
    url: BASE_URL,
    siteName: "북유럽 크루즈 VIP 가이드",
    images: [
      {
        url: "/north-europe-og.png",
        width: 1200,
        height: 630,
        alt: "북유럽 크루즈 일정 안내",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "호구 안 당하고 북유럽 크루즈 VIP 가는 법",
    description:
      "덴마크·독일·노르웨이까지, 호텔 이동 없이 내 방 발코니에서 피오르 감상",
    images: ["/north-europe-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
