/* eslint-disable new-cap */
'use client';
import React, {useState} from 'react';
/* import type {Metadata} from 'next'; */
import {Inter} from 'next/font/google';
import 'beercss';
import 'material-dynamic-colors';
import './globals.css';
import NavBar from '@/components/ui/NavBar';
import ThemeToggle from '@/components/ui/ThemeToggle';

const inter = Inter({subsets: ['latin']});

/**
 * Metadata for the Next.js application.
 * @type {Metadata}
 */
/* export const metadata: Metadata = {
  title: 'MD3 Next.js Template',
  description:
    'Material Design 3 compliant Next.js website template, including features like: custom theming, Internationalization, PWA, SupaBase for data management, and Vercel for deployment.',
  authors: [{name: 'Cardo Pixel', url: 'https://github.com/CardoPixel'}],
  creator: 'Cardo Pixel',
  publisher: 'Vercel',
  metadataBase: new URL('https://${process.env.VERCEL_URL}'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/og-image.png',
  },
}; */

/**
 * Root layout component for the Next.js application.
 * This component wraps the entire application and applies global styles and layout.
 *
 * @param {Readonly<{children: React.ReactNode}>} props - The component props containing children nodes to render within the layout.
 * @return {JSX.Element} The root layout component wrapping the application's content.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('light');
  const handleThemeChange = (newTheme: React.SetStateAction<string>) => {
    setTheme(newTheme);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MD3 Next.js Template</title>
        <meta name="theme-color" content="#26b0fd" />
        <meta
          name="description"
          content="Material Design 3 compliant Next.js website template, including features like: custom theming, Internationalization, PWA, SupaBase for data management, and Vercel for deployment."
        />
        <meta name="author" content="Cardo Pixel" />
        <meta name="publisher" content="Vercel" />
        <link rel="canonical" href={`https://${process.env.VERCEL_URL}`} />
        <meta property="og:image" content="/og-image.png" />
      </head>
      <body className={`${inter.className} ${theme}`}>
        <NavBar />
        <ThemeToggle onThemeChange={handleThemeChange} />
        <main className="responsive">{children}</main>
      </body>
    </html>
  );
}
