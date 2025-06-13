import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

type ButtonProps = {
  icon?: ReactNode;
  width?: number;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center border-2 font-semibold whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      priority: {
        primary: 'bg-primary-red text-white hover:bg-red-700',
        secondary: 'text-secondary-grey-60 border-secondary-grey-60 hover:bg-gray-100',
      },
      state: {
        default: '',
      },
    },
    defaultVariants: {
      priority: 'primary',
      state: 'default',
    },
  },
);

export default function Button({ className, children, priority, state, icon, width, ...props }: ButtonProps) {
  const specificStylingClasses = [
    width === undefined ? 'w-full' : `w-[${width}px]`,
    'h-[40px]',
    'gap-2',
    'rounded-[10px]',
    'pr-[16px]',
    'pl-[16px]',
    'ease-out',
    'duration-300',
  ];

  return (
    <button className={clsx(buttonVariants({ priority, state }), ...specificStylingClasses, className)} {...props}>
      {icon}
      <span className='text-medium-b'>{children}</span>
    </button>
  );
}
