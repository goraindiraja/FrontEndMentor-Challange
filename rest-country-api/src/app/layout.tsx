import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google"
import "./globals.css";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800']
})

export const metadata: Metadata = {
  title: "REST Country API",
  description: "REST Country API With NextJS by Gora Indiraja S",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
