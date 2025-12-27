import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundDecorations } from "@/components/BackgroundDecorations";

export const metadata: Metadata = {
  title: "Encrypted Donation Log",
  description: "Privacy-preserving anonymous donation tracking system",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`donation-bg text-foreground antialiased min-h-screen`}>
        <div className="fixed inset-0 w-full h-full donation-bg z-[-20] min-w-[850px]"></div>
        <BackgroundDecorations />
        <main className="flex flex-col max-w-screen-lg mx-auto pb-10 min-w-[850px]">
          <Header />
          <Providers>{children}</Providers>
          <Footer />
        </main>
      </body>
    </html>
  );
}
