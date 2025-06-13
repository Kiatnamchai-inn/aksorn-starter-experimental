import type { Metadata } from 'next';
import { Sarabun } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { TanstackQueryProvider, NuqsProvider, AntdProvider, NiceModalProvider } from '@providers';
import './globals.css';

const sarabun = Sarabun({
  variable: '--font-sarabun',
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Assessment Analysis | Aksorn',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${sarabun.variable} antialiased`}>
        <NextTopLoader color='#ED1C24' showSpinner={false} />
        <TanstackQueryProvider>
          <NuqsProvider>
            <AntdProvider>
              <NiceModalProvider>{children}</NiceModalProvider>
            </AntdProvider>
          </NuqsProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
