import Image from 'next/image';
import Link from 'next/link';
import { UserBadge } from '@components/layout/header/index';

const Header = () => {
  return (
    <div className='shadow-light-shadow flex h-17 flex-row items-center justify-between px-4 md:px-6 lg:px-8'>
      <div className='flex flex-row items-center gap-4'>
        <Link href='/' className='flex'>
          <Image src='/logo.svg' alt='Aksorn Logo' width={42} height={42} />
        </Link>
        <span className='text-2b text-secondary-black font-bold'>Assessment Analysis</span>
      </div>
      <UserBadge />
    </div>
  );
};

export default Header;
