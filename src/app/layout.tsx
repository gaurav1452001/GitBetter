import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GitBetter",
  description: "Contribute to open source projects more easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
