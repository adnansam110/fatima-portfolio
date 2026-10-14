import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fatima Abid | Digital Marketing & Social Media",
  description:
    "Fatima Abid helps businesses grow through Meta Ads, Google Ads, Instagram, Facebook, and thoughtful social media strategy.",
  icons: {
    icon: "/fatima-abid.jpeg",
    shortcut: "/fatima-abid.jpeg",
    apple: "/fatima-abid.jpeg",
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Fatima Abid | Digital Marketing & Social Media",
    description:
      "Paid advertising and social media strategy for growing brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
