'use client';

import { type ReactNode } from 'react';
import { App as AntdApp } from 'antd';

type AntdProviderProps = {
  children?: ReactNode;
};

export const AntdProvider = ({ children }: AntdProviderProps) => {
  return <AntdApp>{children}</AntdApp>;
};
