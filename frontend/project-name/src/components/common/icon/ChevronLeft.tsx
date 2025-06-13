import { IconProps } from '@typings/icon.type';

export const ChevronLeft = ({ width = 16, height = 16, className = '' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      {...(className && { className })}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12 1L4 8L12 15' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};
