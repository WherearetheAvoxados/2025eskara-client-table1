import "../global.css";
import localFont from "next/font/local";

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
