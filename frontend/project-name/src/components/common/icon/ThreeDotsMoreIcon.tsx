import { IconProps } from '@typings/icon.type';

export const ThreeDotsMoreIcon = ({ width = 20, height = 20, className = '' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      {...(className && { className })}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='10' cy='2' r='2' fill='currentColor' />
      <circle cx='10' cy='10' r='2' fill='currentColor' />
      <circle cx='10' cy='18' r='2' fill='currentColor' />
    </svg>
  );
};
