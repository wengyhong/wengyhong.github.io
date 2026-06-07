import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wengyhong.github.io"),
  title: "Tan Weng Hong | Senior Unity Developer",
  description:
    "Senior Unity Developer in Kuala Lumpur building production Unity games, gameplay systems, multiplayer features, editor tools, backend integrations, and mobile live service experiences.",
  keywords: [
    "Tan Weng Hong",
    "Senior Unity Developer",
    "Unity Developer Portfolio",
    "C# Developer",
    "Unity Game Developer",
    "Gameplay Programmer",
    "Photon Fusion",
    "PlayFab",
    "FMOD",
  ],
  openGraph: {
    title: "Tan Weng Hong | Senior Unity Developer",
    description:
      "Production-focused Unity and C# engineering portfolio for games, tools, multiplayer systems, backend integrations, and mobile live service development.",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        alt: "Tan Weng Hong portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tan Weng Hong | Senior Unity Developer",
    description:
      "Production-focused Unity and C# engineering portfolio for games, tools, multiplayer systems, backend integrations, and mobile live service development.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
