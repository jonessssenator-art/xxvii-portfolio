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
  metadataBase: new URL("https://ivanpetrov.dev"),
  title: "Иван Петров — Frontend / Fullstack Developer",
  description: "Разработка быстрых, красивых и функциональных цифровых продуктов.",
  openGraph: {
    title: "Иван Петров — Frontend / Fullstack Developer",
    description: "Цифровые продукты, которые работают.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Портфолио Ивана Петрова" }],
  },
  twitter: { card: "summary_large_image", title: "Иван Петров — Frontend / Fullstack Developer", description: "Цифровые продукты, которые работают.", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
