import { IconProps } from '@typings/icon.type';

export const StepperIcon = ({ width = 60, height = 60, className = '' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      {...(className && { className })}
      viewBox='0 0 60 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='30' cy='30' r='20' fill='currentColor' />
    </svg>
  );
};
