import { IconProps } from '@typings/icon.type';

export const EditIcon = ({ width = 20, height = 20, className = '' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      {...(className && { className })}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.6098 5.46057L15.6209 9.52314L6.91093 18.3448L3.33471 18.7447C2.85596 18.7983 2.45146 18.3883 2.50473 17.9034L2.90264 14.2788L11.6098 5.46057ZM18.1017 4.85573L16.2184 2.94821C15.6309 2.3532 14.6781 2.3532 14.0906 2.94821L12.3188 4.74276L16.3299 8.80532L18.1017 7.01077C18.6892 6.41544 18.6892 5.45074 18.1017 4.85573Z'
        fill='currentColor'
      />
    </svg>
  );
};
