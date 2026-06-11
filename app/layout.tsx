import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Land Connectedness Journal",
  description:
    "A photo, drawing, and writing journal about connecting with land.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}