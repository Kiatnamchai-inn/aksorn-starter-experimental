'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

interface NavbarItemProps extends VariantProps<typeof navbarItemVariants> {
  href: string;
  label: string;
  icon?: (className: string) => ReactNode | null;
}

const navbarItemVariants = cva(
  'flex cursor-pointer flex-row items-center justify-center gap-4 rounded-[10px] border-0 p-3 p-[12px]',
  {
    variants: {
      active: {
        true: 'border-tertiary-light-link bg-tertiary-light-pink font-bold',
        false: 'text-secondary-grey-60 border-secondary-notification-grey border-2 font-normal',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

const NavbarItem = ({ href, label, icon }: NavbarItemProps) => {
  // Hooks
  const pathname = usePathname();

  // Functions and Declarations
  const isActive = pathname === href;
  const activeColorClass = isActive ? 'text-primary-red' : '';

  return (
    <Link href={href} className='flex w-full'>
      <div className={clsx(navbarItemVariants({ active: isActive }))}>
        {icon && icon(activeColorClass)}
        <span className={clsx('text-2b whitespace-nowrap', activeColorClass)}>{label}</span>
      </div>
    </Link>
  );
};

export default NavbarItem;
