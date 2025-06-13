import Image from 'next/image';
import { Avatar } from 'antd';

export const UserBadge = () => {
  return (
    <div className='flex flex-row gap-4'>
      <div className='border-secondary-grey-10 border-l' />
      <div className='flex h-[48px] cursor-pointer items-center justify-between gap-[72px] rounded-lg transition-colors duration-150 hover:bg-gray-50'>
        <div className='flex flex-row items-center gap-3'>
          <Avatar size={36} src='/images/default-profile.webp' />
          <div className='flex flex-col items-start gap-1'>
            <span className='text-large-b text-secondary-black'>Manoch Vilajit</span>
            <span className='text-xxs-r'>Manoch.Vil@gmail.com</span>
          </div>
        </div>
        <Image src={'/svg/chevron-down.svg'} alt='Chevron Down' width={48} height={48} />
      </div>
    </div>
  );
};
