import style from "./layout.module.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

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
      <body className={style.safeArea}>
        <DrawerProvider mordal={mordal}>{children}</DrawerProvider>
      </body>
    </html>
  );
}
