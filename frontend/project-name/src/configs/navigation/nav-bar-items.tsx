import { ReactNode } from 'react';
import { HouseIcon, SettingIcon } from '@icons';

type NavBarItem = {
  href: string;
  label: string;
  icon?: (className: string) => ReactNode | null;
};

export const navBarItems: NavBarItem[] = [
  {
    href: '/',
    label: 'หน้าแรก',
    icon: (className) => <HouseIcon className={className} />,
  },
  {
    href: '/setting',
    label: 'ตั้งค่า',
    icon: (className) => <SettingIcon className={className} />,
  },
];
