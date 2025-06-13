'use client';

import type { PropsWithChildren } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import '@components/modal/modals';

export const NiceModalProvider = ({ children }: PropsWithChildren) => {
  return <NiceModal.Provider>{children}</NiceModal.Provider>;
};
