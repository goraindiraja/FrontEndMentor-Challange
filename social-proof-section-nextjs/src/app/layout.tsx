import type { Metadata } from "next";
import { League_Spartan } from "next/font/google"
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Social Proof Section",
  description: "Social Proof Section Challange by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} background-image`}>
        {children}
      </body>
    </html>
  );
}
