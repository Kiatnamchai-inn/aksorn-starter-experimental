'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type QueryClientProviderProps = {
  children?: ReactNode;
};

const queryClient = new QueryClient();

export const TanstackQueryProvider = ({ children }: QueryClientProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
