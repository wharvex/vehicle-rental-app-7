import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import HeaderPage from "@/components/header-page";
import FooterPage from "@/components/footer-page";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Borrow Our Cars",
  description: "A Vehicle Rental Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classStr = clsx(
    "relative",
    "bg-white",
    "w-full",
    "h-full",
    "overflow-hidden",
    "flex",
    "flex-col",
    "items-center",
    "justify-start"
  );
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <HeaderPage
            image="/image2@2x.png"
            image1="/image3@2x.png"
            headerPageBoxSizing="border-box"
            headerPageBackgroundImage="url('/header--page1@3x.png')"
            headerPageFlexShrink="0"
            imageHeaderPageLogoCursor="pointer"
          />
          <div className={classStr}>{children}</div>
          <FooterPage
            footerPageBackgroundImage="url('/footer--page1@3x.png')"
            footerPageFlexShrink="0"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
