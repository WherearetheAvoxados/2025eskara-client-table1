import "../global.css";
import localFont from "next/font/local";

export const metadata = {
  metadataBase: new URL("https://2025eskara-client-table1.vercel.app/"),
  title: "2025 eskara 배트와 매트 1번 테이블",
  description: "배트와 매트 1번 테이블 주문 페이지입니다",
  openGraph: {
    title: "배트와 매트",
    description: "배트와 매트 1번 테이블 주문 페이지입니다",
    siteName: "배트와 매트",
    images: [
      {
        url: "/title.jpeg", // 썸네일 이미지 URL
        alt: "배트와 매트",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const SF_pro = localFont({
  src: "../../../font/SF-Pro.ttf",
  weight: "400",
  style: "normal",
});

import DrawerProvider from "../../../context/layoutProvider";
export default function RootLayout({
  children,
  mordal,
}: {
  children: React.ReactNode;
  mordal: React.ReactNode;
}) {
  return (
    <html>
      <body className={SF_pro.className}>
        <DrawerProvider mordal={mordal}>{children}</DrawerProvider>
      </body>
    </html>
  );
}
