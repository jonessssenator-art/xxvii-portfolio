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
  title: "xxvii — цифровые продукты для бизнеса",
  description: "Назир создаёт лендинги, сайты компаний, презентации и CRM-системы, которые помогают бизнесу получать больше клиентов и продаж.",
  openGraph: {
    title: "xxvii — не просто сайт, а система для бизнеса",
    description: "Лендинги, сайты компаний, презентации и CRM-системы с фокусом на результат.",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og-xxvii.png", width: 1536, height: 1024, alt: "xxvii — цифровые продукты для бизнеса" }],
  },
  twitter: { card: "summary_large_image", title: "xxvii — цифровые продукты для бизнеса", description: "Сайты и системы с фокусом на результат.", images: ["/og-xxvii.png"] },
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
