import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antigravity | Premium Creative Engineer & Graphic Programmer Portfolio",
  description: "Explore custom interactive showcases built with Next.js, WebGL solvers, and procedural generators using clean code architectures and high-fidelity dark-mode Zen style designs.",
  keywords: ["Next.js", "React", "TypeScript", "Clean Code", "WebGL", "Ray Tracing", "Procedural", "Portfolio", "Graphics Programming"],
  authors: [{ name: "Antigravity" }],
  openGraph: {
    title: "Antigravity | Premium Creative Engineer & Graphic Programmer Portfolio",
    description: "Explore custom interactive showcases built with Next.js, WebGL solvers, and procedural generators.",
    url: "https://antigravity.studio",
    siteName: "Antigravity Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
