import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jhizzle GO/AT — The Unofficial Record',
  description: 'A faithful Next.js port of the unofficial record.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;0,800;1,400&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
