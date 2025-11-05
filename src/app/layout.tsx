import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
// ChatBubble, OnekoCat, and Quote removed per request
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/assets/profile.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/assets/profile.png" sizes="16x16" type="image/png" />
          <link rel="shortcut icon" href="/assets/profile.png" />
          <link rel="apple-touch-icon" href="/assets/profile.png" />
        </head>
        <body className={`font-hanken-grotesk antialiased background-grid`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <ReactLenis root>
              <Navbar />
              {children}
              <Footer />
              {/** Analytics disabled for now */}
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
