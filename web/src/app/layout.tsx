import type { Metadata } from "next";
import "./globals.css";
import { PlaygroundStateProvider } from "@/hooks/use-playground-state";
import { ConnectionProvider } from "@/hooks/use-connection";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Public_Sans } from "next/font/google";

// Configure the Public Sans font
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

import "@livekit/components-styles";

export const metadata: Metadata = {
  title: "Famnote Playground",
  description:
    "Try OpenAI's new Realtime API.",
  openGraph: {
    title: "Famnote Playground",
    description:
      "Try OpenAI's new Realtime API.",
    type: "website",
    url: "https://unove.space/",
    images: [
      {
        url: "https://vzrcy5vcsuuocnf3.public.blob.vercel-storage.com/dBJny2F-OuN57B10RFAx4EWuR4rBqiVUb7rX6g.png",
        width: 1200,
        height: 675,
        type: "image/png",
        alt: "Famnote Playground",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <PlaygroundStateProvider>
          <ConnectionProvider>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </ConnectionProvider>
        </PlaygroundStateProvider>
      </body>
    </html>
  );
}
