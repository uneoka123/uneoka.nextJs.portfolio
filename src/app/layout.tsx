import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import { Toast } from '@/components/toast/toast';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import '@/scss/style.scss';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Welcome to Uneoka portfolio',
  keywords: 'web development, AI developemnt, NLP, chatbot develpment, front-end development, scss, javascript, react, next, python, django, node.js, typescript gulp',
  icons: {
    icon: [
      {
        url: 'favicon/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: 'favicon/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    apple: {
      url: 'favicon/apple-touch-icon.png',
      sizes: '180x180'
    },
    other: [
      {
        rel: 'mask-icon',
        url: 'favicon/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: 'favicon/site.webmanifest',
  themeColor: '#222222',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="home" className={nunito.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toast />
      </body>
    </html>
  );
};
