'use client';

import { type ReactNode } from 'react';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

type NuqsProviderProps = {
  children?: ReactNode;
};

export const NuqsProvider = ({ children }: NuqsProviderProps) => {
  return <NuqsAdapter>{children}</NuqsAdapter>;
};
