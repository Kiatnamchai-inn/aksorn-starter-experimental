'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from '@icons';

const BackButton = () => {
  // Hooks
  const router = useRouter();

  // Functions
  const handleClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleClick}
      className='shadow-light-shadow hover:bg-secondary-white active:bg-secondary-white flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white'
    >
      <ChevronLeft className='text-secondary-black' />
    </button>
  );
};

export default BackButton;
