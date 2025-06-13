import { Suspense } from 'react';
import Spinner from '@components/layout/Spinner';
import Header from '@components/layout/Header';

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>{children}</Suspense>
    </>
  );
}
